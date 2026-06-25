"use client";

import { motion } from "framer-motion";

const springUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { delay, type: "spring", stiffness: 200, damping: 20 },
});

const Hero = () => {
    return (
        <motion.div
            {...springUp(0.1)}
            className="py-16 md:py-24 flex flex-col justify-center w-full min-h-[70vh] relative group"
        >
            <div className="relative z-10">
                <motion.div
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="inline-flex items-center gap-2 mb-8 cursor-default"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
                    </span>
                    <span className="text-xs font-bold text-rose-500 tracking-wider uppercase">
                        Freelancing & breaking pipelines
                    </span>
                </motion.div>

                <h1 className="font-display font-bold text-zinc-100 leading-[1.05] tracking-tight text-5xl sm:text-6xl md:text-7xl mb-6">
                    I write code. <br /> Sometimes it even <span className="text-rose-500">deploys.</span>
                </h1>

                <p className="text-zinc-400 font-body leading-relaxed text-lg md:text-xl max-w-2xl mb-10">
                    Hi, I'm{" "}
                    <span className="relative inline-block group">
                        <strong className="font-display font-bold text-2xl md:text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600 cursor-default drop-shadow-[0_0_10px_rgba(244,63,94,0.2)]">
                            Shinjan Sarkar
                        </strong>
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-rose-400 to-rose-600 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </span>
                    . I babysit servers and gently remind developers that "it works on my machine" isn't a valid deployment strategy. I also freelance to build websites for clients who "definitely know what they want".
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                    <motion.a
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="font-bold text-rose-500 hover:text-rose-400 transition-colors uppercase tracking-widest text-sm flex items-center gap-2"
                    >
                        See my 400+ download flex &rarr;
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://medium.com/@shinjansarkar7"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-zinc-400 hover:text-rose-400 transition-colors text-sm flex items-center gap-2"
                    >
                        Read my Rants (Medium Blogs)
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
