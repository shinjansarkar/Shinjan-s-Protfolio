"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Work", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    useEffect(() => {
        const sections = navItems.map((item) => document.getElementById(item.id));

        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (isMenuOpen && !target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    const handleNavClick = (id: string) => {
        setActive(id);
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Desktop & Tablet Navbar */}
            <div className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none px-4">
                {/* Subtle Light Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-obsidian-900/10 to-white/0 pointer-events-none rounded-full" />
                <motion.nav
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass-nav px-4 md:px-6 py-3 rounded-full flex items-center gap-4 md:gap-8 pointer-events-auto shadow-2xl shadow-obsidian-950/50 relative"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setActive(item.id)}
                            className="relative text-xs md:text-sm font-medium tracking-wide transition-colors duration-300 whitespace-nowrap"
                        >
                            <span className={`${active === item.id ? "text-white" : "text-obsidian-300 hover:text-white"}`}>
                                {item.name}
                            </span>
                            {active === item.id && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-electric-cyan rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </motion.nav>
            </div>

            {/* Mobile Navbar with Hamburger */}
            <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass-nav mx-4 mt-4 px-4 py-3 rounded-2xl flex items-center justify-between pointer-events-auto shadow-2xl shadow-obsidian-950/50"
                >
                    {/* Logo/Brand */}
                    <a href="#home" className="text-lg font-bold text-white tracking-tight">
                        SS
                    </a>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 group"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white rounded-full transition-all"
                        />
                        <motion.span
                            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-white rounded-full transition-all"
                        />
                        <motion.span
                            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white rounded-full transition-all"
                        />
                    </button>
                </motion.div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="glass-nav mx-4 mt-2 px-6 py-4 rounded-2xl shadow-2xl shadow-obsidian-950/50"
                        >
                            <div className="flex flex-col gap-4">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={() => handleNavClick(item.id)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative text-base font-medium tracking-wide transition-colors duration-300 py-2"
                                    >
                                        <span className={`${active === item.id ? "text-white" : "text-obsidian-300"}`}>
                                            {item.name}
                                        </span>
                                        {active === item.id && (
                                            <motion.div
                                                layoutId="mobile-nav-pill"
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-electric-cyan rounded-full"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Navbar;
