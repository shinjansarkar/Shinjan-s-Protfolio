"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
});

const About = () => {
    return (
        <section id="about" className="relative pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                
                {/* Section Header */}
                <motion.div {...fadeUp(0)} className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-100 mb-4 tracking-tight">
                        About <span className="text-sky-400">Me.</span>
                    </h2>
                    <p className="text-zinc-500 font-body max-w-xl mx-auto md:mx-0">
                        Most engineers ship features. I ship the platform that makes shipping features possible.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* Main Intro Card */}
                    <motion.div {...fadeUp(0.1)} className="md:col-span-8 skiper-card p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                        
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-zinc-100 mb-4 font-display">
                                The Backbone of Production
                            </h3>
                            <div className="space-y-4 text-zinc-400 font-body text-sm leading-relaxed">
                                <p>
                                    As the <strong className="text-zinc-200 font-medium">Founding Engineer at Bechohub</strong>, I own the full DevOps lifecycle. From designing containerization strategies to cloud architecture, I build systems that are resilient, scalable, and secure.
                                </p>
                                <p>
                                    Previously, I optimized CI/CD pipelines at Geogo Techsolution, cutting deployment times by 40%. I also created <strong className="text-zinc-200 font-medium">Auto Docker</strong>, a VS Code extension currently saving hours of boilerplate setup for 500+ active developers.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats/Highlight Card */}
                    <motion.div {...fadeUp(0.2)} className="md:col-span-4 skiper-card p-8 md:p-10 flex flex-col justify-center">
                        <div className="mb-6">
                            <div className="text-4xl font-bold text-zinc-100 font-display mb-1">500+</div>
                            <div className="text-xs font-medium text-sky-400 uppercase tracking-wider">Devs using my tools</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-zinc-100 font-display mb-1">40%</div>
                            <div className="text-xs font-medium text-sky-400 uppercase tracking-wider">Deploy time reduced</div>
                        </div>
                    </motion.div>

                    {/* Terminal/Code Card */}
                    <motion.div {...fadeUp(0.3)} className="md:col-span-12 skiper-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 w-full bg-zinc-950/50 rounded-2xl border border-white/5 p-4 md:p-6 font-mono text-xs md:text-sm text-zinc-300">
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <span className="ml-2 text-zinc-600">server-status.sh</span>
                            </div>
                            <p className="mb-2"><span className="text-sky-500">➜</span> <span className="text-zinc-500">~</span> ./check-systems</p>
                            <p className="text-emerald-400/90 mb-1">✔ Kubernetes Cluster: Healthy (3/3 nodes)</p>
                            <p className="text-emerald-400/90 mb-1">✔ CI/CD Pipelines: Passing</p>
                            <p className="text-emerald-400/90 mb-4">✔ Production Database: Synced</p>
                            <p><span className="text-sky-500">➜</span> <span className="text-zinc-500">~</span> <span className="animate-pulse">_</span></p>
                        </div>
                        
                        <div className="md:w-1/3 text-center md:text-left">
                            <h4 className="text-lg font-bold text-zinc-100 mb-2 font-display">System Status</h4>
                            <p className="text-sm text-zinc-400 font-body">Everything automated. Everything monitored. Sleep better at night knowing the infrastructure handles the rest.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
