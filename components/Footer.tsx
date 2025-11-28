'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-dark-bg border-t border-gray-800 pt-20 pb-10 overflow-hidden">
            {/* Neon Line Separator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-3xl font-bold text-white mb-2">
                            &lt;DevOps<span className="text-neon-blue">/</span>&gt;
                        </h2>
                        <p className="text-gray-400 max-w-md mx-auto">
                            Building the future of infrastructure, one pipeline at a time.
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <div className="flex space-x-6 mb-12">
                        {[
                            { icon: FaGithub, href: "https://github.com/shinjansarkar", color: "hover:text-neon-blue" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/shinjan-sarkar-544323251/", color: "hover:text-neon-purple" },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className={`text-gray-400 text-2xl transition-colors ${social.color}`}
                            >
                                <social.icon />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-500">
                        <p>© {currentYear} Shinjan Sarkar. All rights reserved.</p>
                        <span className="hidden md:block">•</span>
                        <p className="flex items-center gap-1">
                            Made with <FaHeart className="text-neon-pink animate-pulse" /> using Next.js & Tailwind
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
