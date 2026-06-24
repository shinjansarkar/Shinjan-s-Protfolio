"use client";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="pb-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-4 rounded-full border border-white/5 bg-zinc-900/30 backdrop-blur-md">
                
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <span className="text-sm font-bold font-display text-zinc-300">
                        Shinjan Sarkar
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-600" />
                    <span className="text-xs text-zinc-500 font-medium italic">
                        © {year}. Written in Next.js because plain HTML wasn't complicated enough.
                    </span>
                </div>

                <div className="flex items-center gap-6 text-sm font-medium">
                    <a href="https://github.com/shinjansarkar" target="_blank" rel="noreferrer"
                       className="text-zinc-500 hover:text-sky-400 transition-colors duration-300">
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/shinjan-sarkar-544323251/" target="_blank" rel="noreferrer"
                       className="text-zinc-500 hover:text-sky-400 transition-colors duration-300">
                        LinkedIn
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
