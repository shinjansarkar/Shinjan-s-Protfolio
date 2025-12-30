"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Magnetic from "./Magnetic";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Minimalist Animated Background */}
            <div className="absolute inset-0 bg-obsidian-950">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[100px] animate-pulse-slow" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* Availability Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-800/80 border border-obsidian-300/20 backdrop-blur-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-obsidian-200 tracking-wide uppercase">
                        Available for new projects
                    </span>
                </motion.div>

                {/* Main Title - Cinematic Typography */}
                <div className="relative mb-6">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-obsidian-400 tracking-tighter leading-tight"
                    >
                        SHINJAN
                        <br />
                        SARKAR
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-2xl text-obsidian-300 font-light tracking-widest uppercase mb-12"
                >
                    DevOps Engineer & Cloud Architect
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Magnetic>
                        <a
                            href="#projects"
                            className="inline-block px-8 py-3 bg-white text-obsidian-950 font-bold text-sm tracking-widest uppercase hover:bg-obsidian-100 transition-colors rounded-full"
                        >
                            View Work
                        </a>
                    </Magnetic>

                    <Magnetic>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-3 bg-transparent border border-obsidian-300 text-white font-bold text-sm tracking-widest uppercase hover:bg-obsidian-800 transition-colors rounded-full"
                        >
                            Contact Me
                        </a>
                    </Magnetic>
                </motion.div>

                {/* Social Proof Minimal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-24 flex items-center justify-center gap-8 text-obsidian-400"
                >
                    <Magnetic>
                        <a href="https://github.com/shinjansarkar" target="_blank" rel="noreferrer" className="block hover:text-white transition-colors p-2"><FaGithub size={24} /></a>
                    </Magnetic>
                    <Magnetic>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block hover:text-white transition-colors p-2"><FaLinkedin size={24} /></a>
                    </Magnetic>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
