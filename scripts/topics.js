// Topic Management Module
class TopicManager {
    constructor() {
        this.topics = {
            'ai-models': {
                id: 'ai-models',
                title: 'AI Models',
                description: 'Overview of major AI models and platforms',
                subtopics: [
                    {
                        id: 'ai-models-overview',
                        title: 'Overview',
                        description: 'Introduction to major AI models and their capabilities'
                    }
                ]
            },
            'prompting-ai': {
                id: 'prompting-ai',
                title: 'Prompting AI',
                description: 'AI prompt engineering and examples',
                subtopics: [] // Will be populated dynamically from prompt files
            },
            'agents': {
                id: 'agents',
                title: 'Agents',
                description: 'AI coding agents and development tools',
                subtopics: [
                    {
                        id: 'agents-overview',
                        title: 'Overview',
                        description: 'Comparison of AI coding agents and their capabilities'
                    }
                ]
            },
            'local-setup': {
                id: 'local-setup',
                title: 'Local Setup',
                description: 'Development environment and tool setup',
                subtopics: [
                    {
                        id: 'setup-environment',
                        title: 'Environment',
                        description: 'Setting up your development environment'
                    },
                    {
                        id: 'setup-tools',
                        title: 'Tools',
                        description: 'Essential development tools and utilities'
                    }
                ]
            },
            'dangers': {
                id: 'dangers',
                title: 'Dangers',
                description: 'Security risks and vulnerabilities in AI systems',
                subtopics: [
                    {
                        id: 'code-injection',
                        title: 'Code Injection',
                        description: 'Understanding and preventing code injection attacks on AI systems'
                    }
                ]
            }
        };
    }

    getTopic(topicId) {
        return this.topics[topicId] || null;
    }

    getAllTopics() {
        return Object.values(this.topics);
    }

    getSubtopic(topicId, subtopicId) {
        const topic = this.getTopic(topicId);
        if (!topic) return null;
        
        return topic.subtopics.find(subtopic => subtopic.id === subtopicId) || null;
    }

    addPromptSubtopics(prompts) {
        const promptingTopic = this.topics['prompting-ai'];
        if (!promptingTopic) return;

        promptingTopic.subtopics = Array.from(prompts.values()).map(prompt => ({
            id: prompt.id,
            title: prompt.title,
            description: prompt.description,
            difficulty: prompt.difficulty,
            icon: prompt.icon,
            type: 'prompt'
        }));
    }

    getTopicStats() {
        return {
            totalTopics: Object.keys(this.topics).length,
            totalSubtopics: Object.values(this.topics).reduce((sum, topic) => sum + topic.subtopics.length, 0),
            promptCount: this.topics['prompting-ai'].subtopics.length,
            agentCount: this.topics['agents'].subtopics.length,
            setupCount: this.topics['local-setup'].subtopics.length
        };
    }

    searchSubtopics(query) {
        const results = [];
        const searchTerm = query.toLowerCase();

        Object.values(this.topics).forEach(topic => {
            topic.subtopics.forEach(subtopic => {
                if (
                    subtopic.title.toLowerCase().includes(searchTerm) ||
                    subtopic.description.toLowerCase().includes(searchTerm)
                ) {
                    results.push({
                        ...subtopic,
                        topicId: topic.id,
                        topicTitle: topic.title
                    });
                }
            });
        });

        return results;
    }

    getRecentSubtopics(limit = 5) {
        // This would typically come from user interaction history
        // For now, return a sample of subtopics
        const allSubtopics = [];
        
        Object.values(this.topics).forEach(topic => {
            topic.subtopics.forEach(subtopic => {
                allSubtopics.push({
                    ...subtopic,
                    topicId: topic.id,
                    topicTitle: topic.title
                });
            });
        });

        return allSubtopics.slice(0, limit);
    }

    validateTopicStructure() {
        const errors = [];

        Object.entries(this.topics).forEach(([key, topic]) => {
            if (!topic.id || !topic.title) {
                errors.push(`Topic ${key} missing required fields`);
            }

            if (!Array.isArray(topic.subtopics)) {
                errors.push(`Topic ${key} subtopics must be an array`);
            } else {
                topic.subtopics.forEach((subtopic, index) => {
                    if (!subtopic.id || !subtopic.title) {
                        errors.push(`Topic ${key} subtopic ${index} missing required fields`);
                    }
                });
            }
        });

        return errors;
    }
}

// Navigation utilities
class NavigationHelper {
    constructor(topicManager) {
        this.topicManager = topicManager;
        this.history = [];
        this.currentIndex = -1;
    }

