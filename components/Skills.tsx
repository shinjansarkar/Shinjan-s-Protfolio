'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import SkillCube from './SkillCube';
import {
    FaDocker, FaAws, FaLinux, FaGithub, FaJenkins, FaPython
} from 'react-icons/fa';
import {
    SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiGo,
    SiGitlab, SiGithubactions, SiNginx
} from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Version Control & CI/CD",
            skills: [
                { name: "Git", icon: FaGithub, color: "#F05032" },
                { name: "GitHub", icon: FaGithub, color: "#181717" },
                { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
                { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
                { name: "Jenkins", icon: FaJenkins, color: "#D24939" },
            ]
        },
        {
            title: "Containerization & Web Server",
            skills: [
                { name: "Docker", icon: FaDocker, color: "#2496ED" },
                { name: "Nginx", icon: SiNginx, color: "#009639" },
            ]
        },
        {
            title: "Cloud Platforms",
            skills: [
                { name: "AWS EC2", icon: FaAws, color: "#FF9900" },
                { name: "AWS S3", icon: FaAws, color: "#569A31" },
            ]
        },
        {
            title: "Scripting & OS",
            skills: [
                { name: "Bash", icon: FaLinux, color: "#4EAA25" },
                { name: "Python", icon: FaPython, color: "#3776AB" },
                { name: "Linux", icon: FaLinux, color: "#FCC624" },
            ]
        }
    ];

    return (
        <section id="skills" className="relative py-20 bg-dark-card/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-neon-green text-neon-glow">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-neon-green mx-auto rounded-full neon-glow-green" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Skill Cards */}
                    <div className="space-y-8">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div
                                key={catIndex}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="space-y-4"
                            >
                                <h3 className="text-xl font-semibold text-neon-blue">{category.title}</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {category.skills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className="glass p-4 rounded-lg flex flex-col items-center justify-center gap-2 border border-gray-800 hover:border-neon-green transition-colors group"
                                        >
                                            <skill.icon size={32} style={{ color: skill.color }} className="group-hover:animate-pulse" />
                                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - 3D Cube */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-[500px] w-full relative"
                    >
                        <div className="absolute inset-0 bg-neon-blue/5 rounded-full blur-3xl" />
                        <Canvas camera={{ position: [0, 0, 6] }}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1} />
                            <pointLight position={[-10, -10, -10]} color="#00eaff" intensity={0.5} />
                            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                            <SkillCube />
                            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                        </Canvas>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
