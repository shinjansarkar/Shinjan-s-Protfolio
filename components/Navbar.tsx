"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState("home");

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

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-nav px-4 md:px-6 py-3 rounded-full flex items-center gap-4 md:gap-8 pointer-events-auto shadow-2xl shadow-obsidian-950/50 overflow-x-auto max-w-full no-scrollbar"
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
    );
};

export default Navbar;
