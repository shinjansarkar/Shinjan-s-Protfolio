"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaEnvelope } from "react-icons/fa";
import Magnetic from "./Magnetic";

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-40 bg-obsidian-950 flex flex-col items-center justify-center text-center overflow-hidden relative">
            {/* Subtle Light Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-obsidian-900/10 to-white/0 pointer-events-none z-0" />
            <div className="w-full px-4 md:px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-electric-blue font-bold tracking-widest uppercase mb-8"
                >
                    What's Next?
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter mb-8 md:mb-12"
                >
                    LET'S WORK <br className="hidden sm:block" /> TOGETHER.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Magnetic>
                        <a
                            href="mailto:shinjansarkar268@gmail.com"
                            className="inline-block px-8 sm:px-12 py-3 sm:py-5 bg-white text-obsidian-950 text-base sm:text-xl font-bold tracking-wide sm:tracking-widest uppercase hover:bg-electric-cyan hover:scale-105 transition-all duration-300 rounded-full"
                        >
                            Say Hello
                        </a>
                    </Magnetic>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
