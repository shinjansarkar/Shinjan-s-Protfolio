'use client';

import { motion } from 'framer-motion';
import { FaDocker, FaGithub, FaStar } from 'react-icons/fa';
import { SiGit } from 'react-icons/si';

const Contributions = () => {
    const contributions = [
        {
            title: "Docker Support for Trackpeek",
            project: "Trackpeek Application",
            description: "Contributed Dockerfiles and Docker Compose setup with multi-stage builds, significantly improving container performance, deployment efficiency, and maintainability for the Trackpeek application.",
            impact: [
                "Implemented multi-stage Docker builds",
                "Optimized container performance",
                "Enhanced deployment efficiency",
                "Improved overall maintainability"
            ],
            tech: ["Docker", "Docker Compose", "Multi-stage Builds", "DevOps"],
            icon: FaDocker,
            color: "neon-blue",
            link: "#"
        }
    ];

    return (
        <section id="contributions" className="relative py-20 bg-dark-card/30 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-neon-purple/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-blue/5 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Open Source <span className="text-neon-purple text-neon-glow">Contributions</span>
                    </h2>
                    <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full neon-glow-purple" />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Contributing to the developer community through open-source projects
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {contributions.map((contribution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass p-8 rounded-2xl border border-gray-800 hover:border-neon-purple transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    {/* Icon */}
                                    <div className="w-20 h-20 rounded-xl bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform flex-shrink-0">
                                        <contribution.icon size={40} />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1">
                                        {/* Project Badge */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <SiGit className="text-neon-green" size={16} />
                                            <span className="text-sm text-neon-green font-medium">
                                                {contribution.project}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                                            {contribution.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 leading-relaxed mb-4">
                                            {contribution.description}
                                        </p>

                                        {/* Impact Points */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-neon-blue mb-3 flex items-center gap-2">
                                                <FaStar size={14} />
                                                Key Contributions
                                            </h4>
                                            <ul className="grid md:grid-cols-2 gap-2">
                                                {contribution.impact.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                        <span className="text-neon-purple mt-1">▸</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {contribution.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Link */}
                                        {contribution.link && contribution.link !== "#" && (
                                            <motion.a
                                                href={contribution.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                className="inline-flex items-center gap-2 text-sm text-neon-purple hover:text-neon-blue transition-colors"
                                            >
                                                <FaGithub size={16} />
                                                View on GitHub
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub Stats Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/shinjansarkar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-purple transition-colors"
                    >
                        <FaGithub size={20} />
                        <span>View more on GitHub</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contributions;