    navigateTo(topicId, subtopicId = null) {
        const navigationItem = {
            topicId,
            subtopicId,
            timestamp: Date.now()
        };

        // Remove any items after current index (for back/forward functionality)
        this.history = this.history.slice(0, this.currentIndex + 1);
        
        // Add new item
        this.history.push(navigationItem);
        this.currentIndex = this.history.length - 1;

        // Limit history size
        if (this.history.length > 50) {
            this.history = this.history.slice(-50);
            this.currentIndex = this.history.length - 1;
        }

        return navigationItem;
    }

    canGoBack() {
        return this.currentIndex > 0;
    }

    canGoForward() {
        return this.currentIndex < this.history.length - 1;
    }

    goBack() {
        if (this.canGoBack()) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }
        return null;
    }

    goForward() {
        if (this.canGoForward()) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }
        return null;
    }

    getCurrentItem() {
        return this.currentIndex >= 0 ? this.history[this.currentIndex] : null;
    }

    getHistory() {
        return [...this.history];
    }

    clearHistory() {
        this.history = [];
        this.currentIndex = -1;
    }

    getBreadcrumb(topicId, subtopicId = null) {
        const breadcrumb = [];
        
        const topic = this.topicManager.getTopic(topicId);
        if (topic) {
            breadcrumb.push(topic.title);
            
            if (subtopicId) {
                const subtopic = this.topicManager.getSubtopic(topicId, subtopicId);
                if (subtopic) {
                    breadcrumb.push(subtopic.title);
                }
            }
        }

        return breadcrumb;
    }
}

// Search functionality
class SearchManager {
    constructor(topicManager) {
        this.topicManager = topicManager;
        this.searchIndex = new Map();
        this.buildSearchIndex();
    }

    buildSearchIndex() {
        // Build a search index for faster searching
        Object.values(this.topicManager.topics).forEach(topic => {
            topic.subtopics.forEach(subtopic => {
                const searchableText = [
                    subtopic.title,
                    subtopic.description,
                    topic.title
                ].join(' ').toLowerCase();

                const words = searchableText.split(/\s+/);
                words.forEach(word => {
                    if (word.length > 2) { // Ignore very short words
                        if (!this.searchIndex.has(word)) {
                            this.searchIndex.set(word, []);
                        }
                        this.searchIndex.get(word).push({
                            topicId: topic.id,
                            subtopicId: subtopic.id,
                            relevance: this.calculateRelevance(word, subtopic.title, subtopic.description)
                        });
                    }
                });
            });
        });
    }

    calculateRelevance(word, title, description) {
        let relevance = 0;
        
        if (title.toLowerCase().includes(word)) {
            relevance += 10; // Title matches are more relevant
        }
        
        if (description.toLowerCase().includes(word)) {
            relevance += 5; // Description matches
        }

        return relevance;
    }

    search(query, limit = 10) {
        if (!query || query.length < 2) {
            return [];
        }

        const searchTerms = query.toLowerCase().split(/\s+/);
        const results = new Map();

        searchTerms.forEach(term => {
            // Exact matches
            if (this.searchIndex.has(term)) {
                this.searchIndex.get(term).forEach(item => {
                    const key = `${item.topicId}-${item.subtopicId}`;
                    if (!results.has(key)) {
                        results.set(key, { ...item, score: 0 });
                    }
                    results.get(key).score += item.relevance;
                });
            }

            // Partial matches
            this.searchIndex.forEach((items, word) => {
                if (word.includes(term) && word !== term) {
                    items.forEach(item => {
                        const key = `${item.topicId}-${item.subtopicId}`;
                        if (!results.has(key)) {
                            results.set(key, { ...item, score: 0 });
                        }
                        results.get(key).score += item.relevance * 0.5; // Partial matches get lower score
                    });
                }
            });
        });

        // Convert to array and sort by score
        const sortedResults = Array.from(results.values())
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);

        // Enrich with topic and subtopic data
        return sortedResults.map(result => {
            const topic = this.topicManager.getTopic(result.topicId);
            const subtopic = this.topicManager.getSubtopic(result.topicId, result.subtopicId);
            
            return {
                ...result,
                topic: topic ? topic.title : 'Unknown',
                subtopic: subtopic ? subtopic.title : 'Unknown',
                description: subtopic ? subtopic.description : ''
            };
        });
    }

    rebuildIndex() {
        this.searchIndex.clear();
        this.buildSearchIndex();
    }
}

// Export for use in main application
if (typeof window !== 'undefined') {
    window.TopicManager = TopicManager;
    window.NavigationHelper = NavigationHelper;
    window.SearchManager = SearchManager;
}
