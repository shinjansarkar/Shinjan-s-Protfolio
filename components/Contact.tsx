"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const springUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { delay, type: "spring", stiffness: 200, damping: 20 },
});

const Contact = () => {
    const [hoverCount, setHoverCount] = useState(0);

    const buttonTexts = [
        "Send an SOS",
        "Wait, are you a recruiter?",
        "Do you have a JD?",
        "Is the salary listed?",
        "Fine, click me."
    ];

    const getButtonText = () => {
        return buttonTexts[Math.min(hoverCount, buttonTexts.length - 1)];
    };

    return (
        <motion.div 
            {...springUp(0.7)}
            className="py-16 md:py-32 flex flex-col justify-center items-center text-center w-full relative group mt-10"
        >
            <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-5xl md:text-7xl font-display font-bold text-zinc-100 mb-6 tracking-tight">
                    Enough scrolling. <br />
                    <span className="text-rose-500">Let's talk.</span>
                </h2>
                <p className="text-xl text-zinc-400 max-w-lg mb-16 leading-relaxed">
                    I'm currently open for new opportunities, freelance projects, or just arguing about Docker vs Kubernetes.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <motion.a 
                        onHoverStart={() => setHoverCount(prev => prev + 1)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:shinjansarkar@example.com" 
                        className="text-lg font-bold text-rose-500 hover:text-rose-400 uppercase tracking-widest transition-colors flex items-center justify-center min-w-[220px]"
                    >
                        <motion.span 
                            key={hoverCount}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            {getButtonText()}
                        </motion.span>
                    </motion.a>
                    
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.linkedin.com/in/shinjansarkar/" 
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-bold text-zinc-500 hover:text-rose-500 uppercase tracking-widest transition-colors flex items-center gap-2"
                    >
                        <FaLinkedin /> LinkedIn
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
