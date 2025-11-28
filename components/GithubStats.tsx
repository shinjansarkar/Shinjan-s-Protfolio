'use client';

import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from 'react-icons/fa';

const GithubStats = () => {
    return (
        <section id="github" className="relative py-20 bg-dark-card/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
                        <FaGithub className="text-white" />
                        <span>GitHub <span className="text-neon-blue text-neon-glow">Contributions</span></span>
                    </h2>
                    <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full neon-glow-blue" />
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12 items-center">
                    {/* Left Side - 3D Floating Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-64 h-64">
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotateY: [0, 360]
                                }}
                                transition={{
                                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                    rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
                                }}
                                className="w-full h-full flex items-center justify-center"
                            >
                                <FaGithub size={200} className="text-white drop-shadow-[0_0_15px_rgba(0,234,255,0.5)]" />
                            </motion.div>

                            {/* Glowing Rings */}
                            <div className="absolute inset-0 border-2 border-neon-blue/30 rounded-full animate-pulse-slow" />
                            <div className="absolute inset-4 border-2 border-neon-purple/30 rounded-full animate-spin-slow" />
                        </div>
                    </motion.div>

                    {/* Right Side - Calendar & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 glass p-8 rounded-xl border border-gray-800"
                    >
                        <div className="flex flex-col items-center">
                            <GitHubCalendar
                                username="shinjansarkar"
                                colorScheme="dark"
                                theme={{
                                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                                }}
                                fontSize={12}
                                blockSize={12}
                                blockMargin={5}
                            />

                            <div className="mt-8 grid grid-cols-3 gap-8 w-full">
                                {[
                                    { label: "Repositories", value: "45+", color: "text-neon-blue" },
                                    { label: "Commits", value: "2.5k+", color: "text-neon-green" },
                                    { label: "Pull Requests", value: "120+", color: "text-neon-purple" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.1 }}
                                        className="text-center p-4 rounded-lg bg-dark-bg/50 border border-gray-800"
                                    >
                                        <h4 className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</h4>
                                        <p className="text-gray-400 text-sm">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GithubStats;
