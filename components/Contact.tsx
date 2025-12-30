"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaEnvelope } from "react-icons/fa";
import Magnetic from "./Magnetic";

const Contact = () => {
    return (
        <section id="contact" className="py-40 bg-obsidian-950 flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="w-full px-6">
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
                    className="text-4xl sm:text-6xl md:text-9xl font-black text-white tracking-tighter mb-12"
                >
                    LET'S WORK <br className="hidden md:block" /> TOGETHER.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Magnetic>
                        <a
                            href="mailto:shinjansarkar268@gmail.com"
                            className="inline-block px-12 py-5 bg-white text-obsidian-950 text-xl font-bold tracking-widest uppercase hover:bg-electric-cyan hover:scale-105 transition-all duration-300 rounded-full"
                        >
                            Say Hello
                        </a>
                    </Magnetic>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 flex items-center justify-center gap-8"
                >
                    <Magnetic>
                        <a
                            href="mailto:shinjansarkar268@gmail.com"
                            className="flex items-center gap-2 text-obsidian-300 hover:text-white transition-colors"
                        >
                            <FaEnvelope size={20} />
                            <span className="text-sm">shinjansarkar268@gmail.com</span>
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a
                            href="https://x.com/shinjan_sarkar"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-obsidian-300 hover:text-white transition-colors"
                        >
                            <FaTwitter size={20} />
                            <span className="text-sm">@shinjan_sarkar</span>
                        </a>
                    </Magnetic>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
