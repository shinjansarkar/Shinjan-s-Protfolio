"use client";

import { motion } from "framer-motion";
import { FaDocker, FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaRocket } from "react-icons/fa";
import { SiNginx } from "react-icons/si";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-full"
        >
            {/* Outer Glow Container */}
            {/* Removed colorful outer glow */}
            
            {/* Card */}
            <div className="relative h-full bg-obsidian-950 border-2 border-obsidian-800 p-6 md:p-8 rounded-2xl overflow-hidden hover:border-obsidian-700 transition-all duration-500">
                {/* Animated Background Grid */}
                {/* Removed animated grid and spotlight effect */}

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* Header with Icon & Links */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="relative p-4 bg-white rounded-xl border border-white/10 group-hover:scale-110 transition-all duration-300 flex items-center justify-center" style={{width:56, height:56}}>
                            {/* Colorful brand icons */}
                            {project.icon === FaDocker && (
                                <FaDocker className="text-[#2496ED] text-3xl" />
                            )}
                            {project.icon === FaCode && (
                                <FaCode className="text-[#61DAFB] text-3xl" />
                            )}
                            {project.icon === SiNginx && (
                                <SiNginx className="text-[#009639] text-3xl" />
                            )}
                            {project.icon === FaGithub && (
                                <FaGithub className="text-[#181717] text-3xl" />
                            )}
                            {/* fallback for any other icon */}
                            {![FaDocker, FaCode, SiNginx, FaGithub].includes(project.icon) && (
                                <project.icon className="text-obsidian-200 text-2xl" />
                            )}
                            {project.featured && (
                                <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1">
                                    <FaStar className="text-white text-xs" />
                                </div>
                            )}
                        </div>
                        <div className="flex gap-3">
                            {project.github !== "#" && (
                                <motion.a 
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 bg-obsidian-900/80 border border-obsidian-800 rounded-lg text-obsidian-400 hover:text-white hover:border-electric-blue/50 transition-all"
                                >
                                    <FaGithub size={18} />
                                </motion.a>
                            )}
                            {project.link !== "#" && (
                                <motion.a 
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 bg-obsidian-900/80 border border-obsidian-800 rounded-lg text-obsidian-400 hover:text-white hover:border-electric-blue/50 transition-all"
                                >
                                    <FaExternalLinkAlt size={16} />
                                </motion.a>
                            )}
                        </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-3 transition-all duration-300">
                        {project.title}
                    </h4>

                    {/* Description */}
                    <p className="text-obsidian-300 mb-6 leading-relaxed text-sm flex-grow">
                        {project.description}
                    </p>

                    {/* Stats (if available) */}
                    {project.stats && (
                        <div className="flex gap-4 mb-6 pb-6 border-b border-obsidian-800">
                            {project.stats.stars && (
                                <div className="flex items-center gap-1.5">
                                    <FaStar className="text-yellow-500 text-xs" />
                                    <span className="text-xs font-bold text-obsidian-300">{project.stats.stars}</span>
                                </div>
                            )}
                            {project.stats.users && (
                                <div className="flex items-center gap-1.5">
                                    <FaRocket className="text-electric-cyan text-xs" />
                                    <span className="text-xs font-bold text-obsidian-300">{project.stats.users}</span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t: string, i: number) => (
                            <motion.span 
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 bg-obsidian-900/80 text-obsidian-200 rounded-lg border border-obsidian-800 transition-all cursor-default"
                            >
                                {t}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Corner Decoration */}
                {/* Removed colorful corner decoration */}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Auto Docker",
            description: "VS Code Extension to auto-detect project types & generate optimized Dockerfiles with intelligent configuration suggestions.",
            tech: ["TypeScript", "Docker", "VS Code API"],
            icon: FaDocker,
            link: "https://marketplace.visualstudio.com/items?itemName=ShinjanSarkar.auto-docker-extension&ssr=false#review-details",
            github: "https://github.com/shinjansarkar/auto-docker",
            featured: true,
            stats: { stars: "12", users: "500+" }
        },
        {
            title: "RCC Coverage",
            description: "Event resource portal for RCC Coverage Team with role-based access control and real-time collaboration features.",
            tech: ["React", "Supabase", "Vercel"],
            icon: FaCode,
            link: "https://rcciit-coverage.vercel.app/",
            github: "https://github.com/shinjansarkar",
        },
        {
            title: "MERN Docker Blog",
            description: "Containerized MERN stack blog with Nginx reverse proxy, multi-stage builds, and optimized deployment pipeline.",
            tech: ["Docker", "Nginx", "AWS EC2", "MongoDB"],
            icon: SiNginx,
            link: "#",
            github: "https://github.com/shinjansarkar",
        },
        {
            title: "Collab Notepad",
            description: "Real-time collaborative editor with WebSockets, Redis pub/sub, and automated CI/CD deployment pipelines.",
            tech: ["GitLab CI", "Redis", "WebSocket", "Nginx"],
            icon: FaGithub,
            link: "https://collaborative-notepad-1.onrender.com/",
            github: "https://github.com/shinjansarkar",
        },
    ];

    return (
        <section id="projects" className="relative py-16 md:py-32 bg-obsidian-950 overflow-hidden">
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
                        className="text-xs font-bold tracking-[0.2em] text-electric-blue uppercase mb-4"
                    >
                        // Selected Works
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4"
                    >
                        Engineering <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-cyan">Excellence.</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-obsidian-300 text-sm md:text-base"
                    >
                        Building solutions that bridge development and operations
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* View More CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <a 
                        href="https://github.com/shinjansarkar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-cyan text-white font-bold text-sm tracking-wide uppercase rounded-full hover:shadow-lg hover:shadow-electric-blue/50 transition-all duration-300 group"
                    >
                        <FaGithub className="text-xl group-hover:rotate-12 transition-transform" />
                        <span>View All Projects</span>
                        <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
