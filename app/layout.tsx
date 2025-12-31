import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
    title: "Shinjan Sarkar | DevOps & Cloud Enthusiast",
    description: "Portfolio of Shinjan Sarkar - DevOps and Cloud Enthusiast specializing in Docker, AWS, CI/CD, GitLab, and Infrastructure Automation",
    keywords: ["DevOps", "Cloud Engineer", "AWS", "Docker", "CI/CD", "GitLab", "Bash", "Python", "Shinjan Sarkar"],
    authors: [{ name: "Shinjan Sarkar" }],
    openGraph: {
        title: "Shinjan Sarkar - DevOps Portfolio",
        description: "Explore my journey in DevOps, Cloud, and Automation",
        type: "website",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={GeistSans.className}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased bg-obsidian-950 text-white selection:bg-electric-cyan/30 selection:text-electric-cyan">
                {children}
            </body>
        </html>
    );
}
