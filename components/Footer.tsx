"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Magnetic from "./Magnetic";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socials = [
        { icon: FaGithub, href: "https://github.com/shinjansarkar", label: "GitHub" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/shinjan-sarkar-544323251/", label: "LinkedIn" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaEnvelope, href: "mailto:contact@shinjansarkar.com", label: "Email" },
    ];

    return (
        <footer className="relative bg-obsidian-950 pt-20 pb-10 overflow-hidden border-t border-obsidian-900">
            <div className="w-full flex flex-col items-center">

                {/* Socials - The "Sexy" Part */}
                <div className="flex gap-6 mb-20">
                    {socials.map((social, index) => (
                        <Magnetic key={index}>
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-16 h-16 rounded-full bg-obsidian-900 border border-obsidian-800 text-white text-2xl hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                                aria-label={social.label}
                            >
                                <social.icon />
                            </a>
                        </Magnetic>
                    ))}
                </div>

                {/* Massive Typography Backdrop */}
                <div className="w-full overflow-hidden flex justify-center mb-10 select-none pointer-events-none opacity-20">
                    <h1 className="text-[15vw] leading-none font-black text-obsidian-800 tracking-tighter whitespace-nowrap">
                        SHINJAN SARKAR
                    </h1>
                </div>

                {/* Minimal Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 max-w-[1400px] text-xs font-medium text-obsidian-500 uppercase tracking-widest">
                    <p>© {currentYear} Shinjan Sarkar</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
                        <span className="hover:text-white transition-colors cursor-pointer">Legal</span>
                    </div>
                    <p className="mt-4 md:mt-0">Local Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
