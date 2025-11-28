'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            title: "Summer Intern / Trainee (DevOps)",
            company: "Geogo Techsolution",
            period: "March 2025 – June 2025",
            description: "Completed training and internship with hands-on experience in Cloud and DevOps practices. Worked on real-world projects involving CI/CD pipelines, Docker, AWS, and Terraform, enhancing both technical skills and understanding of modern deployment workflows.",
            tech: ["CI/CD", "Docker", "AWS", "Terraform", "DevOps"]
        },
        {
            title: "Summer Intern / Trainee (DevOps)",
            company: "Indian Institute of Internship",
            period: "June 2024 – July 2024",
            description: "Learned and applied basics of DevOps, including Linux, Shell scripting, and Docker. Applied concepts through hands-on projects and real-world scenarios.",
            tech: ["Linux", "Shell Scripting", "Docker", "DevOps Basics"]
        }
    ];

    return (
        <section id="experience" className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="text-neon-purple text-neon-glow">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-neon-purple mx-auto rounded-full neon-glow-purple" />
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800">
                        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple via-neon-blue to-neon-green opacity-50 blur-sm" />
                    </div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex items-center justify-between mb-12 md:mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Spacer for timeline alignment */}
                            <div className="hidden md:block w-5/12" />

                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-dark-bg border-4 border-neon-purple z-10 shadow-[0_0_15px_rgba(155,92,255,0.5)]">
                                <div className="w-full h-full rounded-full bg-neon-purple animate-ping opacity-20" />
                            </div>

                            {/* Content Card */}
                            <div className="ml-12 md:ml-0 w-full md:w-5/12">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="glass p-6 rounded-xl border border-gray-800 hover:border-neon-purple transition-all relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="flex items-center gap-2 text-neon-purple mb-2">
                                        <FaBriefcase />
                                        <span className="font-bold">{exp.company}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>

                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                        <FaCalendar />
                                        <span>{exp.period}</span>
                                    </div>

                                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
