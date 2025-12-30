"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contributions from '@/components/Contributions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';

export default function Home() {
    return (
        <main className="min-h-screen bg-obsidian-950 text-white selection:bg-electric-cyan/30 selection:text-electric-cyan">
            <Loading />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contributions />
            <Contact />
            <Footer />
        </main>
    );
}
