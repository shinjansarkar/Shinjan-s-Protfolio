"use client";

import { motion } from "framer-motion";
import { FaDocker, FaAws, FaLinux, FaGithub, FaJenkins, FaPython } from "react-icons/fa";
import { SiKubernetes, SiGitlab, SiNginx } from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "AWS", icon: FaAws },
        { name: "Linux", icon: FaLinux },
        { name: "CI/CD", icon: FaJenkins },
        { name: "GitLab", icon: SiGitlab },
        { name: "Python", icon: FaPython },
        { name: "Nginx", icon: SiNginx },
        { name: "Git", icon: FaGithub },
    ];

    return (
        <section id="skills" className="py-32 bg-obsidian-950 border-t border-obsidian-900">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-16"
                >
                    Tech Stack
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4, type: "spring" }}
                            whileHover={{ scale: 1.1, y: -5, rotate: 2 }}
                            className="flex items-center gap-3 px-6 py-4 bg-obsidian-900 border border-obsidian-800 rounded-lg hover:border-electric-blue/50 transition-colors hover:shadow-lg hover:shadow-electric-blue/20"
                        >
                            <skill.icon className="text-xl text-obsidian-200" />
                            <span className="text-sm font-medium text-obsidian-200">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
