'use client';

import { motion } from 'framer-motion';
import { FaDocker, FaNodeJs, FaAws, FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiNginx, SiGitlab } from 'react-icons/si';

const Projects = () => {
    const projects = [
        {
            title: "Auto Docker",
            description: "AI-powered VS Code extension that automatically generates Dockerfiles with Nginx support for frontend, backend, and full-stack applications. Streamlines containerization workflow for developers.",
            tech: ["VS Code Extension", "AI", "Docker", "Nginx", "TypeScript"],
            icon: FaCode,
            color: "neon-blue",
            link: "#",
            github: "#"
        },
        {
            title: "Dockerized Node.js To-Do App",
            description: "Developed a lightweight and portable to-do application using Node.js, containerized with Docker for consistency across environments. Published optimized Docker image on Docker Hub, enabling seamless deployment and enhanced scalability.",
            tech: ["Docker", "Node.js", "Docker Hub", "CI/CD", "AWS", "EC2"],
            icon: FaDocker,
            color: "neon-purple",
            link: "#",
            github: "#"
        },
        {
            title: "Collaborative Notepad",
            description: "Real-time collaborative notepad with WebSocket-based synchronization enabling seamless multi-user editing. Deployed using Docker and Nginx with GitLab CI/CD for automated, scalable deployments.",
            tech: ["Docker", "GitLab CI/CD", "Nginx", "WebSocket", "Real-time"],
            icon: SiNginx,
            color: "neon-green",
            link: "https://collaborative-notepad-1.onrender.com/",
            github: "#"
        },
        {
            title: "RCC Coverage Website",
            description: "Built the official website for the Coverage team of RCC Institute of Information Technology in collaboration with a college senior. Modern, responsive web application deployed on Vercel.",
            tech: ["Next.js", "React", "Vercel", "Web Development"],
            icon: FaGithub,
            color: "neon-pink",
            link: "https://rcciit-coverage.vercel.app/",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-neon-blue text-neon-glow">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full neon-glow-blue" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-6 rounded-xl border border-gray-800 hover:border-neon-blue transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-lg bg-${project.color}/10 flex items-center justify-center mb-4 text-${project.color} group-hover:scale-110 transition-transform`}>
                                    <project.icon size={32} />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 text-xs rounded-full bg-${project.color}/10 text-${project.color} border border-${project.color}/20`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    {project.link && project.link !== "#" && (
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 text-sm text-neon-blue hover:text-neon-green transition-colors"
                                        >
                                            <FaExternalLinkAlt size={14} />
                                            Live Demo
                                        </motion.a>
                                    )}
                                    {project.github && project.github !== "#" && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            <FaGithub size={14} />
                                            Source Code
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
