"use client";

import { useState } from "react";
import Link from "next/link";
import { LuSkull, LuZap, LuEye, LuCrosshair, LuCopy, LuCheck } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function LandingPage() {
  const [copied, setCopied] = useState(false);
  const cloneUrl = "git clone https://github.com/shinjansarkar/netdiscover.git";

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-zinc-950 text-zinc-50 relative overflow-hidden font-sans">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-zinc-800/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl w-full z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeUp}
          className="w-full flex flex-col items-center mb-16 mt-12 text-center"
        >
          <div className="mb-6 flex items-center justify-center relative">
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-zinc-100">
              Net<span className="text-rose-500">Discover</span>
            </h1>
            <LuCrosshair size={40} className="absolute -right-12 top-0 text-rose-500/30 animate-[spin_10s_linear_infinite]" />
          </div>
          <p className="text-lg md:text-xl font-mono text-zinc-400 tracking-widest uppercase mb-4">
            Because pressing "Scan" basically makes you Mr. Robot.
          </p>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="w-full mb-16 relative"
        >
          <p className="text-xl md:text-2xl font-body leading-relaxed text-zinc-300 text-center max-w-4xl mx-auto mb-16">
            Behold, the absolute pinnacle of human engineering: a script that sends ICMP echo requests and pretends it's performing elite cyber espionage. Why learn actual networking when you can stare at this high-contrast UI and convince your friends you're breaching the mainframe? It's not just a tool; it's a personality substitute for people who own too many mechanical keyboards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="group rounded-[2rem] p-8 bg-zinc-900/50 border border-zinc-800 hover:border-rose-500/50 transition-all duration-300 hover:bg-zinc-900 shadow-xl backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform">
                <LuZap size={24} />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3 text-zinc-100">Blazing(ly average)</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">It utilizes the magical power of "the internet" to do exactly what `ping` does, but with 100% more unnecessary JavaScript. Speed is a state of mind.</p>
            </div>
            
            <div className="group rounded-[2rem] p-8 bg-zinc-900/50 border border-zinc-800 hover:border-rose-500/50 transition-all duration-300 hover:bg-zinc-900 shadow-xl backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform">
                <LuEye size={24} />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3 text-zinc-100">Invasive</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Discover that your roommate's smart fridge has an open Telnet port. Do absolutely nothing with this information because you don't actually know how Telnet works.</p>
            </div>
            
            <div className="group rounded-[2rem] p-8 bg-zinc-900/50 border border-zinc-800 hover:border-rose-500/50 transition-all duration-300 hover:bg-zinc-900 shadow-xl backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform">
                <LuSkull size={24} />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3 text-zinc-100">Over-engineered</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">We added smooth gradients, rounded corners, and sleek animations just to distract you from the fact that this is literally just sending ping requests.</p>
            </div>
          </div>
        </motion.div>

        {/* Call to action & Github Link */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center w-full max-w-4xl mx-auto pb-20"
        >
          
          <div className="w-full bg-zinc-900/80 border border-zinc-800 rounded-[2rem] p-8 md:p-10 mb-8 flex flex-col md:flex-row items-center justify-between shadow-2xl backdrop-blur-md hover:border-zinc-700 transition-colors">
            <div className="flex flex-col mb-8 md:mb-0 text-zinc-100 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                <FaGithub size={32} className="text-rose-500" />
                <h3 className="text-3xl font-display font-bold">Source Code</h3>
              </div>
              <p className="text-zinc-400 text-lg">Download it, star it so I feel validated, and never look at the code.</p>
            </div>
            
            <Link 
              href="https://github.com/shinjansarkar/netdiscover.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-100 text-zinc-950 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-rose-500 hover:text-white transition-colors duration-300 shadow-lg whitespace-nowrap"
            >
              View on GitHub
            </Link>
          </div>
          
          <div className="w-full relative group max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest mb-4 text-zinc-500 text-center">
              [ Terminal ] (Run this to download a false sense of superiority)
            </p>
            <div className="flex items-center justify-between bg-zinc-950 p-5 rounded-2xl border border-zinc-800 font-mono text-sm md:text-base text-rose-400/90 shadow-inner group-hover:border-zinc-700 transition-colors">
              <div className="flex-1 mr-4 overflow-hidden overflow-ellipsis whitespace-nowrap flex items-center">
                <span className="text-zinc-600 mr-4 select-none">~</span>
                <span className="text-zinc-300">{cloneUrl}</span>
              </div>
              <button 
                onClick={handleCopy}
                className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-400 hover:text-rose-500 transition-all flex-shrink-0 flex items-center justify-center h-12 w-12"
                title="Copy to clipboard"
                aria-label="Copy clone command"
              >
                {copied ? <LuCheck size={20} className="text-rose-500" /> : <LuCopy size={20} />}
              </button>
            </div>
            {copied && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-12 right-0 bg-rose-500 text-white px-4 py-2 text-xs font-bold rounded-full shadow-lg"
              >
                Copied! Now go paste it into an anonymous terminal.
              </motion.div>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
