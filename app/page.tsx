import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contributions from '@/components/Contributions';
import GithubStats from '@/components/GithubStats';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
    return (
        <main className="min-h-screen bg-dark-bg text-white selection:bg-neon-blue selection:text-dark-bg">
            <ParticleBackground />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contributions />
            <GithubStats />
            <Hobbies />
            <Contact />
            <Footer />
        </main>
    );
}
