// Content Loader Module
class ContentLoader {
    constructor() {
        this.cache = new Map();
        this.loadingStates = new Map();
        this.retryAttempts = new Map();
        this.maxRetries = 3;
        this.retryDelay = 1000; // 1 second
    }

    async loadPromptFile(filename) {
        const cacheKey = `prompt:${filename}`;
        
        // Return cached content if available
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        // Check if already loading
        if (this.loadingStates.has(cacheKey)) {
            return this.loadingStates.get(cacheKey);
        }

        // Create loading promise
        const loadingPromise = this._loadPromptWithRetry(filename);
        this.loadingStates.set(cacheKey, loadingPromise);

        try {
            const content = await loadingPromise;
            this.cache.set(cacheKey, content);
            this.loadingStates.delete(cacheKey);
            this.retryAttempts.delete(cacheKey);
            return content;
        } catch (error) {
            this.loadingStates.delete(cacheKey);
            throw error;
        }
    }

    async _loadPromptWithRetry(filename) {
        const cacheKey = `prompt:${filename}`;
        const attempts = this.retryAttempts.get(cacheKey) || 0;

        try {
            const response = await fetch(`prompts/${filename}`);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const content = await response.text();
            
            if (!content.trim()) {
                throw new Error('Empty file content');
            }

            return content;
        } catch (error) {
            console.warn(`Failed to load ${filename} (attempt ${attempts + 1}):`, error.message);

            if (attempts < this.maxRetries) {
                this.retryAttempts.set(cacheKey, attempts + 1);
                
                // Wait before retrying
                await this._delay(this.retryDelay * (attempts + 1));
                
                return this._loadPromptWithRetry(filename);
            } else {
                this.retryAttempts.delete(cacheKey);
                throw new Error(`Failed to load ${filename} after ${this.maxRetries} attempts: ${error.message}`);
            }
        }
    }

    async loadAllPrompts(filenames) {
        const results = new Map();
        const errors = [];

        // Load all files concurrently
        const loadPromises = filenames.map(async (filename) => {
            try {
                const content = await this.loadPromptFile(filename);
                results.set(filename, content);
            } catch (error) {
                errors.push({ filename, error: error.message });
                console.error(`Failed to load ${filename}:`, error);
            }
        });

        await Promise.allSettled(loadPromises);

        return {
            results,
            errors,
            successCount: results.size,
            errorCount: errors.length
        };
    }

    parsePromptContent(content, filename) {
        try {
            // Create a safe execution context
            const context = this._createSafeContext();
            
            // Execute the content in the safe context
            const result = this._executeInContext(content, context);
            
            if (result && typeof result === 'object') {
                return this._validatePromptStructure(result, filename);
            } else {
                // Fallback: try to extract prompt data using regex
                return this._extractPromptDataFallback(content, filename);
            }
        } catch (error) {
            console.warn(`Failed to parse ${filename}:`, error.message);
            return this._createFallbackPrompt(content, filename);
        }
    }

    _createSafeContext() {
        // Create a minimal context for executing prompt files
        return {
            console: {
                log: () => {}, // Suppress console output
                warn: () => {},
                error: () => {}
            },
            // Add other safe globals if needed
        };
    }

    _executeInContext(code, context) {
        try {
            // Create a function that executes the code with the given context
            const func = new Function(...Object.keys(context), `
                ${code}
                
                // Try to find and return the prompt object
                const possibleNames = [
                    'maze3DPrompt', 'physics3DPrompt', 'snake3DPrompt',
                    'bouncingBallPrompt', 'competitiveSnakePrompt', 'multiBallPrompt',
                    'promptLoaderPrompt', 'simpleSnakePrompt'
                ];
                
                for (const name of possibleNames) {
                    if (typeof eval(name) !== 'undefined') {
                        return eval(name);
                    }
                }
                
                return null;
            `);
            
            return func(...Object.values(context));
        } catch (error) {
            throw new Error(`Execution failed: ${error.message}`);
        }
    }

