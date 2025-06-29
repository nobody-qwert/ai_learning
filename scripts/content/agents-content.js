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
                                        <td>$10/month</td>
                                        <td>IDE integration, real-time suggestions</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Claude Code</strong></td>
                                        <td>Closed Source</td>
                                        <td>Agentic Discovery</td>
                                        <td>Multi-Agent</td>
                                        <td>$20/month</td>
                                        <td>Long context, reasoning, file analysis</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Google Gemini</strong></td>
                                        <td>Closed Source</td>
                                        <td>RAG + Multimodal</td>
                                        <td>Single Agent</td>
                                        <td>Free/Paid tiers</td>
                                        <td>CLI tools, multimodal input</td>
                                    </tr>
                                    <tr>
                                        <td><strong>OpenAI Codex</strong></td>
                                        <td>Closed Source</td>
                                        <td>RAG</td>
                                        <td>Single Agent</td>
                                        <td>API pricing</td>
                                        <td>Natural language to code</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Cline AI</strong></td>
                                        <td>Open Source</td>
                                        <td>Agentic Discovery</td>
                                        <td>Multi-Agent</td>
                                        <td>Free</td>
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
                        
                        <h3>Architecture Types</h3>
                        <ul>
                            <li><strong>Single Agent:</strong> One AI model handles all tasks</li>
                            <li><strong>Multi-Agent:</strong> Multiple specialized agents work together</li>
                        </ul>
                    </div>
                `
            },
            'github-copilot': {
                breadcrumb: ['Agents', 'GitHub Copilot'],
                title: 'GitHub Copilot',
                content: `
                    <div class="content-section">
                        <h3>Overview</h3>
                        <p>GitHub Copilot is an AI pair programmer developed by GitHub in collaboration with OpenAI. It provides real-time code suggestions and completions directly in your IDE.</p>
                        
                        <h3>Key Features</h3>
                        <ul>
                            <li>Real-time code completion and suggestions</li>
                            <li>Support for dozens of programming languages</li>
                            <li>IDE integration (VS Code, JetBrains, Neovim)</li>
                            <li>Context-aware suggestions based on comments and code</li>
                            <li>Function and class generation from natural language</li>
                        </ul>
                        
                        <h3>Context Discovery</h3>
                        <p>Uses RAG combined with code context analysis:</p>
                        <ul>
                            <li>Analyzes open files and tabs</li>
                            <li>Considers cursor position and surrounding code</li>
                            <li>Leverages comments and docstrings for intent</li>
                            <li>Retrieves patterns from training data</li>
                        </ul>
                        
                        <h3>Pricing</h3>
                        <ul>
                            <li>Individual: $10/month or $100/year</li>
                            <li>Business: $19/user/month</li>
                            <li>Enterprise: $39/user/month</li>
                            <li>Free for verified students and open source maintainers</li>
                        </ul>
                        
                        <div class="external-link">
                            <a href="https://github.com/features/copilot" target="_blank">🔗 Official GitHub Copilot Site</a>
                        </div>
                    </div>
                `
            },
            'claude-code': {
                breadcrumb: ['Agents', 'Claude Code'],
                title: 'Claude Code',
                content: `
                    <div class="content-section">
                        <h3>Overview</h3>
                        <p>Claude by Anthropic offers advanced code assistance with exceptional reasoning capabilities and long context understanding. It can analyze entire codebases and provide thoughtful suggestions.</p>
                        
                        <h3>Key Features</h3>
                        <ul>
                            <li>200K+ token context window for large codebases</li>
                            <li>Advanced reasoning and problem-solving</li>
                            <li>Code review and refactoring suggestions</li>
                            <li>Multi-file analysis and understanding</li>
                            <li>Natural language explanations of complex code</li>
                        </ul>
                        
                        <h3>Context Discovery</h3>
                        <p>Employs agentic discovery methods:</p>
                        <ul>
                            <li>Actively explores project structure</li>
                            <li>Asks clarifying questions about requirements</li>
                            <li>Analyzes dependencies and relationships</li>
                            <li>Maintains conversation context across sessions</li>
                        </ul>
                        
                        <h3>Architecture</h3>
                        <p>Multi-agent approach with specialized capabilities:</p>
                        <ul>
                            <li>Code analysis agent</li>
                            <li>Reasoning and planning agent</li>
                            <li>Code generation agent</li>
                            <li>Review and validation agent</li>
                        </ul>
                        
                        <h3>Pricing</h3>
                        <ul>
                            <li>Claude Pro: $20/month</li>
                            <li>API usage-based pricing available</li>
                            <li>Free tier with limited usage</li>
                        </ul>
                        
                        <div class="external-link">
                            <a href="https://claude.ai" target="_blank">🔗 Official Claude Site</a>
                        </div>
                    </div>
                `
            },
            'google-gemini': {
                breadcrumb: ['Agents', 'Google Gemini'],
                title: 'Google Gemini',
                content: `
                    <div class="content-section">
                        <h3>Overview</h3>
                        <p>Google Gemini provides AI-powered coding assistance through various interfaces including CLI tools, web interface, and API access. It offers multimodal capabilities for diverse input types.</p>
                        
                        <h3>Key Features</h3>
                        <ul>
                            <li>Multimodal input (text, images, code)</li>
                            <li>CLI tools for terminal-based development</li>
                            <li>Integration with Google Cloud services</li>
                            <li>Code generation and explanation</li>
                            <li>Support for multiple programming languages</li>
                        </ul>
                        
                        <h3>Context Discovery</h3>
                        <p>RAG with multimodal enhancement:</p>
                        <ul>
                            <li>Processes code screenshots and diagrams</li>
                            <li>Analyzes project documentation</li>
                            <li>Retrieves relevant examples from training data</li>
                            <li>Integrates with Google Search for current information</li>
                        </ul>
                        
                        <h3>CLI Tools</h3>
                        <p>Google provides several command-line tools:</p>
                        <ul>
                            <li><code>gcloud</code> - Google Cloud CLI</li>
                            <li><code>gemini-cli</code> - Direct Gemini interaction</li>
                            <li>Integration with development workflows</li>
                        </ul>
                        
                        <h3>Pricing</h3>
                        <ul>
                            <li>Gemini Pro: Free tier available</li>
                            <li>Gemini Ultra: $20/month (Google One AI Premium)</li>
                            <li>API pricing based on usage</li>
                        </ul>
                        
                        <div class="external-link">
                            <a href="https://gemini.google.com" target="_blank">🔗 Official Google Gemini Site</a>
                        </div>
                    </div>
                `
            },
            'openai-codex': {
                breadcrumb: ['Agents', 'OpenAI Codex'],
                title: 'OpenAI Codex',
                content: `
                    <div class="content-section">
                        <h3>Overview</h3>
                        <p>OpenAI Codex is the AI system that powers GitHub Copilot and other code generation tools. It's designed to translate natural language into code across dozens of programming languages.</p>
                        
                        <h3>Key Features</h3>
                        <ul>
                            <li>Natural language to code translation</li>
                            <li>Support for 12+ programming languages</li>
                            <li>Code completion and generation</li>
                            <li>API access for custom integrations</li>
                            <li>Fine-tuning capabilities for specific domains</li>
                        </ul>
                        
                        <h3>Context Discovery</h3>
                        <p>RAG-based approach:</p>
                        <ul>
                            <li>Retrieves relevant code patterns</li>
                            <li>Analyzes provided context and comments</li>
                            <li>Leverages extensive training on public code repositories</li>
                            <li>Uses prompt engineering for better results</li>
                        </ul>
                        
                        <h3>Architecture</h3>
                        <p>Single-agent transformer model:</p>
                        <ul>
                            <li>Based on GPT architecture</li>
                            <li>Specialized training on code datasets</li>
                            <li>Optimized for code generation tasks</li>
                        </ul>
                        
                        <h3>Access Methods</h3>
                        <ul>
                            <li>OpenAI API (direct access)</li>
                            <li>GitHub Copilot (integrated experience)</li>
                            <li>Third-party tools and extensions</li>
                        </ul>
                        
                        <h3>Pricing</h3>
                        <ul>
                            <li>API usage-based pricing</li>
                            <li>Free tier with limited requests</li>
                            <li>Pay-per-token model for production use</li>
                        </ul>
                        
                        <div class="external-link">
                            <a href="https://openai.com/blog/openai-codex" target="_blank">🔗 Official OpenAI Codex Information</a>
                        </div>
                    </div>
                `
            },
            'cline-ai': {
                breadcrumb: ['Agents', 'Cline AI'],
                title: 'Cline AI',
                content: `
                    <div class="content-section">
                        <h3>Overview</h3>
                        <p>Cline is an open-source autonomous coding agent that runs in VS Code. It can read files, make edits, run terminal commands, and use the browser to accomplish complex development tasks.</p>
                        
                        <h3>Key Features</h3>
                        <ul>
                            <li>Autonomous file system access and editing</li>
                            <li>Terminal command execution</li>
                            <li>Browser automation for testing</li>
                            <li>Multi-step task completion</li>
                            <li>Integration with various AI models (Claude, GPT, etc.)</li>
                        </ul>
                        
                        <h3>Context Discovery</h3>
                        <p>Advanced agentic discovery:</p>
                        <ul>
                            <li>Actively explores project structure</li>
                            <li>Reads and analyzes multiple files</li>
                            <li>Executes commands to understand environment</li>
                            <li>Asks clarifying questions when needed</li>
                            <li>Maintains context across long conversations</li>
                        </ul>
                        
                        <h3>Architecture</h3>
                        <p>Multi-agent system with tool access:</p>
                        <ul>
                            <li>File management agent</li>
                            <li>Terminal execution agent</li>
                            <li>Browser automation agent</li>
                            <li>Planning and coordination agent</li>
                        </ul>
                        
                        <h3>Capabilities</h3>
                        <ul>
                            <li>Create entire applications from scratch</li>
                            <li>Debug and fix existing code</li>
                            <li>Run tests and validate functionality</li>
                            <li>Install dependencies and configure environments</li>
                            <li>Generate documentation and README files</li>
                        </ul>
                        
                        <h3>Pricing</h3>
                        <ul>
                            <li>Open source and free to use</li>
                            <li>Requires API keys for underlying AI models</li>
                            <li>Model costs vary by provider (Claude, OpenAI, etc.)</li>
                        </ul>
                        
                        <div class="external-link">
                            <a href="https://github.com/cline/cline" target="_blank">🔗 Official Cline GitHub Repository</a>
                        </div>
                    </div>
                `
            },
            'agents-architecture': {
                breadcrumb: ['Agents', 'Architecture'],
                title: 'Agent Architecture Patterns',
                content: `
                    <div class="content-section">
                        <h3>Layered Architecture</h3>
                        <p>Organizes agent functionality into distinct layers, each responsible for specific aspects of behavior.</p>
                        
                        <h3>BDI Architecture</h3>
                        <p>Belief-Desire-Intention model where agents maintain beliefs about the world, desires (goals), and intentions (plans).</p>
                        
                        <h3>Subsumption Architecture</h3>
                        <p>Behavior-based approach where higher-level behaviors can subsume lower-level ones when appropriate.</p>
                        
                        <h3>Multi-Agent Systems</h3>
                        <ul>
                            <li>Distributed problem solving</li>
                            <li>Coordination mechanisms</li>
                            <li>Communication protocols</li>
                            <li>Negotiation strategies</li>
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
