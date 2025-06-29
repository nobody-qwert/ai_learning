// Setup Content Module
class SetupContent {
    static getContent() {
        return {
            'setup-environment': {
                breadcrumb: ['Local Setup', 'Environment'],
                title: 'Development Environment Setup',
                content: `
                    <div class="content-section">
                        <h3>Prerequisites</h3>
                        <ul>
                            <li>Node.js (v16 or higher)</li>
                            <li>Python (v3.8 or higher)</li>
                            <li>Git version control</li>
                            <li>Code editor (VS Code recommended)</li>
                        </ul>
                        
                        <h3>AI Development Tools</h3>
                        <ul>
                            <li>Jupyter Notebook for experimentation</li>
                            <li>Docker for containerization</li>
                            <li>Virtual environments (venv, conda)</li>
                            <li>GPU drivers for deep learning</li>
                        </ul>
                        
                        <h3>Package Managers</h3>
                        <ul>
                            <li>npm/yarn for JavaScript packages</li>
                            <li>pip for Python packages</li>
                            <li>conda for scientific computing</li>
                        </ul>
                        
                        <h3>Self-Hosted AI Coding Setup</h3>
                        <p>Complete local development environment using LM Studio + VS Code + Cline AI for privacy-focused AI coding assistance:</p>
                        <ul>
                            <li><strong>LM Studio:</strong> Local LLM server running Mistral Codestral or other code models</li>
                            <li><strong>VS Code:</strong> Primary development environment with extensions</li>
                            <li><strong>Cline AI:</strong> Autonomous coding agent connected to local LM Studio endpoint</li>
                        </ul>
                        
                        <h3>Benefits of Local Setup</h3>
                        <ul>
                            <li>Complete privacy - no data sent to external servers</li>
                            <li>No API costs or rate limits</li>
                            <li>Offline operation capability</li>
                            <li>Full control over model selection and parameters</li>
                            <li>Integration with existing development workflow</li>
                        </ul>
                        
                        <h3>Setup Steps</h3>
                        <ul>
                            <li>1. Install LM Studio and download Codestral or Mistral code models</li>
                            <li>2. Enable LM Studio's local server mode (developer mode)</li>
                            <li>3. Install VS Code with Cline AI extension</li>
                            <li>4. Configure Cline AI to use LM Studio's local API endpoint</li>
                            <li>5. Test the integration with a simple coding task</li>
                        </ul>
                    </div>
                `
            },
            'setup-tools': {
                breadcrumb: ['Local Setup', 'Tools'],
                title: 'Essential Development Tools',
                content: `
                    <div class="content-section">
                        <h3>AI/ML Libraries</h3>
                        <ul>
                            <li>TensorFlow / PyTorch for deep learning</li>
                            <li>scikit-learn for traditional ML</li>
                            <li>OpenAI API for language models</li>
                            <li>Hugging Face Transformers</li>
                            <li>LM Studio for local LLM hosting (Codestral, Mistral, Qwen code models) - fully local operation</li>
                        </ul>
                        
                        <h3>Development Tools</h3>
                        <ul>
                            <li>Postman for API testing</li>
                            <li>Docker Desktop for containerization</li>
                            <li>MongoDB/PostgreSQL for databases</li>
                            <li>Redis for caching</li>
                        </ul>
                        
                        <h3>Monitoring & Debugging</h3>
                        <ul>
                            <li>TensorBoard for ML visualization</li>
                            <li>Weights & Biases for experiment tracking</li>
                            <li>Chrome DevTools for web debugging</li>
                            <li>Python debugger (pdb)</li>
                        </ul>
                    </div>
                `
            },
            'lm-studio-setup': {
                breadcrumb: ['Local Setup', 'LM Studio Setup'],
                title: 'LM Studio + VS Code + Cline AI Setup',
                content: `
                    <div class="content-section">
                        <h3>Complete Local AI Development Stack</h3>
                        <p>Set up a fully local, privacy-focused AI coding environment using LM Studio, VS Code, and Cline AI.</p>
                        
                        <h3>What You'll Need</h3>
                        <ul>
                            <li><strong>LM Studio:</strong> Local LLM server for running models like Codestral, Mistral, Qwen</li>
                            <li><strong>VS Code:</strong> Your primary development environment</li>
                            <li><strong>Cline AI:</strong> Autonomous coding agent extension</li>
                        </ul>
                        
                        <h3>Step-by-Step Setup</h3>
                        <h4>1. Install LM Studio</h4>
                        <ul>
                            <li>Download LM Studio from <a href="https://lmstudio.ai" target="_blank">lmstudio.ai</a></li>
                            <li>Install and launch the application</li>
                            <li>Browse and download coding models (Codestral, Mistral Coder, Qwen2.5-Coder)</li>
                        </ul>
                        
                        <h4>2. Configure LM Studio Server</h4>
                        <ul>
                            <li>Load your chosen coding model in LM Studio</li>
                            <li>Go to "Local Server" tab and start the server</li>
                            <li>Note the server URL (typically http://localhost:1234)</li>
                            <li>Enable developer mode for API access</li>
                        </ul>
                        
                        <h4>3. Install VS Code Extensions</h4>
                        <ul>
                            <li>Install VS Code if not already installed</li>
                            <li>Install the Cline AI extension from the marketplace</li>
                            <li>Configure Cline to use custom API endpoint</li>
                        </ul>
                        
                        <h4>4. Connect Cline to LM Studio</h4>
                        <ul>
                            <li>Open Cline AI settings in VS Code</li>
                            <li>Set API endpoint to your LM Studio server URL</li>
                            <li>Configure model name to match your loaded model</li>
                            <li>Test the connection with a simple coding request</li>
                        </ul>
                        
                        <h3>Recommended Models</h3>
                        <ul>
                            <li><strong>Codestral 22B:</strong> Mistral's specialized coding model</li>
                            <li><strong>Qwen2.5-Coder:</strong> Excellent for code generation and debugging</li>
                            <li><strong>DeepSeek Coder:</strong> Strong performance on coding tasks</li>
                            <li><strong>Code Llama:</strong> Meta's code-focused model</li>
                        </ul>
                        
                        <h3>Benefits of This Setup</h3>
                        <ul>
                            <li><strong>Complete Privacy:</strong> All processing happens locally</li>
                            <li><strong>No API Costs:</strong> No usage fees or rate limits</li>
                            <li><strong>Offline Capable:</strong> Works without internet connection</li>
                            <li><strong>Customizable:</strong> Full control over model parameters</li>
                            <li><strong>Fast Response:</strong> No network latency</li>
                        </ul>
                        
                        <h3>Troubleshooting</h3>
                        <ul>
                            <li>Ensure LM Studio server is running before using Cline</li>
                            <li>Check firewall settings if connection fails</li>
                            <li>Verify model is loaded and responding in LM Studio</li>
                            <li>Adjust context length settings for better performance</li>
                        </ul>
                        
                        <div class="external-link">
                            <a href="https://lmstudio.ai" target="_blank">🔗 Download LM Studio</a>
                        </div>
                    </div>
                `
            }
        };
    }
}

// Export for use in main application
if (typeof window !== 'undefined') {
    window.SetupContent = SetupContent;
}
