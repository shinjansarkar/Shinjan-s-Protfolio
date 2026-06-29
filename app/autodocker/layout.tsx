import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auto Docker - Containerize apps in seconds",
    description: "Auto-detects your stack and generates production-ready Dockerfiles, Compose files, and CI/CD configs.",
};

export default function AutoDockerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
