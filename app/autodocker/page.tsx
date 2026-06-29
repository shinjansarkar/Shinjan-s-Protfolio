"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft, LuRocket, LuDownload, LuCode, LuTerminal, LuCheck, LuCopy, LuBrainCircuit, LuLayers, LuLayoutGrid, LuServer, LuFolderTree, LuShieldCheck, LuArrowRight } from "react-icons/lu";
import { SiDocker } from "react-icons/si";

export default function AutoDockerPage() {
  const [copied, setCopied] = useState(false);
  const marketplaceUrl = "https://marketplace.visualstudio.com/items?itemName=ShinjanSarkar.auto-docker-extension";

  const handleCopy = () => {
    navigator.clipboard.writeText("auto-docker init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#101f22] text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Navigation */}
      <div className="sticky top-0 z-50 w-full border-b border-[#283639] bg-[#101f22]/80 backdrop-blur-md">
        <div className="flex justify-center w-full">
          <div className="w-full max-w-7xl px-4 md:px-10">
            <header className="flex items-center justify-between h-16 md:h-20">
              <div className="flex items-center gap-4">
                <Link href="/" className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors text-sm font-medium text-slate-300">
                  <LuArrowLeft size={16} />
                  <span>Portfolio</span>
                </Link>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 flex items-center justify-center text-cyan-400 bg-cyan-400/10 rounded-xl">
                    <SiDocker size={24} />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold tracking-tight">Auto Docker</h2>
                </div>
              </div>
              <nav className="hidden md:flex items-center gap-8">
                <a className="text-sm font-medium hover:text-cyan-400 transition-colors text-slate-300" href="#features">Features</a>
                <a className="text-sm font-medium hover:text-cyan-400 transition-colors text-slate-300" href="#how-it-works">How it Works</a>
                <a className="text-sm font-medium hover:text-cyan-400 transition-colors text-slate-300" href="https://github.com/shinjansarkar/Auto-Docker#readme" target="_blank" rel="noopener noreferrer">Docs</a>
              </nav>
              <div className="flex items-center gap-4">
                <a href={marketplaceUrl} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center justify-center rounded-full h-10 px-6 bg-cyan-400 hover:bg-cyan-300 text-slate-900 text-sm font-bold transition-all shadow-lg shadow-cyan-400/20">
                  <span className="truncate">Install Extension</span>
                </a>
              </div>
            </header>
          </div>
        </div>
      </div>

      {/* Mobile Back Button (visible only on small screens) */}
      <div className="md:hidden p-4">
        <Link href="/" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800 text-sm font-medium text-slate-300 w-fit">
          <LuArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="relative w-full pt-12 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] rounded-full bg-cyan-400 blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] rounded-full bg-blue-600 blur-[100px]"></div>
        </div>
        <div className="flex justify-center relative z-10 px-4">
          <div className="max-w-[960px] flex flex-col items-center text-center gap-6 md:gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium">
              <LuRocket size={16} />
              <span>v2.0 is now available</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Containerize apps <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">in seconds, not hours.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-[640px] leading-relaxed">
              Auto-detects your stack and generates production-ready Dockerfiles, Compose files, and CI/CD configs. No YAML headaches required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <a href={marketplaceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold text-base transition-all shadow-lg shadow-cyan-400/25">
                <LuDownload size={20} />
                <span>Install for VS Code</span>
              </a>
              <a href="https://github.com/shinjansarkar/Auto-Docker" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-medium text-base transition-all">
                <LuCode size={20} />
                <span>View on GitHub</span>
              </a>
            </div>
            
            <div className="w-full mt-12 rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-[#0d1117]">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-slate-500 font-mono flex items-center gap-2"><LuTerminal size={14}/> bash — docker-auto-gen</div>
              </div>
              <div className="p-6 text-left font-mono text-sm md:text-base overflow-x-auto relative group">
                <div className="text-green-400">$ auto-docker init</div>
                <div className="text-slate-300 mt-2">🔍 Scanning project directory...</div>
                <div className="text-blue-400 mt-1">✓ Detected: Node.js (Next.js) + PostgreSQL</div>
                <div className="text-slate-300 mt-1">📦 Generating Dockerfile...</div>
                <div className="text-slate-300 mt-1">🐙 Generating docker-compose.yml...</div>
                <div className="text-slate-300 mt-1">🕸️ Configuring Nginx reverse proxy...</div>
                <div className="text-green-400 mt-4">✓ Done! Run 'docker compose up' to start.</div>
                <div className="animate-pulse inline-block w-2 h-4 bg-slate-500 align-middle ml-1"></div>
                
                <button 
                  onClick={handleCopy}
                  className="absolute right-4 top-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-cyan-400 transition-all border border-slate-700 opacity-0 group-hover:opacity-100"
                  title="Copy command"
                >
                  {copied ? <LuCheck size={16} className="text-cyan-400" /> : <LuCopy size={16} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="w-full py-20 px-4 md:px-10 bg-[#152327]">
        <div className="flex justify-center w-full">
          <div className="w-full max-w-7xl">
            <div className="flex flex-col gap-4 mb-16 max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Supercharge Your <span className="text-cyan-400">Docker Workflow</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Everything you need to containerize your applications instantly, from intelligent detection to production-ready configurations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: LuBrainCircuit, title: "Intelligent Project Detection", desc: "Automatically identifies language, framework, and package manager by analyzing your package.json, requirements.txt, or go.mod." },
                { icon: LuLayers, title: "Multi-Stage Dockerfiles", desc: "Generates optimized multi-stage builds. Keep your final images small and secure by separating build dependencies from runtime." },
                { icon: LuLayoutGrid, title: "Docker Compose Generation", desc: "Spin up databases (Postgres, Redis, Mongo) and services instantly with pre-configured YAML that just works out of the box." },
                { icon: LuServer, title: "Automatic Nginx Reverse Proxy", desc: "Need a custom domain locally? We generate production-ready Nginx routing configurations automatically linked to your services." },
                { icon: LuFolderTree, title: "Monorepo Support", desc: "Seamlessly handle complex project structures like Turborepo or Nx. Select which app to containerize with a simple dropdown." },
                { icon: LuShieldCheck, title: "Secure & Local", desc: "No data leaves your machine. The extension runs 100% offline, ensuring your code and architecture details stay private." }
              ].map((feature, idx) => (
                <div key={idx} className="group relative flex flex-col gap-4 p-8 rounded-2xl bg-[#1a2c32] hover:bg-cyan-400/5 border border-slate-800 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works / Comparison */}
      <section id="how-it-works" className="w-full py-20 px-4 md:px-10 overflow-hidden relative bg-[#101f22]">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-cyan-400/30 blur-[100px]"></div>
        </div>
        <div className="flex justify-center w-full relative z-10">
          <div className="w-full max-w-7xl">
            <div className="text-center mb-12">
              <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold mb-3 block">Why Auto Docker?</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Stop Writing Dockerfiles <span className="relative inline-block text-slate-600 line-through decoration-red-500/80 decoration-4">manually</span>.
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Why waste hours configuring environments, debugging networking, and managing dependencies when you can do it in seconds?
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div className="flex flex-col rounded-3xl border border-slate-800 bg-[#101f22] p-6 lg:p-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <LuTerminal className="text-3xl text-slate-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Manual Setup</h3>
                      <p className="text-sm text-slate-500">The old way. Error prone and tedious.</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-slate-400">~ 2 Hours</span>
                </div>
                <div className="flex-grow bg-[#0d1117] rounded-xl p-4 font-mono text-xs md:text-sm overflow-hidden relative mb-6 border border-slate-800/50 shadow-inner">
                  <div className="text-slate-500">FROM <span className="text-purple-400">node:18-alpine</span></div>
                  <div className="text-slate-500">WORKDIR <span className="text-green-400">/app</span></div>
                  <div className="text-slate-500">COPY package*.json ./</div>
                  <div className="text-slate-500">RUN npm install</div>
                  <div className="text-green-700/70 italic"># FIXME: dependency conflict</div>
                  <div className="text-slate-500">COPY . .</div>
                  <div className="text-slate-500">RUN npm run build</div>
                  <div className="text-red-400 font-bold mt-1">ERROR: gyp failed to compile</div>
                  <div className="mt-4 flex items-center gap-2 text-red-400 text-xs justify-end">
                    Build Failed
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col relative rounded-3xl border-2 border-cyan-400/50 bg-[#152327] p-6 lg:p-8 overflow-hidden shadow-[0_0_50px_-12px_rgba(34,211,238,0.15)] transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-cyan-400 text-slate-900 text-xs font-bold px-4 py-1 rounded-bl-xl shadow-lg">RECOMMENDED</div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-lg shadow-cyan-400/20 text-white">
                      <LuRocket className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Auto Docker</h3>
                      <p className="text-sm text-cyan-400/80">Zero configuration. Production ready.</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-mono text-cyan-400 font-bold hidden sm:inline-block">~ 5 Seconds</span>
                </div>
                <div className="flex-grow bg-[#0d1117] rounded-xl font-mono text-xs md:text-sm overflow-hidden relative mb-6 border border-cyan-400/20 shadow-2xl flex items-center justify-center min-h-[220px]">
                  <div className="relative w-[85%] bg-[#1a2c32] rounded-lg border border-slate-700 shadow-xl p-4 flex flex-col gap-3 z-10">
                    <div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
                      Project Detected: <span className="text-white font-bold">Next.js</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-wider">
                        <span>Generating files...</span>
                        <span className="text-cyan-400">100%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 w-full rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 flex justify-center">
              <a href={marketplaceUrl} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-slate-900 font-bold text-lg shadow-[0_0_20px_-5px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.7)] transition-all duration-300 hover:-translate-y-1">
                <span>Start Automating Now</span>
                <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full py-24 px-4 md:px-10 bg-[#152327] border-t border-[#283639]">
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[960px] flex flex-col items-center text-center gap-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Ready to automate your Docker setup?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              Join thousands of developers shipping faster with Auto Docker Extension. Stop writing boilerplate and start building features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a href={marketplaceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold text-base transition-all shadow-lg shadow-cyan-400/25 min-w-[200px]">
                <span className="truncate">Install for VS Code</span>
              </a>
              <a href="https://github.com/shinjansarkar/Auto-Docker#readme" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-base transition-all min-w-[200px] border border-slate-700">
                <span className="truncate">Read Documentation</span>
              </a>
            </div>
            <p className="text-sm text-slate-500">Free for open source projects. No credit card required.</p>
          </div>
        </div>
      </section>
      
    </div>
  );
}
