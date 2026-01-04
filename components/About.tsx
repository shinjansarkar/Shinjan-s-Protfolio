"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaServer, FaCloud, FaCode, FaTerminal } from "react-icons/fa";

const About = () => {
    const cards = [
        {
            icon: FaServer,
            title: "Docker & K8s",
            desc: "Container orchestration at scale.",
            color: "text-blue-400",
        },
        {
            icon: FaCloud,
            title: "AWS Architecture",
            desc: "Building resilient cloud infra.",
            color: "text-orange-400",
        },
        {
            icon: FaCode,
            title: "CI/CD Pipelines",
            desc: "Automating workflows with GitLab.",
            color: "text-purple-400",
        },
        {
            icon: FaTerminal,
            title: "IaC & Scripting",
            desc: "Terraform, Ansible, and Bash.",
            color: "text-green-400",
        },
    ];

    return (
        <section id="about" className="relative py-16 md:py-32 bg-obsidian-950 overflow-hidden">
            {/* Subtle Light Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-obsidian-900/10 to-white/0 pointer-events-none z-0" />
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-obsidian-300 uppercase mb-4">
              // Who I Am
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Bridging the gap between <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple">
                                development
                            </span>{" "}
                            and operations.
                        </h3>
                        <div className="space-y-6 text-lg text-obsidian-200 leading-relaxed">
                            <p>
                                I am a DevOps enthusiast passionate about automating infrastructure
                                and ensuring reliability. My focus is on building scalable systems
                                using tools like Docker, Kubernetes, and Terraform.
                            </p>
                            <p>
                                From setting up rigorous CI/CD pipelines to optimizing cloud costs
                                on AWS, I enjoy the challenge of making complex systems run
                                effortlessly.
                            </p>
                        </div>


                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 p-6 glass-panel rounded-xl border-l-4 border-electric-cyan"
                        >
                            <code className="text-sm text-electric-cyan min-w-[200px] block">
                                $ echo "Let's build something scalable."
                            </code>
                        </motion.div>
                    </motion.div>

                    {/* Right: Bento Grid of Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group relative p-8 glass-panel rounded-2xl hover:bg-obsidian-800/50 transition-colors"
                            >
                                <div
                                    className={`mb-6 p-4 rounded-xl bg-obsidian-900 w-fit ${card.color} group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <card.icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                                <p className="text-obsidian-300">{card.desc}</p>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
