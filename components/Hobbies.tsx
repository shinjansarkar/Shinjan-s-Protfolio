'use client';

import { motion } from 'framer-motion';
import { FaGamepad, FaMusic, FaPlane, FaCamera } from 'react-icons/fa';

const Hobbies = () => {
    const hobbies = [
        {
            icon: FaGamepad,
            title: "Football",
            desc: "Passionate about playing football and following the sport.",
            color: "text-neon-blue",
            border: "hover:border-neon-blue",
            glow: "group-hover:shadow-[0_0_20px_rgba(0,234,255,0.3)]"
        },
        {
            icon: FaCamera,
            title: "Photography",
            desc: "Capturing moments and exploring creative perspectives.",
            color: "text-neon-pink",
            border: "hover:border-neon-pink",
            glow: "group-hover:shadow-[0_0_20px_rgba(255,0,110,0.3)]"
        }
    ];

    return (
        <section id="hobbies" className="relative py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-white">Hobbies</span>
                    </h2>
                    <div className="w-24 h-1 bg-white mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`glass p-6 rounded-xl border border-gray-800 transition-all duration-300 group ${hobby.border} ${hobby.glow}`}
                        >
                            <div className={`text-4xl mb-4 ${hobby.color} transition-transform group-hover:scale-110 duration-300`}>
                                <hobby.icon />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{hobby.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {hobby.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
