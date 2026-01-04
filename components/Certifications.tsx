"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Certifications = () => {
    const [activeCertification, setActiveCertification] = useState("devops");

    const certifications = [
        {
            id: "devops",
            title: "DevOps Training & Internship",
            organization: "NITI Aayog",
            url: "https://drive.google.com/file/d/1Kq7uDzjLPnuzEWFtHPGPsW513zw9Uzjz/view?usp=sharing"
        },
        {
            id: "docker",
            title: "Docker Basic Unleashed",
            organization: "Udemy",
            url: "https://www.udemy.com/certificate/UC-3b739413-d448-47f2-ba1d-bae08a812620/"
        },
        {
            id: "linux",
            title: "Linux Fundamentals",
            organization: "Udemy",
            url: "https://www.udemy.com/certificate/UC-3e30d47b-8384-4d86-8a9c-a46ee624b6b5/"
        },
        {
            id: "python",
            title: "Python for Beginners",
            organization: "Udemy",
            url: "https://drive.google.com/file/d/1lsxohGLLa9lPabefV4YuUfKo3nrvAn_L/view"
        }
    ];

    return (
        <section id="certifications" className="relative py-16 md:py-32 bg-obsidian-950 overflow-hidden">
            {/* Background Elements */}
            {/* Subtle Light Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-obsidian-900/10 to-white/0 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight"
                    >
                        Professional{" "}
                        <span className="text-electric-cyan">Certifications</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-obsidian-300 text-lg md:text-xl leading-relaxed"
                    >
                        Continuous learning through industry-recognized certifications in DevOps, 
                        containerization, and system administration.
                    </motion.p>
                </div>

                {/* Certifications List */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    <div className="space-y-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group cursor-pointer"
                                onMouseEnter={() => setActiveCertification(cert.id)}
                            >
                                <a 
                                    href={cert.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl border border-obsidian-800/50 hover:border-electric-cyan/30 transition-all duration-300 hover:bg-obsidian-900/30"
                                >
                                    <span className="relative w-3 h-3 rounded-full bg-obsidian-600 flex-shrink-0">
                                        {activeCertification === cert.id && (
                                            <motion.span
                                                layoutId="cert-dot"
                                                className="absolute inset-0 w-3 h-3 rounded-full bg-electric-cyan shadow-lg shadow-electric-cyan/30"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="text-white font-medium text-lg group-hover:text-electric-cyan transition-colors duration-300">
                                            {cert.title}
                                        </h3>
                                        <p className="text-obsidian-400 text-sm mt-1">
                                            {cert.organization}
                                        </p>
                                    </div>
                                    <motion.span 
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 4 }}
                                        className="text-obsidian-400 group-hover:text-electric-cyan transition-colors duration-300"
                                    >
                                        →
                                    </motion.span>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;