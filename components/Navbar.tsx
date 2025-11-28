'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contributions', 'github', 'hobbies', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contributions', href: '#contributions' },
        { name: 'GitHub', href: '#github' },
        { name: 'Hobbies', href: '#hobbies' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#home"
                    className="text-2xl font-bold text-neon-blue hover:text-neon-green transition-colors"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="text-neon-glow">&lt;DevOps/&gt;</span>
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            className={`relative text-sm font-medium uppercase tracking-wider transition-colors ${activeSection === item.href.slice(1)
                                ? 'text-neon-blue'
                                : 'text-gray-300 hover:text-neon-green'
                                }`}
                            whileHover={{ y: -2 }}
                        >
                            {item.name}
                            {activeSection === item.href.slice(1) && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-blue neon-glow-blue"
                                />
                            )}
                        </motion.a>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="hidden md:flex items-center space-x-4">
                    <motion.a
                        href="https://github.com/shinjansarkar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-neon-blue transition-colors"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/shinjan-sarkar-544323251/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-neon-blue transition-colors"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaLinkedin size={20} />
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden text-neon-blue"
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </motion.button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
