"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { LuTarget, LuCode, LuHeartHandshake, LuPlay, LuCodeXml, LuGraduationCap, LuArrowLeft } from "react-icons/lu";
import { useState } from "react";

export default function NetdiscoverDocPage() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isEngineerMode, setIsEngineerMode] = useState(true);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden relative flex flex-col font-sans">
            
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-zinc-500/10 rounded-full blur-[150px]" />
            </div>

            <Navbar />

            <div className="flex-1 relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-emerald-500/30 transition-all duration-300 mb-8 w-fit text-sm font-medium">
                                <LuArrowLeft size={16} /> Back to Portfolio
                            </Link>
                            <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-4 drop-shadow-lg">
                                NetDiscover Document
                            </h1>
                            <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
                                An exhaustive developer guide for integrating decentralized, privacy-preserving federated learning into your applications. Wait, no, it's just a network scanner.
                            </p>
                        </div>
                        
                        <div className="flex bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md w-fit shadow-xl shrink-0">
                            <button 
                                onClick={() => setIsEngineerMode(true)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isEngineerMode ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'text-zinc-400 hover:text-zinc-200'}`}
                            >
                                <LuCodeXml size={16} /> Engineer
                            </button>
                            <button 
                                onClick={() => setIsEngineerMode(false)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${!isEngineerMode ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'text-zinc-400 hover:text-zinc-200'}`}
                            >
                                <LuGraduationCap size={16} /> Junior Dev
                            </button>
                        </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-emerald-500/50 via-white/10 to-transparent mb-16" />

                    <div className="space-y-16">
                        {/* Main Motive Section */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <LuTarget size={20} />
                                </div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">The Main Motive</h2>
                            </div>
                            
                            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 shadow-lg leading-relaxed text-zinc-300 space-y-4 backdrop-blur-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-white to-zinc-600" />
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={isEngineerMode ? "eng-motive" : "jun-motive"}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4"
                                    >
                                        <p>
                                            {isEngineerMode ? 
                                            "NetDiscover was built to bridge the gap between complex command-line network scanners and user-friendly visualizations. While tools like Nmap are incredibly powerful, they often require steep learning curves and produce text-heavy outputs." :
                                            "We built this because typing 'nmap' is hard and reading green text on a black terminal screen gives us a headache."}
                                        </p>
                                        <p>
                                            {isEngineerMode ? 
                                            "Our primary motive is to provide a lightweight, accessible, and visual alternative that runs anywhere (via Docker) and presents network topology and service data in an intuitive, modern web dashboard. We wanted to democratize network auditing for developers and hobbyists who need quick insights without the overhead of enterprise tools." :
                                            "We just wanted a shiny dashboard with nice buttons to show our friends that we know how to hack the Gibson. It runs in Docker so you don't even have to install Python properly."}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </section>

                        {/* How It Works Section */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                                    <LuCode size={20} />
                                </div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">How It Works</h2>
                            </div>
                            
                            <div className="space-y-6">
                                <AnimatePresence mode="wait">
                                    <motion.p 
                                        key={isEngineerMode ? "eng-desc" : "jun-desc"}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-zinc-400 leading-relaxed text-lg"
                                    >
                                        {isEngineerMode ? 
                                        "NetDiscover utilizes core networking protocols to build a comprehensive picture of a target network, orchestrated by a robust Python Flask backend:" :
                                        "It's basically a Python script that asks 'are you there?' to every computer on your Wi-Fi:"}
                                    </motion.p>
                                </AnimatePresence>
                                
                                <div className="grid gap-4">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={isEngineerMode ? "eng-features" : "jun-features"}
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.98 }}
                                            transition={{ duration: 0.3 }}
                                            className="grid gap-4"
                                        >
                                            {[
                                                { title: "Host Discovery", desc: isEngineerMode ? "Utilizes ICMP Echo requests (ping) and ARP broadcasts to reliably identify active devices on a subnet." : "It pings everything. If it pings back, it's alive." },
                                                { title: "Service Enumeration", desc: isEngineerMode ? "Performs rapid TCP connect scans using a multi-threaded worker pool to identify open ports without needing raw socket capabilities." : "It tries to connect to a bunch of ports. If it connects, the port is open." },
                                                { title: "Banner Grabbing & Fingerprinting", desc: isEngineerMode ? "Connects to open services and analyzes their initial application greetings to determine exact software versions (e.g., Nginx, SSH, Apache)." : "It says 'hello' to the open port and reads whatever text the port sends back to guess what app is running." },
                                                { title: "Data Visualization", desc: isEngineerMode ? "The scanning engine stores results in a SQLite database, which is then dynamically visualized as an interactive SVG subnet topology mapping on a responsive frontend dashboard." : "We save it to a file and draw a pretty picture on the screen." }
                                            ].map((feature, idx) => (
                                                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-6 items-start hover:border-emerald-500/30 transition-colors">
                                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-emerald-400 font-mono text-sm shrink-0 shadow-inner border border-white/10">
                                                        {idx + 1}
                                                    </div>
                                                    <div>
                                                        <strong className="text-white block mb-2 text-lg tracking-tight">{feature.title}</strong>
                                                        <span className="text-zinc-400 leading-relaxed">{feature.desc}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </section>

                        {/* Video Section embedded instead of PIP */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <LuPlay size={20} />
                                </div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">Overview Video</h2>
                            </div>
                            
                            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative bg-black aspect-video group">
                                {!isVideoPlaying ? (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                                        <div className="absolute inset-0 bg-[url('https://img.youtube.com/vi/N2NwDZRSHmA/maxresdefault.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-20 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-black/40" />
                                        <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black shadow-[0_0_40px_rgba(255,255,255,0.4)] transform group-hover:scale-110 transition-all duration-500 z-10">
                                            <LuPlay size={40} className="ml-2" />
                                        </div>
                                        <p className="mt-8 text-white font-semibold z-10 tracking-widest uppercase text-sm">Watch Project Overview</p>
                                    </div>
                                ) : (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/N2NwDZRSHmA?autoplay=1"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full object-cover"
                                    ></iframe>
                                )}
                            </div>
                        </section>

                        {/* How Users Will Get Help Section */}
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                                    <LuHeartHandshake size={20} />
                                </div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">How Users Get Help</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "Comprehensive Logging", desc: "The dashboard features a real-time logging console that captures all system events, errors, and scan statuses." },
                                    { title: "Exportable Reports", desc: "Users can easily export their scan results into JSON, CSV, or TXT formats for further analysis or sharing with their team." },
                                    { title: "Docker Simplicity", desc: "By providing a complete docker-compose setup, environment and dependency issues are practically eliminated out-of-the-box." },
                                    { title: "Open Source Community", desc: "Users can report bugs, request features, or ask questions directly on the project's GitHub repository." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-emerald-500/30 transition-colors shadow-lg">
                                        <h3 className="text-white font-bold mb-3 tracking-tight text-xl">{item.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
