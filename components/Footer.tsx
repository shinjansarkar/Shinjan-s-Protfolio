"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCodeBranch, FaStar, FaCode, FaFolderOpen } from "react-icons/fa";
import Magnetic from "./Magnetic";
import useGithubStats from "./useGithubStats";

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const { stats, isLoading } = useGithubStats();

    const socials = [
        { icon: FaGithub, href: "https://github.com/shinjansarkar", label: "GitHub" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/shinjan-sarkar-544323251/", label: "LinkedIn" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaEnvelope, href: "mailto:contact@shinjansarkar.com", label: "Email" },
    ];

        return (
                <motion.footer
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-obsidian-950 pt-12 md:pt-20 pb-8 md:pb-10 overflow-hidden"
                >
                    {/* Subtle Light Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-obsidian-900/10 to-white/0 pointer-events-none z-0" />
                        <div className="w-full flex flex-col items-center px-4">


                {/* Socials - The "Sexy" Part */}
                <div className="flex gap-4 md:gap-6 mb-12 md:mb-20">
                    {socials.map((social, index) => (
                        <Magnetic key={index}>
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-obsidian-900 border border-obsidian-800 text-white text-xl md:text-2xl hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                                aria-label={social.label}
                            >
                                <social.icon />
                            </a>
                        </Magnetic>
                    ))}
                </div>

                {/* Massive Typography Backdrop */}
                <div className="w-full overflow-hidden flex justify-center mb-6 md:mb-10 select-none pointer-events-none opacity-20">
                    <h1 className="text-[18vw] md:text-[14vw] lg:text-[10vw] leading-none font-black text-white tracking-tighter whitespace-nowrap">
                        SHINJAN SARKAR
                    </h1>
                </div>

                {/* Minimal Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-6 lg:px-12 max-w-[1400px] text-[10px] md:text-xs font-medium text-obsidian-500 uppercase tracking-wider md:tracking-widest gap-3 md:gap-0">
                    <p>© {currentYear} Shinjan Sarkar</p>
                    <div className="flex gap-4 md:gap-8 mt-2 md:mt-0">
                        <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
                        <span className="hover:text-white transition-colors cursor-pointer">Legal</span>
                    </div>
                    <p className="mt-2 md:mt-0 text-center">Local Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
