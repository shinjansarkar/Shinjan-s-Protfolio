"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const springUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { delay, type: "spring", stiffness: 200, damping: 20 },
});

export default function GithubStats() {
    const stats = [
        {
            category: "OVERVIEW",
            title: "Overall Stats",
            img: "https://github-readme-stats.vercel.app/api?username=shinjansarkar&show_icons=true&theme=radical&bg_color=00000000&hide_border=true&title_color=f43f5e&text_color=a1a1aa&icon_color=f43f5e"
        },
        {
            category: "LANGUAGES",
            title: "Top Languages",
            img: "https://github-readme-stats.vercel.app/api/top-langs/?username=shinjansarkar&layout=compact&theme=radical&bg_color=00000000&hide_border=true&title_color=f43f5e&text_color=a1a1aa"
        },
        {
            category: "STREAK",
            title: "Contribution Streak",
            img: "https://github-readme-streak-stats.herokuapp.com/?user=shinjansarkar&theme=radical&background=00000000&hide_border=true&ring=f43f5e&fire=f43f5e&currStreakLabel=f43f5e"
        }
    ];

    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <motion.div
            {...springUp(0.6)}
            className="py-16 md:py-24 flex flex-col justify-start w-full relative group"
        >
            <div className="relative z-10 h-full flex flex-col w-full max-w-6xl mx-auto px-4">
                <div className="mb-16 border-l-2 border-rose-500 pl-6">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-100 tracking-tight">
                        My <span className="text-rose-500">GitHub</span> Flex
                    </h2>
                    <p className="text-zinc-500 font-mono text-sm mt-2 uppercase tracking-widest">
                        (Proof that I actually push code)
                    </p>
                </div>

                <div className="flex flex-col w-full items-center">
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-12">
                        {stats.map((stat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`text-xl md:text-3xl font-display font-bold uppercase tracking-widest transition-all duration-300 relative px-4 py-2 
                                ${activeTab === i ? 'text-rose-500 scale-110 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]' : 'text-zinc-700 hover:text-zinc-400'}`}
                            >
                                [{stat.category}]
                                {activeTab === i && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute -bottom-2 left-0 right-0 h-1 bg-rose-500/50 blur-[2px]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Image Display Area */}
                    <div className="w-full flex justify-center items-center min-h-[300px] md:min-h-[400px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative flex flex-col items-center"
                            >
                                <img
                                    src={stats[activeTab].img}
                                    alt={stats[activeTab].title}
                                    className="w-full max-w-[500px] drop-shadow-[0_0_40px_rgba(244,63,94,0.3)] filter grayscale-[10%]"
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-6 text-zinc-500 font-mono text-xs uppercase tracking-widest"
                                >
                                    // {stats[activeTab].title}
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
