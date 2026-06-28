"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
            setIsMobileMenuOpen(false); // Close mobile menu when hiding navbar
        } else {
            setHidden(false);
        }
        setIsTop(latest < 50);
    });

    const links = [
        { name: "Experience", href: "/#experience" },
        { name: "Skills", href: "/#skills" },
        { name: "Work", href: "/#projects" },
        { name: "Docs", href: "/docs" },
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-150%", opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4 transition-all duration-300 ${isTop ? "py-4" : "py-0"}`}
        >
            <nav className="px-4 py-2 flex items-center gap-4 md:gap-6 w-fit mx-auto bg-zinc-950/50 backdrop-blur-md rounded-full border border-zinc-800/50 shadow-lg">
                
                <a href="/#home" className="text-zinc-100 font-display font-bold text-sm tracking-tight px-2 hover:text-rose-400 transition-colors">
                    Shinjan.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4 px-4">
                    {links.map((l, i) => (
                        <a key={i} href={l.href} className="text-xs font-medium text-zinc-400 hover:text-rose-400 transition-colors duration-300">
                            {l.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3 md:gap-4 px-2">
                    <a href="https://github.com/shinjansarkar" target="_blank" rel="noreferrer" className="hidden md:block text-zinc-400 hover:text-white transition-colors">
                        <FaGithub size={18} />
                    </a>
                    <a href="/#contact" className="px-4 md:px-5 py-2 text-[10px] md:text-[11px] uppercase tracking-wider text-black bg-white hover:scale-105 transition-transform rounded-full font-bold shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]">
                        Contact
                    </a>
                    
                    {/* Mobile Menu Toggle Button */}
                    <button 
                        className="md:hidden text-zinc-400 hover:text-rose-400 transition-colors p-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden mt-4 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4 min-w-[200px] shadow-2xl relative"
                    >
                        {links.map((l, i) => (
                            <a 
                                key={i} 
                                href={l.href} 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm font-medium text-zinc-300 hover:text-rose-400 transition-colors duration-300"
                            >
                                {l.name}
                            </a>
                        ))}
                        <div className="h-px w-full bg-zinc-800/50 my-1" />
                        <a 
                            href="https://github.com/shinjansarkar" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            <FaGithub size={16} /> GitHub
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
