import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#0b0f13',
                    card: '#151a1f',
                    border: '#1f2937',
                },
                neon: {
                    blue: '#00eaff',
                    green: '#00ff9d',
                    purple: '#9b5cff',
                    pink: '#ff006e',
                },
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #00eaff, 0 0 10px #00eaff' },
                    '100%': { boxShadow: '0 0 10px #00eaff, 0 0 20px #00eaff, 0 0 30px #00eaff' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'neon-gradient': 'linear-gradient(135deg, #00eaff 0%, #9b5cff 100%)',
            },
        },
    },
    plugins: [],
};

export default config;
