'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDocker, FaAws, FaGithub, FaJenkins } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiPrometheus, SiGrafana } from 'react-icons/si';
import Image from 'next/image';

const Hero = () => {
    const devopsIcons = [
        { Icon: FaDocker, color: '#2496ED', name: 'Docker', delay: 0 },
        { Icon: SiKubernetes, color: '#326CE5', name: 'Kubernetes', delay: 0.1 },
        { Icon: FaAws, color: '#FF9900', name: 'AWS', delay: 0.2 },
        { Icon: FaGithub, color: '#00eaff', name: 'GitHub', delay: 0.3 },
        { Icon: SiTerraform, color: '#7B42BC', name: 'Terraform', delay: 0.4 },
        { Icon: FaJenkins, color: '#D24939', name: 'Jenkins', delay: 0.5 },
        { Icon: SiPrometheus, color: '#E6522C', name: 'Prometheus', delay: 0.6 },
        { Icon: SiGrafana, color: '#F46800', name: 'Grafana', delay: 0.7 },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-background opacity-20" />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                        >
                            <h2 className="text-neon-green text-xl md:text-2xl font-light tracking-wider">
                                Hello, I'm
                            </h2>
                            <h1 className="text-5xl md:text-7xl font-bold text-white">
                                Shinjan Sarkar
                            </h1>
                        </motion.div>

                        {/* Typing Animation */}
                        <div className="h-20">
                            <TypeAnimation
                                sequence={[
                                    'DevOps Enthusiast',
                                    2000,
                                    'Cloud Engineer',
                                    2000,
                                    'CI/CD Specialist',
                                    2000,
                                    'Docker Expert',
                                    2000,
                                    'AWS Practitioner',
                                    2000,
                                ]}
                                wrapper="h2"
                                speed={50}
                                className="text-3xl md:text-4xl font-bold text-neon-blue text-neon-glow"
                                repeat={Infinity}
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-300 text-lg leading-relaxed max-w-xl"
                        >
                            DevOps and Cloud Enthusiast passionate about containerization, CI/CD automation,
                            and cloud infrastructure. Building scalable solutions with Docker, AWS, and modern DevOps tools.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <motion.a
                                href="#contact"
                                className="neon-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Hire Me
                            </motion.a>
                            <motion.a
                                href="https://drive.google.com/file/d/19_Y4iP8t0tm3phnhrJiE0vDox0YRlXod/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="neon-button"
                                style={{ borderColor: 'var(--neon-green)', color: 'var(--neon-green)' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Resume
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Profile Image & Floating Icons */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Profile Image with Neon Circle */}
                        <div className="relative">
                            {/* Rotating Neon Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 w-80 h-80 rounded-full border-2 border-neon-blue/30"
                                style={{ transform: 'scale(1.2)' }}
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 w-80 h-80 rounded-full border-2 border-neon-purple/30"
                                style={{ transform: 'scale(1.3)' }}
                            />

                            {/* Profile Image */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-neon-blue neon-glow-blue"
                            >
                                <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                                    {/* Placeholder - Replace with your actual image */}
                                    <div className="text-8xl">👨‍💻</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating DevOps Icons */}
                        {devopsIcons.map(({ Icon, color, name, delay }, index) => {
                            const angle = (index / devopsIcons.length) * 2 * Math.PI;
                            const radius = 200;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <motion.div
                                    key={name}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: [0, -15, 0],
                                    }}
                                    transition={{
                                        opacity: { delay: delay + 0.8 },
                                        scale: { delay: delay + 0.8 },
                                        y: {
                                            duration: 2 + index * 0.2,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        },
                                    }}
                                    className="absolute"
                                    style={{
                                        left: `calc(50% + ${x}px)`,
                                        top: `calc(50% + ${y}px)`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.3, rotate: 360 }}
                                        className="w-16 h-16 rounded-lg glass flex items-center justify-center cursor-pointer group"
                                        style={{
                                            boxShadow: `0 0 20px ${color}40`,
                                        }}
                                    >
                                        <Icon size={32} color={color} />
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            <span className="text-xs text-neon-blue">{name}</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center pt-2"
                    >
                        <motion.div className="w-1 h-2 bg-neon-blue rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
