"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCode, FaServer, FaDocker, FaAws } from "react-icons/fa";
import { SiGitlab, SiTerraform, SiLinux } from "react-icons/si";
import Image from "next/image";

const Experience = () => {
    const experiences = [
        {
            role: "Summer Intern (DevOps)",
            company: "Geogo Techsolution",
            period: "March 2025 – June 2025",
                duration: "3 months",
            description: "Gained hands-on experience in Cloud and DevOps practices including CI/CD pipelines, Docker, AWS, and Terraform while working on real-world deployment workflows.",
            highlights: [
                "Implemented CI/CD pipelines reducing deployment time by 40%",
                "Containerized 5+ applications using Docker",
                "Managed AWS infrastructure with Terraform IaC",
            ],
            technologies: ["Docker", "AWS", "Terraform", "CI/CD", "GitLab"],
            color: "from-obsidian-700 to-obsidian-900",
            bgGradient: "from-obsidian-800/10 to-obsidian-900/10",
            icon: FaAws,
            logo: "/project-logos/geogo.png",
        },
        {
            role: "Summer Intern (DevOps)",
            company: "Indian Institute of Internship",
            period: "June 2024 – July 2024",
                duration: "1 month",
            description: "Learned and applied Linux, Shell scripting, and Docker while completing hands-on tasks and project simulations.",
            highlights: [
                "Completed 20+ hands-on DevOps projects",
                "Automated system tasks with Bash scripts",
                "Built and deployed containerized applications",
            ],
            technologies: ["Linux", "Bash", "Docker", "Shell Scripting"],
            color: "from-obsidian-700 to-obsidian-900",
            bgGradient: "from-obsidian-800/10 to-obsidian-900/10",
            icon: SiLinux,
            logo: "/project-logos/iii.png",
        },
    ];

    return (
        <section id="experience" className="relative py-16 md:py-32 bg-obsidian-950 overflow-hidden">
            {/* Subtle Light Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-obsidian-900/10 to-white/0 pointer-events-none" />
            {/* Background Elements */}
            {/* Remove extra dark overlays, keep only subtle light gradient above */}
            
            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-[0.2em] text-obsidian-400 uppercase mb-4"
                    >
                        // Professional Journey
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-cyan">Work Experience</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-obsidian-300 text-sm md:text-base"
                    >
                        Building expertise through real-world DevOps implementations
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-obsidian-800" />

                    {/* Experience Cards */}
                    <div className="space-y-8 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="relative group"
                            >
                                {/* Timeline Dot */}
                                <div className="hidden md:flex absolute left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-obsidian-700 border-4 border-obsidian-950 group-hover:scale-125 transition-transform duration-300 z-10 shadow-lg shadow-obsidian-800/50">
                                    <div className="absolute inset-0 rounded-full bg-obsidian-500 animate-ping opacity-10" />
                                </div>

                                {/* Card */}
                                <div className="md:ml-24 relative">
                                    <div className={`glass-panel rounded-2xl p-6 md:p-8 border-2 border-obsidian-800 hover:border-opacity-50 transition-all duration-500 overflow-hidden group-hover:shadow-2xl`}>
                                        
                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                                <div className="flex-1">
                                                    {/* Company & Icon */}
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className={`p-3 rounded-xl bg-white border border-white/10 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`} style={{width:40, height:40}}>
                                                            {exp.logo && exp.company === "Geogo Techsolution" ? (
                                                                <Image src={exp.logo} alt="Geogo Logo" width={32} height={32} className="object-contain" />
                                                            ) : exp.logo && exp.company === "Indian Institute of Internship" ? (
                                                                <Image src={exp.logo} alt="III Logo" width={32} height={32} className="object-contain" />
                                                            ) : (
                                                                <exp.icon className={`text-xl text-obsidian-200`} />
                                                            )}
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xl md:text-2xl font-bold text-white transition-all duration-300">
                                                                {exp.role}
                                                            </h4>
                                                            <div className="flex items-center gap-2 text-obsidian-300 text-sm mt-1">
                                                                <FaBuilding className="text-xs" />
                                                                <span className="font-medium">{exp.company}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-obsidian-300 leading-relaxed mb-6">
                                                        {exp.description}
                                                    </p>

                                                    {/* Highlights */}
                                                    <div className="space-y-2 mb-6">
                                                        {exp.highlights.map((highlight, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: index * 0.2 + i * 0.1 }}
                                                                className="flex items-start gap-3 group/item"
                                                            >
                                                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-obsidian-600 group-hover/item:scale-150 transition-transform`} />
                                                                <span className="text-sm text-obsidian-400 group-hover/item:text-obsidian-200 transition-colors">
                                                                    {highlight}
                                                                </span>
                                                            </motion.div>
                                                        ))}
                                                    </div>

                                                    {/* Technologies */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.technologies.map((tech, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-3 py-1 text-xs font-medium bg-obsidian-900/50 border border-obsidian-800 rounded-full text-obsidian-300 hover:border-electric-blue/50 hover:text-white transition-all"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Date Badge */}
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex items-center gap-2 px-4 py-2 bg-obsidian-900/80 border border-obsidian-800 rounded-lg whitespace-nowrap">
                                                            <FaCalendarAlt className="text-obsidian-400 text-xs" />
                                                            <span className="text-xs font-bold text-obsidian-200">
                                                                {exp.period}
                                                            </span>
                                                        </div>
                                                        <div className="px-4 py-2 bg-obsidian-900/80 border border-obsidian-800 rounded-lg text-center">
                                                            <span className="text-xs font-bold text-obsidian-200">
                                                                {exp.duration}
                                                            </span>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-obsidian-800/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className={`absolute top-0 right-0 w-2 h-full bg-obsidian-800 opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 glass-panel rounded-full border border-obsidian-800">
                        <FaBriefcase className="text-electric-cyan" />
                        <span className="text-sm text-obsidian-300">
                            Open to new opportunities in DevOps & Cloud Engineering
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
