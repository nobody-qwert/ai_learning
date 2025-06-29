// Content Manager Module
class ContentManager {
    constructor() {
        this.contentModules = new Map();
        this.loadedContent = new Map();
    }

    // Register content modules
    registerModule(name, moduleClass) {
        this.contentModules.set(name, moduleClass);
    }

    // Load all content from registered modules
    loadAllContent() {
        console.log('Loading content from registered modules:', Array.from(this.contentModules.keys()));
        this.contentModules.forEach((moduleClass, name) => {
            try {
                const content = moduleClass.getContent();
                console.log(`Content from ${name} module:`, Object.keys(content));
                Object.entries(content).forEach(([key, value]) => {
                    this.loadedContent.set(key, value);
                });
                console.log(`Loaded content from ${name} module`);
            } catch (error) {
                console.error(`Failed to load content from ${name} module:`, error);
            }
        });
    }

    // Get content by ID
    getContent(contentId) {
        return this.loadedContent.get(contentId) || {
            breadcrumb: ['Unknown'],
            title: 'Content Not Found',
            content: '<div class="content-error">Content not found</div>'
        };
    }

    // Get all content IDs
    getAllContentIds() {
        return Array.from(this.loadedContent.keys());
    }

    // Check if content exists
    hasContent(contentId) {
        return this.loadedContent.has(contentId);
    }

    // Search content
    searchContent(query) {
        const results = [];
        const searchTerm = query.toLowerCase();

        this.loadedContent.forEach((content, id) => {
            if (
                content.title.toLowerCase().includes(searchTerm) ||
                content.content.toLowerCase().includes(searchTerm)
            ) {
                results.push({
                    id,
                    title: content.title,
                    breadcrumb: content.breadcrumb,
                    relevance: this.calculateRelevance(searchTerm, content)
                });
            }
        });

        return results.sort((a, b) => b.relevance - a.relevance);
    }

    // Calculate search relevance
    calculateRelevance(searchTerm, content) {
        let relevance = 0;
        
        if (content.title.toLowerCase().includes(searchTerm)) {
            relevance += 10; // Title matches are more relevant
        }
        
        if (content.content.toLowerCase().includes(searchTerm)) {
            relevance += 5; // Content matches
        }

        return relevance;
    }

    // Initialize with default modules
    async initialize() {
        // Wait for modules to be available
        await this.waitForModules();
        
        // Register available modules
        if (window.AIModelsContent) {
            this.registerModule('ai-models', window.AIModelsContent);
        } else {
            console.warn('AIModelsContent not found');
        }
        
        if (window.AgentsContent) {
            this.registerModule('agents', window.AgentsContent);
        } else {
            console.warn('AgentsContent not found');
        }
        
        if (window.SetupContent) {
            this.registerModule('setup', window.SetupContent);
        } else {
            console.warn('SetupContent not found');
        }

        // Load all content
        this.loadAllContent();
    }

    // Wait for content modules to be loaded
    async waitForModules() {
        const maxWait = 5000; // 5 seconds
        const checkInterval = 100; // 100ms
        let waited = 0;

        return new Promise((resolve) => {
            const checkModules = () => {
                // Check which modules are available and proceed if we have at least one
                const availableModules = [
                    window.AIModelsContent,
                    window.AgentsContent,
                    window.SetupContent
                ].filter(Boolean);
                
                if (availableModules.length > 0 || waited >= maxWait) {
                    if (waited >= maxWait) {
                        console.warn('Timeout waiting for content modules, proceeding with available modules');
                    }
                    resolve();
                } else {
                    waited += checkInterval;
                    setTimeout(checkModules, checkInterval);
                }
            };
            checkModules();
        });
    }

    // Get content statistics
    getStats() {
        const stats = {
            totalContent: this.loadedContent.size,
            moduleCount: this.contentModules.size,
            contentByModule: {}
        };

        this.contentModules.forEach((moduleClass, name) => {
            try {
                const content = moduleClass.getContent();
                stats.contentByModule[name] = Object.keys(content).length;
            } catch (error) {
                stats.contentByModule[name] = 0;
            }
        });

        return stats;
    }
}

// Export for use in main application
if (typeof window !== 'undefined') {
    window.ContentManager = ContentManager;
}
