"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const sarcasticMessages = [
    "Centering the div...",
    "Ignoring TypeScript errors...",
    "Downloading more RAM...",
    "Googling how to exit Vim...",
    "Compiling spaghetti code...",
    "Blaming the compiler...",
    "Convincing the server...",
    "Almost there... probably."
];

const Loading = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const messageInterval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % sarcasticMessages.length);
        }, 600);

        const timer = setTimeout(() => {
            setIsFading(true);
            setTimeout(() => setIsVisible(false), 500);
        }, 3000);

        return () => {
            clearInterval(messageInterval);
            clearTimeout(timer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950 transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
        >
            <div className="flex flex-col items-center gap-12 w-full max-w-sm px-8">
                
                {/* Abstract Minimalist Loader */}
                <div className="relative flex items-center justify-center w-16 h-16">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-zinc-800"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-rose-500/30 scale-75"
                    />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 border border-zinc-700 scale-125"
                    />
                    <div className="text-rose-500 font-mono text-[9px] font-bold tracking-widest animate-pulse">
                        SYS
                    </div>
                </div>

                <div className="flex flex-col w-full gap-4">
                    <div className="flex justify-between items-end text-zinc-500 font-mono text-xs uppercase tracking-widest border-b border-zinc-800 pb-2">
                        <span>Terminal.Boot</span>
                        <span className="text-rose-500 animate-pulse">_</span>
                    </div>

                    <div className="h-6 flex items-center justify-start text-zinc-300 font-mono text-sm overflow-hidden">
                        <span className="text-rose-500 mr-3">{">"}</span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={messageIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.15 }}
                                className="block truncate"
                            >
                                {sarcasticMessages[messageIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    {/* Minimal Progress Bar */}
                    <div className="w-full h-[1px] bg-zinc-900 overflow-hidden mt-2 relative">
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3, ease: "circOut" }}
                            className="absolute top-0 bottom-0 left-0 bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
