// Main Application Controller
class AILearningHub {
    constructor() {
        this.currentTopic = null;
        this.currentSubtopic = null;
        this.prompts = new Map();
        this.contentManager = new ContentManager();
        this.init();
    }

    async init() {
        try {
            // Initialize components
            this.initializeEventListeners();
            await this.loadPrompts();
            await this.contentManager.initialize();
            this.updatePromptCount();
            
            console.log('AI Learning Hub initialized successfully');
        } catch (error) {
            console.error('Failed to initialize AI Learning Hub:', error);
            this.showError('Failed to initialize application');
        }
    }

    initializeEventListeners() {
        // Topic header click handlers
        document.querySelectorAll('.topic-header').forEach(header => {
            header.addEventListener('click', (e) => {
                const topic = e.currentTarget.dataset.topic;
                this.toggleTopic(topic);
            });
        });

        // Subtopic click handlers (will be added dynamically for prompts)
        document.addEventListener('click', (e) => {
            if (e.target.closest('.subtopic-item')) {
                const subtopicItem = e.target.closest('.subtopic-item');
                const contentId = subtopicItem.dataset.content;
                const promptId = subtopicItem.dataset.prompt;
                
                if (promptId) {
                    this.loadPromptContent(promptId);
                } else if (contentId) {
                    this.loadStaticContent(contentId);
                }
            }
        });

        // Copy button handlers (will be added dynamically)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('copy-button')) {
                this.copyToClipboard(e.target);
            }
        });
    }

    toggleTopic(topicId) {
        const header = document.querySelector(`[data-topic="${topicId}"]`);
        const subtopicList = document.getElementById(`${topicId}-subtopics`);
        
        if (!header || !subtopicList) return;

        const isActive = header.classList.contains('active');
        
        // Close all other topics
        document.querySelectorAll('.topic-header').forEach(h => {
            h.classList.remove('active');
        });
        document.querySelectorAll('.subtopic-list').forEach(list => {
            list.classList.remove('expanded');
        });

        // Toggle current topic
        if (!isActive) {
            header.classList.add('active');
            subtopicList.classList.add('expanded');
            this.currentTopic = topicId;
        } else {
            this.currentTopic = null;
        }
    }

    async loadPrompts() {
        const promptFiles = [
            '3d-maze.js',
            '3d-physics.js', 
            '3d-snake.js',
            'bouncing-ball.js',
            'competitive-snake.js',
            'multi-ball.js',
            'simple-snake.js'
        ];

        const loadPromises = promptFiles.map(async (filename) => {
            try {
                const response = await fetch(`prompts/${filename}`);
                if (!response.ok) {
                    throw new Error(`Failed to load ${filename}`);
                }
                
                const content = await response.text();
                const promptData = this.extractPromptData(content, filename);
                
                if (promptData) {
                    this.prompts.set(promptData.id, promptData);
                }
            } catch (error) {
                console.warn(`Failed to load prompt ${filename}:`, error);
            }
        });

        await Promise.all(loadPromises);
        this.populatePromptSubtopics();
    }

    extractPromptData(content, filename) {
        try {
            // Try to extract prompt data using regex patterns first
            const promptMatch = content.match(/const\s+(\w+)\s*=\s*{([\s\S]*?)};/);
            
            if (promptMatch) {
                // Try to parse the object structure
                const objectContent = '{' + promptMatch[2] + '}';
                
                // Extract key fields using regex
                const id = this.extractField(content, 'id') || filename.replace('.js', '');
                const title = this.extractField(content, 'title') || this.formatTitle(id);
                const icon = this.extractField(content, 'icon') || '🔧';
                const difficulty = this.extractField(content, 'difficulty') || 'Unknown';
                const description = this.extractField(content, 'description') || `Prompt file: ${filename}`;
                const features = this.extractArrayField(content, 'features') || [];
                const prompt = this.extractField(content, 'prompt') || content;
                
                return {
                    id,
                    title,
                    icon,
                    difficulty,
                    description,
                    features,
                    prompt
                };
            } else {
                // Fallback: create basic prompt data from filename
                const id = filename.replace('.js', '');
                return {
                    id: id,
                    title: this.formatTitle(id),
                    icon: '🔧',
                    difficulty: 'Unknown',
                    description: `Prompt file: ${filename}`,
                    features: [],
                    prompt: content
                };
            }
        } catch (error) {
            console.error(`Error extracting prompt data from ${filename}:`, error);
            return null;
        }
    }

    extractField(content, fieldName) {
        // Special handling for the prompt field which can be very long and contain special characters
        if (fieldName === 'prompt') {
            return this.extractPromptField(content);
        }
        
        const patterns = [
            new RegExp(`${fieldName}:\\s*['"\`]([^'"\`]*?)['"\`]`, 'i'),
            new RegExp(`${fieldName}:\\s*'([^']*?)'`, 'i'),
            new RegExp(`${fieldName}:\\s*"([^"]*?)"`, 'i'),
            new RegExp(`${fieldName}:\\s*\`([^\`]*?)\``, 'i')
        ];
        
        for (const pattern of patterns) {
            const match = content.match(pattern);
            if (match) {
                return match[1];
            }
        }
        return null;
    }

    extractPromptField(content) {
        // Look for prompt field with backticks (template literals)
        const backtickPattern = /prompt:\s*`([\s\S]*?)`(?:\s*[,}])/;
        let match = content.match(backtickPattern);
        
        if (match) {
            return match[1];
        }
        
        // Look for prompt field with double quotes
        const doubleQuotePattern = /prompt:\s*"([\s\S]*?)"(?:\s*[,}])/;
        match = content.match(doubleQuotePattern);
        
        if (match) {
            return match[1];
        }
        
        // Look for prompt field with single quotes
        const singleQuotePattern = /prompt:\s*'([\s\S]*?)'(?:\s*[,}])/;
        match = content.match(singleQuotePattern);
        
        if (match) {
            return match[1];
        }
        
        // If no specific prompt field found, return the entire content
        return content;
    }

    extractArrayField(content, fieldName) {
        const pattern = new RegExp(`${fieldName}:\\s*\\[(.*?)\\]`, 'is');
        const match = content.match(pattern);
        
        if (match) {
            try {
                // Extract array items
                const arrayContent = match[1];
                const items = [];
                const itemPattern = /['"`]([^'"`]*?)['"`]/g;
                let itemMatch;
                
                while ((itemMatch = itemPattern.exec(arrayContent)) !== null) {
                    items.push(itemMatch[1]);
                }
                
                return items;
            } catch (error) {
                console.warn(`Failed to parse array field ${fieldName}:`, error);
                return [];
            }
        }
        
        return [];
    }

    formatTitle(id) {
        return id.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    populatePromptSubtopics() {
        const container = document.getElementById('prompting-ai-subtopics');
        if (!container) return;

        container.innerHTML = '';
        
        // Define difficulty order for sorting
        const difficultyOrder = { 'easy': 1, 'medium': 2, 'hard': 3, 'expert': 4, 'unknown': 5 };
        
        Array.from(this.prompts.values())
            .sort((a, b) => {
                // First sort by difficulty
                const diffA = difficultyOrder[a.difficulty.toLowerCase()] || 5;
                const diffB = difficultyOrder[b.difficulty.toLowerCase()] || 5;
                
                if (diffA !== diffB) {
                    return diffA - diffB;
                }
                
                // If same difficulty, sort alphabetically by title
                return a.title.localeCompare(b.title);
            })
            .forEach(prompt => {
                const subtopicItem = document.createElement('div');
                subtopicItem.className = 'subtopic-item';
                subtopicItem.dataset.prompt = prompt.id;
                
                subtopicItem.innerHTML = `
                    <span class="subtopic-bullet">•</span>
                    <span class="subtopic-name">${prompt.title}</span>
                    <span class="subtopic-meta">
                        <span class="subtopic-difficulty ${prompt.difficulty.toLowerCase()}">${prompt.difficulty}</span>
                    </span>
                `;
                
                container.appendChild(subtopicItem);
            });
    }

    updatePromptCount() {
        const countElement = document.getElementById('prompt-count');
        if (countElement) {
            countElement.textContent = this.prompts.size;
        }
    }

    loadPromptContent(promptId) {
        const prompt = this.prompts.get(promptId);
        if (!prompt) {
            this.showError(`Prompt not found: ${promptId}`);
            return;
        }

        // Update active states
        document.querySelectorAll('.subtopic-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-prompt="${promptId}"]`).classList.add('active');

        // Update breadcrumb
        this.updateBreadcrumb(['Prompting AI', prompt.title]);

        // Render content
        this.renderPromptContent(prompt);
        this.currentSubtopic = promptId;
    }

    renderPromptContent(prompt) {
        const contentBody = document.getElementById('content-body');
        
        const featuresHtml = prompt.features && prompt.features.length > 0 
            ? `
                <div class="prompt-features">
                    <h3>Features</h3>
                    <ul class="features-list">
                        ${prompt.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            ` : '';

        contentBody.innerHTML = `
            <div class="prompt-content">
                <div class="prompt-header">
                    <div class="prompt-title">
                        <span class="prompt-icon">${prompt.icon || '🔧'}</span>
                        <h2>${prompt.title}</h2>
                    </div>
                    <div class="prompt-meta">
                        <span class="prompt-difficulty">${prompt.difficulty}</span>
                        <span class="prompt-id">${prompt.id}</span>
                    </div>
                    <p class="prompt-description">${prompt.description}</p>
                </div>
                
                ${featuresHtml}
                
                <div class="prompt-code">
                    <h3>Prompt Content</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">prompt</span>
                            <button class="copy-button" data-copy-target="prompt-content" title="Copy to clipboard">📋</button>
                        </div>
                        <div class="code-content" id="prompt-content">${this.escapeHtml(prompt.prompt)}</div>
                    </div>
                </div>
            </div>
        `;
    }

    loadStaticContent(contentId) {
        console.log('Loading static content for:', contentId);
        console.log('Available content IDs:', this.contentManager.getAllContentIds());
        
        // Update active states
        document.querySelectorAll('.subtopic-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeElement = document.querySelector(`[data-content="${contentId}"]`);
        if (activeElement) {
            activeElement.classList.add('active');
        }

        const content = this.getStaticContent(contentId);
        console.log('Retrieved content:', content);
        this.updateBreadcrumb(content.breadcrumb);
        this.renderStaticContent(content);
        this.currentSubtopic = contentId;
    }

    getStaticContent(contentId) {
        const content = this.contentManager.getContent(contentId);
        console.log(`Getting content for ${contentId}:`, content);
        return content;
    }

    renderStaticContent(content) {
        const contentBody = document.getElementById('content-body');
        contentBody.innerHTML = `
            <div class="content-section">
                <h2>${content.title}</h2>
                ${content.content}
            </div>
        `;
    }

    updateBreadcrumb(items) {
        const breadcrumb = document.getElementById('breadcrumb');
        breadcrumb.innerHTML = items.map((item, index) => 
            `<span class="breadcrumb-item ${index === items.length - 1 ? 'active' : ''}">${item}</span>`
        ).join('');
    }

    async copyToClipboard(button) {
        const targetId = button.dataset.copyTarget;
        const targetElement = document.getElementById(targetId);
        
        if (!targetElement) return;

        try {
            await navigator.clipboard.writeText(targetElement.textContent);
            
            const originalIcon = button.textContent;
            button.textContent = '✓';
            button.classList.add('copied');
            button.title = 'Copied!';
            
            setTimeout(() => {
                button.textContent = originalIcon;
                button.classList.remove('copied');
                button.title = 'Copy to clipboard';
            }, 2000);
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
            
            // Show error feedback
            const originalIcon = button.textContent;
            button.textContent = '✗';
            button.style.color = '#ef4444';
            button.title = 'Copy failed';
            
            setTimeout(() => {
                button.textContent = originalIcon;
                button.style.color = '';
                button.title = 'Copy to clipboard';
            }, 2000);
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showError(message) {
        const contentBody = document.getElementById('content-body');
        contentBody.innerHTML = `
            <div class="content-error">
                <h3>Error</h3>
                <div class="error-message">${message}</div>
            </div>
        `;
    }

    showLoading() {
        const contentBody = document.getElementById('content-body');
        contentBody.innerHTML = `
            <div class="content-loading">
                <div class="loading-spinner"></div>
                Loading content...
            </div>
        `;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.aiLearningHub = new AILearningHub();
});
