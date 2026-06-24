import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Shinjan Sarkar — Founding Engineer & DevOps Architect",
    description: "I build the infrastructure that makes products scale. Founding Engineer at Bechohub. Specializing in cloud architecture, Kubernetes, CI/CD, and backend systems that don't break at 3 AM.",
    keywords: ["DevOps Engineer", "Cloud Architect", "Kubernetes", "AWS", "Docker", "CI/CD", "Backend Engineer", "Founding Engineer", "Bechohub", "Shinjan Sarkar"],
    authors: [{ name: "Shinjan Sarkar" }],
    openGraph: {
        title: "Shinjan Sarkar — Founding Engineer & DevOps Architect",
        description: "I build the infrastructure that makes products scale. Founding Engineer at Bechohub.",
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
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased bg-zinc-950 text-zinc-50 selection:bg-sky-500/30 selection:text-sky-400">
                {children}
            </body>
        </html>
    );
}
