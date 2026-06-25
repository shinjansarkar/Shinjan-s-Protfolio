"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaMicrophoneAlt } from "react-icons/fa";

const contributions = [
    {
        title: "Speaking Engagement",
        platform: "LinkedIn",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7445910008212656128/",
        id: "SPK-001",
        date: "2024"
    }
];

export default function Contributions() {
    return (
        <div className="py-24 relative w-full">
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-0">
                <div className="mb-16 border-b border-zinc-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-zinc-100 tracking-tighter">
                            Public <span className="text-rose-500 italic font-serif">Speaking</span>
                        </h2>
                        <p className="text-zinc-500 font-mono text-sm mt-4 uppercase tracking-widest">
                            (People actually listened)
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {contributions.map((item, i) => (
                        <motion.a 
                            key={i}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 bg-zinc-900/40 hover:bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 hover:border-rose-500/30 rounded-3xl overflow-hidden transition-all duration-500"
                        >
                            {/* Background Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-rose-500/0 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Icon Placeholder */}
                            <div className="relative shrink-0 w-24 h-24 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center overflow-hidden group-hover:border-rose-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.3)] transition-all duration-500 z-10">
                                <FaMicrophoneAlt className="text-4xl text-zinc-600 group-hover:text-rose-400 transition-colors duration-500" />
                                {/* Subtle pulse ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-rose-500/0 group-hover:border-rose-500/20 group-hover:scale-110 transition-all duration-700" />
                            </div>

                            {/* Content */}
                            <div className="flex-grow flex flex-col text-center sm:text-left z-10 w-full">
                                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-3">
                                    <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                                        </span>
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-400">
                                            Live Recording
                                        </span>
                                    </div>
                                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest border border-zinc-800 px-2 py-1 rounded">
                                        {item.date}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-zinc-100 group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>
                                
                                <div className="flex items-center justify-center sm:justify-start gap-2 mt-4 text-sm font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                    <FaLinkedin className="text-[#0A66C2] text-lg" />
                                    <span>View on {item.platform}</span>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="shrink-0 w-12 h-12 hidden sm:flex rounded-full border border-zinc-800 items-center justify-center bg-zinc-950 group-hover:bg-rose-500 group-hover:border-rose-500 transition-all duration-500 z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-500 group-hover:text-white -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
