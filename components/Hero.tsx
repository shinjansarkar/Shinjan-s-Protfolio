"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown, FaCode, FaRocket } from "react-icons/fa";
import Magnetic from "./Magnetic";
import { useState, useEffect } from "react";

const Hero = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const firstName = "SHINJAN";
    const lastName = "SARKAR";

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const letterVariants = {
        initial: { y: 0 },
        hover: (i: number) => ({
            y: [-3, -20, -10, 0],
            transition: {
                delay: i * 0.03,
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
                times: [0, 0.3, 0.6, 1],
            },
        }),
    };

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-20 overflow-hidden">
            {/* Subtle Light Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-obsidian-900/10 to-white/0 pointer-events-none z-0" />
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 bg-obsidian-950 z-0">
                {/* Multiple Glow Orbs */}
                <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-electric-blue/10 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute top-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-electric-purple/10 rounded-full blur-[100px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-1/4 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-electric-cyan/10 rounded-full blur-[90px]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.25, 0.45, 0.25],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating Grid */}
                <div className="absolute inset-0 opacity-5">
                    <div 
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)',
                            backgroundSize: '50px 50px',
                            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                        }}
                    />
                </div>

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-electric-cyan rounded-full"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                {/* Availability Badge with Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-obsidian-900 to-obsidian-800 border border-electric-cyan/30 backdrop-blur-sm mb-10 shadow-lg shadow-electric-cyan/10"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase">
                        Available for new projects
                    </span>
                    <FaRocket className="text-electric-cyan" />
                </motion.div>

                {/* Main Title with Enhanced Effects */}
                <div className="relative mb-6">
                    {/* Glowing Background for Title */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 blur-2xl">
                        <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-electric-blue">
                            {firstName} {lastName}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="cursor-pointer relative"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-obsidian-400 tracking-tighter leading-[1.1] relative"
                            style={{ 
                                fontFamily: "'Space Grotesk', sans-serif",
                                textShadow: '0 0 80px rgba(0, 240, 255, 0.1)'
                            }}
                        >
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="inline-block"
                            >
                                {firstName.split("").map((letter, i) => (
                                    <motion.span
                                        key={`first-${i}`}
                                        custom={i}
                                        variants={letterVariants}
                                        initial="initial"
                                        animate={isHovering ? "hover" : "initial"}
                                        className="inline-block hover:text-electric-cyan transition-colors"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="inline-block"
                            >
                                {lastName.split("").map((letter, i) => (
                                    <motion.span
                                        key={`last-${i}`}
                                        custom={i}
                                        variants={letterVariants}
                                        initial="initial"
                                        animate={isHovering ? "hover" : "initial"}
                                        className="inline-block hover:text-electric-cyan transition-colors"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </motion.h1>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1, duration: 1 }}
                            className="h-1 bg-gradient-to-r from-transparent via-electric-cyan to-transparent mx-auto mt-8 max-w-md"
                        />
                    </motion.div>
                </div>

                {/* Enhanced Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mb-10 md:mb-12"
                >
                    <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-white to-electric-cyan font-medium tracking-wider md:tracking-widest uppercase px-4 mb-4">
                        DevOps Engineer & Cloud Architect
                    </p>
                    <div className="flex items-center justify-center gap-4 text-obsidian-400 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                            <FaCode className="text-electric-cyan" />
                            <span>Infrastructure as Code</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                            <FaRocket className="text-electric-purple" />
                            <span>CI/CD Automation</span>
                        </div>
                    </div>
                </motion.div>

                {/* Enhanced CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-md mx-auto"
                >
                    <Magnetic>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-block px-8 sm:px-10 py-4 bg-gradient-to-r from-electric-blue to-electric-cyan text-white font-bold text-sm sm:text-base tracking-wide sm:tracking-widest uppercase rounded-full w-full sm:w-auto text-center overflow-hidden shadow-lg shadow-electric-blue/30 hover:shadow-electric-blue/50 transition-shadow"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                View Work
                                <FaArrowDown className="text-xs group-hover:translate-y-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                    </Magnetic>

                    <Magnetic>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-block px-8 sm:px-10 py-4 bg-transparent border-2 border-electric-cyan/50 text-white font-bold text-sm sm:text-base tracking-wide sm:tracking-widest uppercase rounded-full w-full sm:w-auto text-center hover:bg-electric-cyan/10 hover:border-electric-cyan transition-all"
                        >
                            <span className="relative z-10">Contact Me</span>
                        </motion.a>
                    </Magnetic>
                </motion.div>

                {/* Enhanced Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16 md:mt-24"
                >
                    <div className="flex items-center justify-center gap-6 md:gap-8 mb-6">
                        <Magnetic>
                            <motion.a 
                                href="https://github.com/shinjansarkar" 
                                target="_blank" 
                                rel="noreferrer" 
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-obsidian-900 border border-obsidian-800 text-obsidian-400 hover:text-white hover:border-electric-cyan hover:bg-obsidian-800 transition-all shadow-lg hover:shadow-electric-cyan/20"
                            >
                                <FaGithub size={20} />
                            </motion.a>
                        </Magnetic>
                        <Magnetic>
                            <motion.a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noreferrer" 
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-obsidian-900 border border-obsidian-800 text-obsidian-400 hover:text-white hover:border-electric-blue hover:bg-obsidian-800 transition-all shadow-lg hover:shadow-electric-blue/20"
                            >
                                <FaLinkedin size={20} />
                            </motion.a>
                        </Magnetic>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
