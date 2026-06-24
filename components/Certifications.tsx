"use client";

import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certs = [
    { title: "Docker Basic Unleashed", status: "Whale Tamer", id: "DCK-8091", date: "2024" },
    { title: "Linux Fundamentals", status: "Knows how to exit Vim", id: "LNX-0042", date: "2023" },
    { title: "Python for Beginners", status: "Can print 'Hello'", id: "PY-1337", date: "2023" },
    { title: "NITI Aayog DevOps", status: "Gov Approved", id: "GOV-001X", date: "2024" }
];

export default function Certifications() {
    return (
        <div className="py-24 relative w-full">
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-0">
                <div className="mb-16 border-b border-zinc-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-zinc-100 tracking-tighter">
                            Fancy <span className="text-rose-500 italic font-serif">Papers</span>
                        </h2>
                        <p className="text-zinc-500 font-mono text-sm mt-4 uppercase tracking-widest">
                            (Yes, I took exams for these)
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certs.map((cert, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                            viewport={{ once: true }}
                            className="relative flex bg-[#0c0c0e] rounded-xl overflow-hidden group shadow-2xl"
                        >
                            {/* Colorful Ticket Edge */}
                            <div className="w-3 bg-gradient-to-b from-rose-600 to-rose-400 h-full relative">
                                {/* Semi-circle cutouts to mimic ticket */}
                                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-950 rounded-full" />
                            </div>

                            {/* Main Body */}
                            <div className="flex-grow p-6 md:p-8 border border-l-0 border-zinc-800 rounded-r-xl relative overflow-hidden">
                                <FaCertificate className="absolute -bottom-6 -right-6 text-9xl text-zinc-800/30 group-hover:text-rose-500/10 transition-colors duration-500 rotate-12" />
                                
                                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest border border-zinc-800 px-2 py-1 rounded">
                                                VERIFIED
                                            </p>
                                            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                                                {cert.date}
                                            </p>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-zinc-100 group-hover:text-rose-400 transition-colors leading-tight">
                                            {cert.title}
                                        </h3>
                                    </div>
                                    
                                    <div className="flex justify-between items-end border-t border-zinc-800/50 pt-4 mt-4">
                                        <div>
                                            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mb-1">Status / Skill</p>
                                            <p className="text-rose-400 font-mono text-sm font-bold uppercase tracking-wider">{cert.status}</p>
                                        </div>
                                        <div className="text-right">
                                            {/* Barcode Mockup */}
                                            <div className="flex gap-[2px] h-6 mb-1 items-end justify-end opacity-50">
                                                <div className="w-[2px] h-full bg-zinc-400" />
                                                <div className="w-[1px] h-[90%] bg-zinc-400" />
                                                <div className="w-[3px] h-full bg-zinc-400" />
                                                <div className="w-[2px] h-[80%] bg-zinc-400" />
                                                <div className="w-[1px] h-full bg-zinc-400" />
                                                <div className="w-[4px] h-[95%] bg-zinc-400" />
                                                <div className="w-[1px] h-[80%] bg-zinc-400" />
                                                <div className="w-[2px] h-full bg-zinc-400" />
                                            </div>
                                            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest">
                                                {cert.id}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}