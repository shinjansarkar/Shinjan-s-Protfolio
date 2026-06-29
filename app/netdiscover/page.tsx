"use client";

import { useState } from "react";
import Link from "next/link";
import { LuZap, LuEye, LuCrosshair, LuCopy, LuCheck, LuArrowLeft, LuTerminal, LuArrowRight, LuSkull } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingPage() {
  const [copied, setCopied] = useState(false);
  const cloneUrl = "git clone https://github.com/shinjansarkar/netdiscover.git";
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white relative font-sans selection:bg-white selection:text-black">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-zinc-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-md bg-black/50 border-b border-white/5">
          <Link href="/" className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            <LuArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Portfolio
          </Link>
          <Link href="https://github.com/shinjansarkar/netdiscover.git" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <FaGithub size={24} />
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center relative overflow-hidden">
          <motion.div 
            style={{ y, opacity }}
            className="flex flex-col items-center max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-12 backdrop-blur-sm"
            >
              <LuCrosshair className="text-emerald-500" />
              Network Scanning Reimagined
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-8"
            >
              NetDiscover
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-3xl font-light text-zinc-400 max-w-3xl leading-relaxed mb-16"
            >
              The absolute pinnacle of human engineering. It sends ICMP echo requests and pretends it's performing elite cyber espionage.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link 
                href="/netdiscover/docs"
                className="group relative px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">Read Documentation <LuArrowRight className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Terminal Section */}
        <section className="py-24 px-6 border-t border-white/5 bg-zinc-950/50">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-6">Quick Install</h2>
            <p className="text-zinc-400 text-center mb-12 text-lg">Download a false sense of superiority directly to your machine.</p>
            
            <div className="w-full max-w-2xl bg-black rounded-2xl border border-white/10 shadow-2xl overflow-hidden group">
              <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-xs font-mono text-zinc-500 flex items-center gap-2">
                  <LuTerminal /> bash
                </div>
              </div>
              <div className="p-6 md:p-8 flex items-center justify-between font-mono text-sm md:text-base relative">
                <div className="flex items-center text-emerald-400 overflow-x-auto whitespace-nowrap">
                  <span className="text-zinc-600 mr-4 select-none">$</span>
                  {cloneUrl}
                </div>
                <button 
                  onClick={handleCopy}
                  className="ml-4 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-zinc-400 hover:text-white transition-all shrink-0"
                  title="Copy to clipboard"
                >
                  {copied ? <LuCheck size={18} className="text-emerald-400" /> : <LuCopy size={18} />}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Minimal List */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-12">
              
              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 pb-12 border-b border-white/5 group">
                <div className="w-16 h-16 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-all duration-500 bg-white/5">
                  <LuZap size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Blazing(ly average)</h3>
                  <p className="text-xl text-zinc-400 font-light leading-relaxed">
                    It utilizes the magical power of "the internet" to do exactly what `ping` does, but with 100% more unnecessary JavaScript. Speed is a state of mind.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 pb-12 border-b border-white/5 group">
                <div className="w-16 h-16 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-all duration-500 bg-white/5">
                  <LuEye size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Invasive</h3>
                  <p className="text-xl text-zinc-400 font-light leading-relaxed">
                    Discover that your roommate's smart fridge has an open Telnet port. Do absolutely nothing with this information because you don't actually know how Telnet works.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 pb-12 group">
                <div className="w-16 h-16 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-all duration-500 bg-white/5">
                  <LuSkull size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Over-engineered</h3>
                  <p className="text-xl text-zinc-400 font-light leading-relaxed">
                    We added smooth gradients, rounded corners, and sleek animations just to distract you from the fact that this is literally just sending ping requests.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
