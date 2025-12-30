"use client";

import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [
        {
            role: "Summer Intern (DevOps)",
            company: "Geogo Techsolution",
            period: "March 2025 – June 2025",
            description: "Gained hands-on experience in Cloud and DevOps practices including CI/CD pipelines, Docker, AWS, and Terraform while working on real-world deployment workflows.",
        },
        {
            role: "Summer Intern (DevOps)",
            company: "Indian Institute of Internship",
            period: "June 2024 – July 2024",
            description: "Learned and applied Linux, Shell scripting, and Docker while completing hands-on tasks and project simulations.",
        },
    ];

    return (
        <section id="experience" className="py-32 bg-obsidian-950">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs font-bold tracking-[0.2em] text-obsidian-500 uppercase mb-12"
                >
                    // Experience
                </motion.h2>

                <div className="flex flex-col">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, x: -20 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                            whileHover={{ x: 10, scale: 1.02 }}
                            className="group py-8 md:py-12 border-t border-obsidian-900 transition-colors hover:border-electric-blue/30"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-4 mb-4">
                                <h3 className="text-2xl md:text-4xl font-semibold text-white group-hover:text-electric-blue transition-colors">
                                    {exp.role}
                                </h3>
                                <span className="text-sm font-medium text-obsidian-400 group-hover:text-obsidian-200 uppercase tracking-wider">
                                    {exp.company} &nbsp;—&nbsp; {exp.period}
                                </span>
                            </div>
                            <p className="max-w-2xl text-lg text-obsidian-400 font-light leading-relaxed group-hover:text-obsidian-300 transition-colors">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                    <div className="border-t border-obsidian-900" />
                </div>
            </div>
        </section>
    );
};

export default Experience;
