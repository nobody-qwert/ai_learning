// Prompt Loader - Dynamically loads all prompt modules
class PromptLoader {
    constructor() {
        this.prompts = {};
        this.loadedCount = 0;
        this.totalPrompts = 7;
    }

    async loadAllPrompts() {
        const promptFiles = [
            'bouncing-ball.js',
            'multi-ball.js',
            '3d-physics.js',
            'simple-snake.js',
            'competitive-snake.js',
            '3d-snake.js',
            '3d-maze.js'
        ];

        const loadPromises = promptFiles.map(file => this.loadPromptFile(file));
        await Promise.all(loadPromises);
        
        return this.prompts;
    }

    async loadPromptFile(filename) {
        try {
            // Create script element to load the prompt file
            const script = document.createElement('script');
            script.src = `../prompts/${filename}`;
            
            return new Promise((resolve, reject) => {
                script.onload = () => {
                    // Extract the prompt variable from the global scope
                    const promptVarName = this.getPromptVariableName(filename);
                    if (window[promptVarName]) {
                        this.prompts[window[promptVarName].id] = window[promptVarName];
                        this.loadedCount++;
                    }
                    resolve();
                };
                
                script.onerror = () => {
                    console.error(`Failed to load prompt file: ${filename}`);
                    reject(new Error(`Failed to load ${filename}`));
                };
                
                document.head.appendChild(script);
            });
        } catch (error) {
            console.error(`Error loading prompt file ${filename}:`, error);
        }
    }

    getPromptVariableName(filename) {
        // Map filenames to their corresponding variable names
        const variableMap = {
            'bouncing-ball.js': 'bouncingBallPrompt',
            'multi-ball.js': 'multiBallPrompt',
            '3d-physics.js': 'physics3DPrompt',
            'simple-snake.js': 'simpleSnakePrompt',
            'competitive-snake.js': 'competitiveSnakePrompt',
            '3d-snake.js': 'snake3DPrompt',
            '3d-maze.js': 'maze3DPrompt'
        };
        
        return variableMap[filename];
    }

    getPrompt(id) {
        return this.prompts[id];
    }

    getAllPrompts() {
        return this.prompts;
    }

    isLoaded() {
        return this.loadedCount === this.totalPrompts;
    }
}

// Global instance
const promptLoader = new PromptLoader();
