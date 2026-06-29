"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogsPage() {
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
                        <span className="text-rose-500">Blogs</span> & Articles
                    </h1>
                    <p className="text-zinc-400 text-lg mb-12">
                        Welcome to my digital garden. This is where I publish my blogs and articles. I'll get around to writing actual posts eventually.
                    </p>
                    
                    {/* Projects and Docs */}
                    <div className="flex flex-col gap-6">
                        {/* More docs coming soon */}
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
