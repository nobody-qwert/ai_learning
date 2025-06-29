// Setup Content Module
class SetupContent {
    static getContent() {
        return {
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
                        
                        <h3>System Requirements</h3>
                        <ul>
                            <li><strong>Operating System:</strong> macOS (Apple Silicon), Windows (x64/ARM64), or Linux (x64)</li>
                            <li><strong>Processor:</strong> Must support AVX2 instructions</li>
                            <li><strong>Memory:</strong> 8GB+ RAM recommended (16GB+ for larger models)</li>
                            <li><strong>Storage:</strong> Several GB free space for model downloads</li>
                            <li><strong>GPU:</strong> Optional but recommended for faster inference</li>
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
                            <li>Go to "Developer" tab and start the local server</li>
                            <li>Note the server URL (typically http://localhost:1234)</li>
                            <li>The server provides OpenAI-compatible API endpoints</li>
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
                            <li><strong>Qwen2.5-Coder-32B-Instruct:</strong> Latest and most popular coding model with excellent performance <a href="https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct" target="_blank">🔗 View on HF</a></li>
                            <li><strong>Qwen2.5-Coder-7B-Instruct:</strong> Smaller version, great for lower-end hardware <a href="https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct" target="_blank">🔗 View on HF</a></li>
                            <li><strong>Codestral-22B:</strong> Mistral's specialized coding model, well-established <a href="https://huggingface.co/mistralai/Codestral-22B-v0.1" target="_blank">🔗 View on HF</a></li>
                            <li><strong>DeepSeek-Coder-V2-Lite-Instruct:</strong> Strong performance on coding tasks <a href="https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Lite-Instruct" target="_blank">🔗 View on HF</a></li>
                            <li><strong>CodeLlama-13B-Instruct:</strong> Meta's reliable code-focused model <a href="https://huggingface.co/codellama/CodeLlama-13b-Instruct-hf" target="_blank">🔗 View on HF</a></li>
                        </ul>
                        
                        <h3>Benefits of This Setup</h3>
                        <ul>
                            <li><strong>Complete Privacy:</strong> All processing happens locally</li>
                            <li><strong>No API Costs:</strong> No usage fees or rate limits</li>
                            <li><strong>Offline Capable:</strong> Works without internet connection</li>
                            <li><strong>Customizable:</strong> Full control over model parameters</li>
                            <li><strong>Fast Response:</strong> No network latency</li>
                            <li><strong>MCP Support:</strong> Model Context Protocol for enhanced integrations (v0.3.17+)</li>
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