    _validatePromptStructure(prompt, filename) {
        const required = ['id', 'title'];
        const missing = required.filter(field => !prompt[field]);
        
        if (missing.length > 0) {
            console.warn(`Prompt ${filename} missing required fields: ${missing.join(', ')}`);
        }

        // Ensure all required fields have defaults
        return {
            id: prompt.id || filename.replace('.js', ''),
            title: prompt.title || this._formatTitle(filename),
            icon: prompt.icon || '🔧',
            difficulty: prompt.difficulty || 'Unknown',
            description: prompt.description || `Prompt from ${filename}`,
            features: Array.isArray(prompt.features) ? prompt.features : [],
            prompt: prompt.prompt || 'No prompt content available',
            ...prompt // Include any additional fields
        };
    }

    _extractPromptDataFallback(content, filename) {
        // Try to extract prompt data using regex patterns
        const patterns = {
            id: /id:\s*['"`]([^'"`]+)['"`]/,
            title: /title:\s*['"`]([^'"`]+)['"`]/,
            icon: /icon:\s*['"`]([^'"`]+)['"`]/,
            difficulty: /difficulty:\s*['"`]([^'"`]+)['"`]/,
            description: /description:\s*['"`]([^'"`]+)['"`]/,
            prompt: /prompt:\s*['"`]([\s\S]*?)['"`](?:\s*[,}])/
        };

        const extracted = {};
        
        Object.entries(patterns).forEach(([key, pattern]) => {
            const match = content.match(pattern);
            if (match) {
                extracted[key] = match[1];
            }
        });

        return this._validatePromptStructure(extracted, filename);
    }

    _createFallbackPrompt(content, filename) {
        const id = filename.replace('.js', '');
        
        return {
            id,
            title: this._formatTitle(id),
            icon: '🔧',
            difficulty: 'Unknown',
            description: `Prompt file: ${filename}`,
            features: [],
            prompt: content
        };
    }

    _formatTitle(id) {
        return id.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    _delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Cache management
    clearCache() {
        this.cache.clear();
        this.loadingStates.clear();
        this.retryAttempts.clear();
    }

    getCacheSize() {
        return this.cache.size;
    }

    getCacheKeys() {
        return Array.from(this.cache.keys());
    }

    removeCacheEntry(key) {
        return this.cache.delete(key);
    }

    // Preload functionality
    async preloadPrompts(filenames) {
        console.log(`Preloading ${filenames.length} prompt files...`);
        
        const startTime = Date.now();
        const result = await this.loadAllPrompts(filenames);
        const endTime = Date.now();
        
        console.log(`Preloading completed in ${endTime - startTime}ms`);
        console.log(`Successfully loaded: ${result.successCount}/${filenames.length} files`);
        
        if (result.errors.length > 0) {
            console.warn('Failed to load files:', result.errors);
        }
        
        return result;
    }

    // Health check
    async healthCheck() {
        const testFile = 'simple-snake.js'; // Use a known file for testing
        
        try {
            const startTime = Date.now();
            await this.loadPromptFile(testFile);
            const endTime = Date.now();
            
            return {
                status: 'healthy',
                responseTime: endTime - startTime,
                cacheSize: this.getCacheSize()
            };
        } catch (error) {
            return {
                status: 'unhealthy',
                error: error.message,
                cacheSize: this.getCacheSize()
            };
        }
    }
}

// File system utilities
class FileSystemHelper {
    static async checkFileExists(path) {
        try {
            const response = await fetch(path, { method: 'HEAD' });
            return response.ok;
        } catch (error) {
            return false;
        }
    }

    static async getFileInfo(path) {
        try {
            const response = await fetch(path, { method: 'HEAD' });
            
            if (!response.ok) {
                throw new Error(`File not found: ${path}`);
            }

            return {
                exists: true,
                size: response.headers.get('content-length'),
                lastModified: response.headers.get('last-modified'),
                contentType: response.headers.get('content-type')
            };
        } catch (error) {
            return {
                exists: false,
                error: error.message
            };
        }
    }

    static getFileExtension(filename) {
        return filename.split('.').pop().toLowerCase();
    }

    static getBaseName(filename) {
        return filename.split('.').slice(0, -1).join('.');
    }
}

// Export for use in main application
if (typeof window !== 'undefined') {
    window.ContentLoader = ContentLoader;
    window.FileSystemHelper = FileSystemHelper;
}
