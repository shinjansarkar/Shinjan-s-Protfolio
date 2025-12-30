"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loading after 2 seconds or when page is fully loaded
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        const handleLoad = () => {
            setIsLoading(false);
        };

        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            clearTimeout(timer);
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-obsidian-950"
        >
            <div className="flex flex-col items-center gap-8">
                {/* Animated Logo/Spinner */}
                <div className="relative">
                    {/* Outer Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 rounded-full border-4 border-obsidian-800 border-t-electric-blue"
                    />
                    
                    {/* Inner Ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-3 rounded-full border-4 border-obsidian-800 border-t-electric-cyan"
                    />
                    
                    {/* Center Dot */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-gradient-to-r from-electric-blue to-electric-cyan"
                    />
                </div>

                {/* Loading Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-2"
                >
                    <p className="text-white font-bold tracking-widest uppercase text-sm">
                        Loading
                    </p>
                    <motion.div
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-1 w-32 bg-obsidian-800 rounded-full overflow-hidden"
                    >
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="h-full w-1/3 bg-gradient-to-r from-electric-blue to-electric-cyan"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loading;
