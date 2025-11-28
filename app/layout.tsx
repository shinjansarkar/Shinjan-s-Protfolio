import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-inter',
});

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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
