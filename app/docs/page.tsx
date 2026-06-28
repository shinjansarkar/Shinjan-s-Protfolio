"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DocsPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white selection:bg-rose-500/30 selection:text-rose-400 overflow-x-hidden relative flex flex-col">
            
            {/* Background identical to portfolio */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-rose-600/10 rounded-full blur-[150px]" />
            </div>

            <Navbar />

            <div className="flex-1 relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-zinc-100">
                        <span className="text-rose-500">Docs</span> & Writing
                    </h1>
                    <p className="text-zinc-400 text-lg mb-12">
                        Welcome to my digital garden. This is where I publish my blogs, rants, and documentation. I'll get around to writing actual posts eventually.
                    </p>
                    
                    {/* Placeholder for blogs */}
                    <div className="flex flex-col gap-6">
                        <div className="p-8 border border-zinc-800 rounded-3xl bg-zinc-900/50 hover:border-rose-500/50 hover:bg-zinc-900 transition-all duration-300 cursor-pointer group shadow-xl backdrop-blur-sm">
                            <h3 className="text-2xl font-display font-bold text-zinc-100 group-hover:text-rose-400 transition-colors mb-3">Coming Soon</h3>
                            <p className="font-mono text-zinc-500 text-xs mb-5 uppercase tracking-widest">Published on {new Date().toLocaleDateString()}</p>
                            <p className="text-zinc-400 font-body leading-relaxed">Currently setting up the markdown parser and CMS so I can pretend to write regularly. Check back later for some actual content.</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
