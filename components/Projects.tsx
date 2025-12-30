"use client";

import { motion } from "framer-motion";
import { FaDocker, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { SiNginx } from "react-icons/si";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-full bg-obsidian-950 border border-obsidian-800 p-8 rounded-2xl overflow-hidden hover:border-electric-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
        >
            {/* Simple CSS Spotlight via gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="p-3 bg-obsidian-900/50 backdrop-blur-md rounded-lg text-white border border-white/5">
                    <project.icon size={24} />
                </div>
                <div className="flex gap-4">
                    {project.github !== "#" && (
                        <a href={project.github} className="text-obsidian-400 hover:text-white transition-colors">
                            <FaGithub size={20} />
                        </a>
                    )}
                    {project.link !== "#" && (
                        <a href={project.link} className="text-obsidian-400 hover:text-white transition-colors">
                            <FaExternalLinkAlt size={18} />
                        </a>
                    )}
                </div>
            </div>

            <h4 className="relative z-10 text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                {project.title}
            </h4>
            <p className="relative z-10 text-obsidian-300 mb-6 line-clamp-2 leading-relaxed text-sm">
                {project.description}
            </p>

            <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t: string, i: number) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-obsidian-900 text-obsidian-200 rounded-full border border-obsidian-800">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Auto Docker",
            description: "VS Code Extension to auto-detect project types & generate optimized Dockerfiles.",
            tech: ["Typescript", "Docker", "Automation"],
            icon: FaDocker,
            link: "https://marketplace.visualstudio.com/items?itemName=ShinjanSarkar.auto-docker-extension&ssr=false#review-details",
            github: "https://github.com/shinjansarkar/auto-docker", // Assuming link pattern or placeholder
        },
        {
            title: "RCC Coverage",
            description: "Event resource portal for RCC Coverage Team with role-based access.",
            tech: ["React", "Supabase", "Vercel"],
            icon: FaCode,
            link: "https://rcciit-coverage.vercel.app/",
            github: "https://github.com/shinjansarkar",
        },
        {
            title: "MERN Docker Blog",
            description: "Containerized MERN blog with Nginx reverse proxy and multi-stage builds.",
            tech: ["Docker", "Nginx", "EC2"],
            icon: SiNginx,
            link: "#",
            github: "https://github.com/shinjansarkar",
        },
        {
            title: "Collab Notepad",
            description: "Real-time collaborative editor with WebSockets and CI/CD pipelines.",
            tech: ["GitLab CI", "Redis", "Nginx"],
            icon: FaGithub,
            link: "https://collaborative-notepad-1.onrender.com/",
            github: "https://github.com/shinjansarkar",
        },
    ];

    return (
        <section id="projects" className="relative py-32 bg-obsidian-950">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-20">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-electric-blue uppercase mb-4">
                        // Selected Works
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        Engineering <br /> <span className="text-obsidian-500">Excellence.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
