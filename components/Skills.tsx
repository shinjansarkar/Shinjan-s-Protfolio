"use client";

import { motion } from "framer-motion";
import { FaDocker, FaAws, FaLinux, FaGithub, FaJenkins, FaPython, FaNodeJs, FaTerminal } from "react-icons/fa";
import { SiKubernetes, SiGitlab, SiNginx, SiTerraform, SiAnsible, SiPostgresql, SiRedis } from "react-icons/si";

const Skills = () => {
    const skillCategories = [
        {
            title: "Cloud & Infrastructure",
            gradient: "from-electric-blue/20 to-electric-cyan/20",
            borderColor: "group-hover:border-electric-cyan/50",
            iconColor: "text-electric-cyan",
            skills: [
                { name: "AWS", icon: FaAws, level: 90 },
                { name: "Docker", icon: FaDocker, level: 95 },
                { name: "Kubernetes", icon: SiKubernetes, level: 85 },
                { name: "Terraform", icon: SiTerraform, level: 80 },
            ]
        },
        {
            title: "CI/CD & Automation",
            gradient: "from-electric-purple/20 to-electric-blue/20",
            borderColor: "group-hover:border-electric-purple/50",
            iconColor: "text-electric-purple",
            skills: [
                { name: "GitLab CI", icon: SiGitlab, level: 90 },
                { name: "Jenkins", icon: FaJenkins, level: 75 },
                { name: "Git", icon: FaGithub, level: 95 },
                { name: "Ansible", icon: SiAnsible, level: 70 },
            ]
        },
        {
            title: "Languages & Tools",
            gradient: "from-electric-cyan/20 to-electric-purple/20",
            borderColor: "group-hover:border-electric-blue/50",
            iconColor: "text-electric-blue",
            skills: [
                { name: "Python", icon: FaPython, level: 85 },
                { name: "Bash", icon: FaTerminal, level: 90 },
                { name: "Linux", icon: FaLinux, level: 95 },
                { name: "Nginx", icon: SiNginx, level: 80 },
            ]
        },
    ];

    return (
        <section id="skills" className="relative py-16 md:py-32 bg-obsidian-950 overflow-hidden">
            {/* Subtle Light Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-obsidian-900/10 to-white/0 pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-[0.2em] text-electric-blue uppercase mb-4"
                    >
                        // Technical Arsenal
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4"
                    >
                        Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-cyan">Technologies</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-obsidian-300 text-sm md:text-base"
                    >
                        Crafting scalable infrastructure with modern DevOps practices
                    </motion.p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className={`relative h-full glass-panel rounded-2xl p-6 md:p-8 border-2 border-obsidian-800 ${category.borderColor} transition-all duration-500 overflow-hidden`}>
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Category Title */}
                                    <h4 className="text-lg md:text-xl font-bold text-white mb-6 pb-4 border-b border-obsidian-800 group-hover:border-obsidian-700 transition-colors">
                                        {category.title}
                                    </h4>

                                    {/* Skills List */}
                                    <div className="space-y-5">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skillIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.1 }}
                                                className="group/skill"
                                            >
                                                {/* Skill Header */}
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`${category.iconColor} transition-transform group-hover/skill:scale-110 duration-300 bg-obsidian-900/60 p-2 rounded-lg`}>
                                                            <skill.icon size={20} />
                                                        </div>
                                                        <span className="text-sm font-medium text-white group-hover/skill:text-electric-cyan transition-colors duration-300">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 md:mt-16"
                >
                    <p className="text-center text-xs text-obsidian-400 uppercase tracking-widest mb-6">
                        Also familiar with
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                        {[
                            { name: "PostgreSQL", icon: SiPostgresql },
                            { name: "Redis", icon: SiRedis },
                            { name: "Node.js", icon: FaNodeJs },
                        ].map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="flex items-center gap-2 px-4 py-2 bg-obsidian-900/50 border border-obsidian-800 rounded-full hover:border-obsidian-600 transition-all"
                            >
                                <tech.icon className="text-sm text-obsidian-400" />
                                <span className="text-xs font-medium text-obsidian-300">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
