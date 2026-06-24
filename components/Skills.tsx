"use client";

import { motion } from "framer-motion";
import { FaDocker, FaAws, FaLinux, FaGithub, FaPython, FaNodeJs, FaTerminal } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPostgresql } from "react-icons/si";

const springUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { delay, type: "spring", stiffness: 200, damping: 20 },
});

const Skills = () => {
    return (
        <motion.div
            {...springUp(0.2)}
            className="py-16 md:py-24 flex flex-col justify-start w-full relative group overflow-hidden"
        >
            <div className="relative z-10 h-full flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-100 mb-2 tracking-tight">
                    Things I Googled <span className="text-rose-500">Successfully</span>
                </h2>
                <p className="text-zinc-500 font-mono text-sm mb-16 uppercase tracking-widest">
                    (And some things I actually understand)
                </p>

                {/* Marquee Container */}
                <div className="flex flex-col gap-8 w-[200vw] -ml-[50vw] rotate-[-2deg] opacity-80 hover:opacity-100 transition-opacity duration-500">

                    {/* Row 1: Left to Right */}
                    <motion.div
                        className="flex gap-8 whitespace-nowrap"
                        animate={{ x: [0, -2000] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    >
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex gap-8 items-center">
                                {["Python", "Node.js", "React", "Docker", "Kubernetes", "AWS", "Terraform"].map((tech, j) => (
                                    <span key={j} className="text-5xl md:text-7xl font-display font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(244, 63, 94, 0.4)' }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 2: Right to Left */}
                    <motion.div
                        className="flex gap-8 whitespace-nowrap"
                        animate={{ x: [-2000, 0] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                    >
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex gap-8 items-center">
                                {["Bash", "Linux", "PostgreSQL", "MongoDB", "Redis", "Jenkins", "Grafana"].map((tech, j) => (
                                    <span key={j} className="text-5xl md:text-7xl font-display font-bold text-rose-500/80">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </motion.div>

                    {/* Row 3: Left to Right */}
                    <motion.div
                        className="flex gap-8 whitespace-nowrap"
                        animate={{ x: [0, -2000] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                    >
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex gap-8 items-center">
                                {["HTML", "CSS", "TypeScript", "Express", "Django", "Flask", "Git"].map((tech, j) => (
                                    <span key={j} className="text-5xl md:text-7xl font-display font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
