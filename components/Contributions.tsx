"use client";

import { motion } from "framer-motion";
import { FaGithub, FaCodeBranch, FaStar } from "react-icons/fa";

const Contributions = () => {
    const stats = [
        { label: "Total Commits", value: "2,500+", icon: FaGithub },
        { label: "Pull Requests", value: "140+", icon: FaCodeBranch },
        { label: "Stars Earned", value: "350+", icon: FaStar },
    ];

    return (
        <section className="py-32 bg-obsidian-950">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-obsidian-900 divide-y md:divide-y-0 md:divide-x divide-obsidian-900">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="py-12 md:px-12 flex flex-col items-center text-center group"
                        >
                            <stat.icon className="text-3xl text-obsidian-600 mb-6 group-hover:text-electric-blue transition-colors" />
                            <h3 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </h3>
                            <p className="text-sm font-bold text-obsidian-500 uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contributions;
