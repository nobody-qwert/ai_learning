// AI Models Content Module
class AIModelsContent {
    static getContent() {
        return {
            'ai-models-top': {
                breadcrumb: ['AI Models', 'Top AI Models'],
                title: 'Top AI Models',
                content: `
                    <div class="content-section">
                        <h3>Major AI Models and Platforms</h3>
                        <p>Explore the leading AI models and platforms available today, each offering unique capabilities for different use cases.</p>
                        
                        <div class="model-grid">
                            <div class="model-card">
                                <div class="model-header">
                                    <h4>OpenAI</h4>
                                    <span class="model-badge">GPT Series</span>
                                </div>
                                <div class="model-content">
                                    <p>Leading conversational AI and code generation platform with GPT-4, GPT-4o, and specialized models.</p>
                                    <ul>
                                        <li><strong>GPT-4o:</strong> Multimodal model with vision, audio, and text capabilities</li>
                                        <li><strong>GPT-4:</strong> Advanced reasoning and complex task handling</li>
                                        <li><strong>Codex:</strong> Specialized for code generation and completion</li>
                                        <li><strong>DALL-E:</strong> AI image generation from text descriptions</li>
                                    </ul>
                                    <div class="external-link">
                                        <a href="https://openai.com" target="_blank">🔗 Visit OpenAI</a>
                                    </div>
                                </div>
                            </div>

                            <div class="model-card">
                                <div class="model-header">
                                    <h4>Google AI Studio</h4>
                                    <span class="model-badge">Gemini Series</span>
                                </div>
                                <div class="model-content">
                                    <p>Google's advanced AI platform featuring the Gemini model family with multimodal capabilities.</p>
                                    <ul>
                                        <li><strong>Gemini Ultra:</strong> Most capable model for complex reasoning</li>
                                        <li><strong>Gemini Pro:</strong> Balanced performance for various tasks</li>
                                        <li><strong>Gemini Flash:</strong> Fast responses for real-time applications</li>
                                        <li><strong>Multimodal:</strong> Text, image, audio, and video processing</li>
                                    </ul>
                                    <div class="external-link">
                                        <a href="https://aistudio.google.com" target="_blank">🔗 Visit Google AI Studio</a>
                                    </div>
                                </div>
                            </div>

                            <div class="model-card">
                                <div class="model-header">
                                    <h4>Claude AI</h4>
                                    <span class="model-badge">Anthropic</span>
                                </div>
                                <div class="model-content">
                                    <p>Anthropic's AI assistant focused on helpfulness, harmlessness, and honesty with excellent reasoning capabilities.</p>
                                    <ul>
                                        <li><strong>Claude 3.5 Sonnet:</strong> Best balance of intelligence and speed</li>
                                        <li><strong>Claude 3 Opus:</strong> Most powerful model for complex tasks</li>
                                        <li><strong>Claude 3 Haiku:</strong> Fast and efficient for simple tasks</li>
                                        <li><strong>Large Context:</strong> Up to 200K tokens context window</li>
                                    </ul>
                                    <div class="external-link">
                                        <a href="https://claude.ai" target="_blank">🔗 Visit Claude AI</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3>Model Comparison</h3>
                        <div class="comparison-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Platform</th>
                                        <th>Strengths</th>
                                        <th>Best Use Cases</th>
                                        <th>Context Window</th>
                                        <th>Pricing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>OpenAI GPT-4</strong></td>
                                        <td>Versatile, creative, strong reasoning</td>
                                        <td>Writing, coding, analysis, creative tasks</td>
                                        <td>128K tokens</td>
                                        <td>$20/month (ChatGPT Plus)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Google Gemini</strong></td>
                                        <td>Multimodal, fast, integrated with Google</td>
                                        <td>Research, multimodal tasks, productivity</td>
                                        <td>1M+ tokens</td>
                                        <td>Free/Premium tiers</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Claude 3.5 Sonnet</strong></td>
                                        <td>Safety, reasoning, long context</td>
                                        <td>Analysis, coding, research, writing</td>
                                        <td>200K tokens</td>
                                        <td>$20/month (Claude Pro)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Getting Started</h3>
                        <div class="getting-started">
                            <div class="step-card">
                                <h4>1. Choose Your Platform</h4>
                                <p>Select based on your primary use case: OpenAI for versatility, Google for research, Claude for analysis.</p>
                            </div>
                            <div class="step-card">
                                <h4>2. Start with Free Tiers</h4>
                                <p>Most platforms offer free tiers or trials to explore capabilities before committing to paid plans.</p>
                            </div>
                            <div class="step-card">
                                <h4>3. Learn Prompt Engineering</h4>
                                <p>Effective prompting is key to getting the best results from any AI model.</p>
                            </div>
                        </div>

                        <h3>API Access</h3>
                        <p>All major platforms provide API access for developers:</p>
                        <ul>
                            <li><strong>OpenAI API:</strong> Comprehensive API for GPT models and tools</li>
                            <li><strong>Google AI Studio API:</strong> Gemini API with generous free tier</li>
                            <li><strong>Anthropic API:</strong> Claude API for enterprise and developer use</li>
                        </ul>
                    </div>
                `
            },
            'ai-models-opensource': {
                breadcrumb: ['AI Models', 'Open Source AI Models'],
                title: 'Open Source AI Models',
                content: `
                    <div class="content-section">
                        <h3>Leading Open Source AI Models for Code</h3>
                        <p>Explore powerful open source alternatives that you can run locally or deploy on your own infrastructure, offering full control and privacy.</p>
                        
                        <div class="model-grid">
                            <div class="model-card">
                                <div class="model-header">
                                    <h4>Codestral</h4>
                                    <span class="model-badge">Mistral AI</span>
                                </div>
                                <div class="model-content">
                                    <p>Mistral AI's specialized 22B parameter model designed specifically for code generation and completion tasks.</p>
                                    <ul>
                                        <li><strong>22B Parameters:</strong> Optimized size for code generation</li>
                                        <li><strong>80+ Languages:</strong> Supports most programming languages</li>
                                        <li><strong>Fill-in-the-Middle:</strong> Advanced code completion capabilities</li>
                                        <li><strong>32K Context:</strong> Large context window for complex codebases</li>
                                        <li><strong>License:</strong> Apache 2.0 for research/non-commercial use</li>
                                    </ul>
                                    <div class="external-link">
                                        <a href="https://huggingface.co/mistralai/Codestral-22B-v0.1" target="_blank">🔗 View on Hugging Face</a>
                                    </div>
                                </div>
                            </div>

                            <div class="model-card">
                                <div class="model-header">
                                    <h4>DeepSeek Coder</h4>
                                    <span class="model-badge">DeepSeek AI</span>
                                </div>
                                <div class="model-content">
                                    <p>High-performance code generation models trained on 2T tokens of code and natural language data.</p>
                                    <ul>
                                        <li><strong>Multiple Sizes:</strong> 1.3B, 6.7B, 33B parameter variants</li>
                                        <li><strong>86+ Languages:</strong> Extensive programming language support</li>
                                        <li><strong>Strong Performance:</strong> Excellent scores on HumanEval and MBPP</li>
                                        <li><strong>16K Context:</strong> Sufficient for most coding tasks</li>
                                        <li><strong>License:</strong> MIT License - fully open for commercial use</li>
                                    </ul>
                                    <div class="external-link">
                                        <a href="https://huggingface.co/deepseek-ai/deepseek-coder-33b-instruct" target="_blank">🔗 View on Hugging Face</a>
                                    </div>
                                </div>
                            </div>

                            <div class="model-card">
                                <div class="model-header">
                                    <h4>Qwen2.5-Coder</h4>
                                    <span class="model-badge">Alibaba Cloud</span>
                                </div>
                                <div class="model-content">
                                    <p>Latest generation code-focused models from Alibaba Cloud, trained on 5.5T tokens with strong reasoning capabilities.</p>
                                    <ul>
                                        <li><strong>Multiple Sizes:</strong> 0.5B, 1.5B, 3B, 7B, 14B, 32B parameters</li>
                                        <li><strong>40+ Languages:</strong> Comprehensive programming language coverage</li>
                                        <li><strong>Advanced Reasoning:</strong> Strong logical and mathematical capabilities</li>
                                        <li><strong>128K Context:</strong> Very large context window</li>
                                        <li><strong>License:</strong> Apache 2.0 - open for commercial use</li>
                                    </ul>
                                    <div class="external-link">
                                        <a href="https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct" target="_blank">🔗 View on Hugging Face</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3>Model Comparison</h3>
                        <div class="comparison-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Model</th>
                                        <th>Parameters</th>
                                        <th>Context Window</th>
                                        <th>License</th>
                                        <th>Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Codestral</strong></td>
                                        <td>22B</td>
                                        <td>32K tokens</td>
                                        <td>Apache 2.0*</td>
                                        <td>Code completion, fill-in-the-middle</td>
                                    </tr>
                                    <tr>
                                        <td><strong>DeepSeek Coder</strong></td>
                                        <td>1.3B - 33B</td>
                                        <td>16K tokens</td>
                                        <td>MIT</td>
                                        <td>General coding, commercial projects</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Qwen2.5-Coder</strong></td>
                                        <td>0.5B - 32B</td>
                                        <td>128K tokens</td>
                                        <td>Apache 2.0</td>
                                        <td>Complex reasoning, large codebases</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p style="font-size: 12px; color: var(--color-text-secondary); margin-top: 8px;">
                                *Codestral: Research and non-commercial use only
                            </p>
                        </div>

                        <h3>Performance Benchmarks</h3>
                        <div class="comparison-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Model</th>
                                        <th>HumanEval</th>
                                        <th>MBPP</th>
                                        <th>MultiPL-E</th>
                                        <th>DS-1000</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Codestral 22B</strong></td>
                                        <td>81.1%</td>
                                        <td>78.2%</td>
                                        <td>65.4%</td>
                                        <td>43.6%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>DeepSeek Coder 33B</strong></td>
                                        <td>79.3%</td>
                                        <td>70.0%</td>
                                        <td>58.8%</td>
                                        <td>40.6%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Qwen2.5-Coder 32B</strong></td>
                                        <td>92.7%</td>
                                        <td>80.4%</td>
                                        <td>71.2%</td>
                                        <td>48.1%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Getting Started with Open Source Models</h3>
                        <div class="getting-started">
                            <div class="step-card">
                                <h4>1. Choose Your Setup</h4>
                                <p>Local deployment with Ollama/LM Studio, cloud deployment with Hugging Face, or API services like Together AI.</p>
                            </div>
                            <div class="step-card">
                                <h4>2. Hardware Requirements</h4>
                                <p>Smaller models (1-7B) run on consumer GPUs, larger models (22-33B) need high-end hardware or cloud instances.</p>
                            </div>
                            <div class="step-card">
                                <h4>3. Integration Options</h4>
                                <p>Use with VS Code extensions, integrate via APIs, or embed in your applications with proper licensing.</p>
                            </div>
                        </div>

                        <h3>Deployment Options</h3>
                        <div class="model-grid">
                            <div class="model-card">
                                <div class="model-header">
                                    <h4>Local Deployment</h4>
                                    <span class="model-badge">Privacy First</span>
                                </div>
                                <div class="model-content">
                                    <ul>
                                        <li><strong>Ollama:</strong> Easy local model management</li>
                                        <li><strong>LM Studio:</strong> User-friendly GUI interface</li>
                                        <li><strong>vLLM:</strong> High-performance inference server</li>
                                        <li><strong>Text Generation WebUI:</strong> Web-based interface</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="model-card">
                                <div class="model-header">
                                    <h4>Cloud Services</h4>
                                    <span class="model-badge">Scalable</span>
                                </div>
                                <div class="model-content">
                                    <ul>
                                        <li><strong>Hugging Face Inference:</strong> Hosted model endpoints</li>
                                        <li><strong>Together AI:</strong> Fast inference API</li>
                                        <li><strong>Replicate:</strong> Pay-per-use model hosting</li>
                                        <li><strong>RunPod:</strong> GPU cloud for custom deployments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h3>Why Choose Open Source?</h3>
                        <ul>
                            <li><strong>Privacy & Control:</strong> Keep your code and data completely private</li>
                            <li><strong>Cost Effective:</strong> No per-token charges, pay only for infrastructure</li>
                            <li><strong>Customization:</strong> Fine-tune models for your specific use cases</li>
                            <li><strong>No Vendor Lock-in:</strong> Full control over your AI infrastructure</li>
                            <li><strong>Transparency:</strong> Inspect model weights, training data, and methodologies</li>
                        </ul>
                    </div>
                `
            }
        };
    }
}

// Export for use in main application
if (typeof window !== 'undefined') {
    window.AIModelsContent = AIModelsContent;
    console.log('AI Models Content module loaded and exported to window');
}
