"use client";

import { motion } from "framer-motion";

const springUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { delay, type: "spring", stiffness: 200, damping: 20 },
});

const experiences = [
    {
        role: "Founding Engineer",
        company: "Bechohub",
        logo: "/project-logos/bechohub-logo.jpg",
        date: "Present",
        description: "Doing literally everything: frontend, backend, Docker, pipelines, and probably making coffee."
    },
    {
        role: "DevOps Intern",
        company: "Geogo Techsolution",
        logo: "/project-logos/geogo.png",
        date: "March 2025 - Feb 2026",
        description: "Touching real AWS accounts without breaking them (mostly)."
    },
    {
        role: "DevOps Trainee",
        company: "Indian Institute of Internship",
        logo: "/project-logos/iii.png",
        date: "June 2024 - July 2024",
        description: "Learned Docker by breaking containers until they worked."
    },
    {
        role: "Freelance Developer",
        company: "Self-Employed",
        date: "2023 - Present",
        description: "Building websites and products for clients who definitely know what they want."
    }
];

const Experience = () => {
    return (
        <motion.div
            {...springUp(0.3)}
            className="py-16 flex flex-col justify-start w-full relative group"
        >
            <div className="absolute top-0 right-0 w-full h-1/2 bg-orange-600/10 blur-[100px] translate-x-1/4 -translate-y-1/4 group-hover:bg-orange-600/20 transition-colors duration-700" />

            <div className="relative z-10 h-full flex flex-col">
                <h2 className="text-3xl font-display font-bold text-zinc-100 mb-2 tracking-tight">
                    Places that <span className="text-orange-500">Tolerated</span> Me
                </h2>
                <p className="text-zinc-500 font-body text-sm mb-8">
                    (I haven't been fired yet)
                </p>

                <div className="flex flex-col flex-grow relative mt-12">
                    {/* The glowing backbone line */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-rose-500 via-rose-500/20 to-transparent" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="relative pl-12 pb-16 group/item"
                        >
                            {/* Glowing dot */}
                            <div className="absolute w-6 h-6 bg-zinc-950 border-[3px] border-rose-500 rounded-full -left-[1px] top-1 group-hover/item:shadow-[0_0_20px_rgba(244,63,94,0.6)] group-hover/item:bg-rose-500 transition-all duration-300" />

                            <h3 className="text-3xl font-display font-bold text-zinc-100 group-hover/item:text-rose-400 transition-colors mb-2">{exp.role}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm font-medium mb-4">
                                <div className="flex items-center gap-2 text-rose-500">
                                    {exp.logo && <img src={exp.logo} alt={exp.company} className="w-5 h-5 rounded-full object-cover grayscale opacity-70 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all" />}
                                    <span className="uppercase tracking-widest">{exp.company}</span>
                                </div>
                                <span className="text-zinc-600 font-mono tracking-wider text-xs">{exp.date}</span>
                            </div>
                            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;
