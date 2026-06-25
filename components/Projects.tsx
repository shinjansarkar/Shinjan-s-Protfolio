"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Auto Docker",
        description: "A VS code extension with 400+ downloads. Yes, 400 people trust me to generate their Dockerfiles.",
        tags: ["TypeScript", "Docker", "VS Code API"],
        link: "https://shinjansarkar.github.io/Auto-Docker-landing-page/",
        github: "https://github.com/shinjansarkar/Auto-Docker.git",
        number: "01"
    },
    {
        title: "QuizFlow",
        description: "Mentored someone to build this secure test platform. Basically, I carried the project emotionally.",
        tags: ["Spring Boot", "React", "Supabase"],
        github: "https://github.com/shinjansarkar/Quiz-app.git",
        number: "02"
    },
    {
        title: "RCC Coverage",
        description: "A real portal for managing events. Actually useful, surprisingly.",
        tags: ["React", "Supabase", "Vercel"],
        link: "https://rcciit-coverage.vercel.app/",
        github: "https://github.com/shinjansarkar/rcciit-coverage.git",
        number: "03"
    },
    {
        title: "MERN Stack Blog",
        description: "Because why have one monolith when you can containerize collaborative notepads and blogs?",
        tags: ["Docker", "Nginx", "GitLab CI"],
        github: "https://github.com/shinjansarkar/wanderlust.git",
        number: "04"
    }
];

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default first item expanded

    return (
        <div id="projects" className="py-24 relative w-full overflow-hidden">
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-0">
                <div className="mb-12 border-b border-zinc-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-zinc-100 tracking-tighter">
                            Stuff I <span className="text-rose-500 italic font-serif">Built</span>
                        </h2>
                        <p className="text-zinc-500 font-mono text-sm mt-4 uppercase tracking-widest">
                            (I swear I'll finish them next weekend)
                        </p>
                    </div>
                </div>

                {/* Accordion Layout */}
                <div className="flex flex-col md:flex-row h-[700px] md:h-[500px] gap-4 w-full">
                    {projects.map((project, i) => {
                        const isHovered = hoveredIndex === i;
                        return (
                            <motion.div
                                key={i}
                                onHoverStart={() => setHoveredIndex(i)}
                                onClick={() => setHoveredIndex(i)}
                                animate={{
                                    flex: isHovered ? 4 : 1
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                className={`relative overflow-hidden rounded-[2rem] cursor-pointer group flex flex-col justify-end p-6 md:p-8 border ${isHovered ? 'bg-zinc-900 border-rose-500/50' : 'bg-zinc-950 border-zinc-800'} hover:border-rose-500/80 transition-colors`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                                
                                {/* Background typography watermark */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-bold text-zinc-800/30 whitespace-nowrap z-0 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100 text-rose-500/10' : 'opacity-0'}`}>
                                    {project.number}
                                </div>

                                <div className="relative z-20 flex flex-col h-full justify-end">
                                    <div className="flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-end gap-4 mb-4">
                                        <span className="text-rose-500 font-mono text-3xl font-bold">{project.number}.</span>
                                        <h3 className={`font-display font-bold text-zinc-100 transition-all duration-300 origin-left whitespace-nowrap md:whitespace-normal ${isHovered ? 'text-3xl md:text-5xl opacity-100' : 'text-xl opacity-100 md:-rotate-90 md:-translate-y-20 origin-bottom-left'}`}>
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Expanded Content */}
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ 
                                            opacity: isHovered ? 1 : 0,
                                            height: isHovered ? "auto" : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden flex flex-col gap-6"
                                    >
                                        <p className="text-zinc-300 font-body text-base md:text-lg leading-relaxed max-w-xl">
                                            {project.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-3">
                                            {project.tags.map((tag, j) => (
                                                <span key={j} className="text-[11px] font-mono px-4 py-2 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full font-bold uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-6 mt-2 pt-4 border-t border-zinc-800/50">
                                            <a href={project.github} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                                                <FaGithub size={18} /> Code
                                            </a>
                                            {project.link && (
                                                <a href={project.link} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-rose-500 transition-colors" target="_blank" rel="noreferrer">
                                                    <FaExternalLinkAlt size={16} /> Live
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
