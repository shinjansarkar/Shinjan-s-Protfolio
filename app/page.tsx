"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contributions from '@/components/Contributions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white selection:bg-rose-500/30 selection:text-rose-400 overflow-x-hidden relative">
            <Loading />

            {/* Massive Spatial Background - Crimson Theme */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-rose-600/10 rounded-full blur-[150px]" />
            </div>

            <Navbar />

            {/* The Ultimate Scrolling Spatial Layout */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24">
                <div className="flex flex-col gap-32 md:gap-48">
                    <section id="home">
                        <Hero />
                    </section>
                    <section id="skills">
                        <Skills />
                    </section>
                    <section id="experience">
                        <Experience />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>


                    <div className="flex flex-col md:flex-row gap-12 w-full">
                        <div className="w-full md:w-1/2">
                            <Certifications />
                        </div>
                        <div className="w-full md:w-1/2">
                            <Contributions />
                        </div>
                    </div>

                    <section id="contact">
                        <Contact />
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

