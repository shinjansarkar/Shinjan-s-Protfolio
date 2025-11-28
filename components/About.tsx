'use client';

import { motion } from 'framer-motion';
import { FaServer, FaCloud, FaCode, FaTerminal } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">About </span>
                        <span className="text-neon-blue text-neon-glow">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full neon-glow-blue" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Terminal Window */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="glass rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
                            {/* Terminal Header */}
                            <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-gray-800">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-xs text-gray-400 font-mono">user@devops-portfolio:~/about</span>
                            </div>

                            {/* Terminal Content */}
                            <div className="p-6 font-mono text-sm md:text-base bg-dark-bg/90 min-h-[300px]">
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-neon-green">➜</span> <span className="text-neon-blue">~</span> <span className="text-white">whoami</span>
                                        <p className="text-gray-300 mt-2">
                                            BCA Student & DevOps Enthusiast with hands-on experience in Cloud and DevOps practices.
                                            Passionate about CI/CD pipelines, Docker, AWS, and automation.
                                        </p>
                                    </div>

                                    <div>
                                        <span className="text-neon-green">➜</span> <span className="text-neon-blue">~</span> <span className="text-white">cat mission.txt</span>
                                        <p className="text-gray-300 mt-2">
                                            To build and deploy scalable cloud infrastructure using modern DevOps tools
                                            and practices, ensuring seamless CI/CD workflows and efficient deployments.
                                        </p>
                                    </div>

                                    <div>
                                        <span className="text-neon-green">➜</span> <span className="text-neon-blue">~</span> <span className="text-white">ls -la traits/</span>
                                        <ul className="mt-2 space-y-1 text-gray-300">
                                            <li>drwx------ 1 user user <span className="text-neon-purple">Quick_Learner</span></li>
                                            <li>drwx------ 1 user user <span className="text-neon-purple">Hands_On_Practitioner</span></li>
                                            <li>drwx------ 1 user user <span className="text-neon-purple">Team_Collaborator</span></li>
                                        </ul>
                                    </div>

                                    <div className="animate-pulse">
                                        <span className="text-neon-green">➜</span> <span className="text-neon-blue">~</span> <span className="inline-block w-2 h-4 bg-gray-400 ml-1 align-middle" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements behind terminal */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full border border-neon-blue/20 rounded-xl" />
                        <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border border-neon-purple/20 rounded-xl" />
                    </motion.div>

                    {/* Right Side - Info Cards */}
                    <div className="space-y-6">
                        {[
                            { icon: FaServer, title: "Containerization", desc: "Building and deploying applications using Docker and Docker Hub." },
                            { icon: FaCloud, title: "Cloud Platforms", desc: "Working with AWS services including EC2 and S3 for scalable deployments." },
                            { icon: FaCode, title: "CI/CD Pipelines", desc: "Implementing automated deployments with GitLab CI/CD and GitHub integration." },
                            { icon: FaTerminal, title: "Scripting & Automation", desc: "Automating tasks with Bash, Shell, and Python scripting." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="glass p-4 rounded-lg flex items-start gap-4 hover:border-neon-blue transition-all cursor-default"
                            >
                                <div className="p-3 rounded-lg bg-dark-bg border border-gray-800 text-neon-blue">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
