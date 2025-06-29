// Agents Content Module
class AgentsContent {
    static getContent() {
        return {
            'agents-overview': {
                breadcrumb: ['Agents', 'Overview'],
                title: 'AI Coding Agents Comparison',
                content: `
                    <div class="content-section">
                        <h3>AI Coding Agents Overview</h3>
                        <p>AI coding agents are specialized tools that assist developers with code generation, completion, debugging, and optimization. Each has unique strengths and approaches to context discovery and code assistance.</p>
                        
                        <div class="comparison-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Agent</th>
                                        <th>Type</th>
                                        <th>Context Discovery</th>
                                        <th>Architecture</th>
                                        <th>Pricing</th>
                                        <th>Key Features</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>GitHub Copilot</strong></td>
                                        <td>Closed Source</td>
                                        <td>RAG + Code Context</td>
                                        <td>Single Agent</td>
                                        <td>Free/$10/$39/month</td>
                                        <td>IDE integration, real-time suggestions</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Claude (Anthropic)</strong></td>
                                        <td>Closed Source</td>
                                        <td>Agentic Discovery</td>
                                        <td>Multi-Agent</td>
                                        <td>Free/$17-20/month</td>
                                        <td>Long context, reasoning, file analysis</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Google Gemini</strong></td>
                                        <td>Closed Source</td>
                                        <td>RAG + Multimodal</td>
                                        <td>Single Agent</td>
                                        <td>Free/API pricing</td>
                                        <td>Multimodal input, Google integration</td>
                                    </tr>
                                    <tr>
                                        <td><strong>OpenAI GPT Models</strong></td>
                                        <td>Closed Source</td>
                                        <td>RAG</td>
                                        <td>Single Agent</td>
                                        <td>API pricing</td>
                                        <td>Natural language to code, reasoning</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Cline</strong></td>
                                        <td>Open Source</td>
                                        <td>Agentic Discovery</td>
                                        <td>Single Agent</td>
                                        <td>Free (requires API keys)</td>
                                        <td>Autonomous coding, file system access</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h3>Context Discovery Methods</h3>
                        <ul>
                            <li><strong>RAG (Retrieval-Augmented Generation):</strong> Retrieves relevant code snippets and documentation</li>
                            <li><strong>Agentic Discovery:</strong> Actively explores codebase and asks clarifying questions</li>
                            <li><strong>Code Context:</strong> Analyzes surrounding code and project structure</li>
                            <li><strong>Multimodal:</strong> Processes text, images, and other input types</li>
                        </ul>
                    </div>
                `
            }
        };
    }
}

// Export for use in main application
if (typeof window !== 'undefined') {
    window.AgentsContent = AgentsContent;
}
