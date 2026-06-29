import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NetDiscover - Network Scanning Reimagined",
    description: "Network Scanner & Topology Mapper",
};

export default function NetdiscoverLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
