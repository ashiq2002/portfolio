"use client";

import React, { useEffect, useRef } from "react";

export default function CyberpunkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const characters = "01";
        const fontSize = 14;
        const columns = width / fontSize;
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }

        const draw = () => {
            // Semi-transparent background to create trail effect
            ctx.fillStyle = "rgba(5, 5, 5, 0.1)";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "#fcee0a"; // Primary yellowish color
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                // Vary opacity slightly for depth
                ctx.fillStyle = Math.random() > 0.9 ? "#fff" : "rgba(252, 238, 10, 0.35)";

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Recalculate columns if needed, but keeping it simple for now
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-black">
            {/* The Rain */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 opacity-40"
            />

            {/* City Skyline Silhouette */}
            <div className="absolute bottom-0 left-0 w-full h-[30vh] md:h-[40vh] bg-gradient-to-t from-black via-black/80 to-transparent">
                <svg
                    className="absolute bottom-0 w-full h-full opacity-30"
                    viewBox="0 0 1000 300"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,300 L0,250 L50,250 L50,200 L80,200 L80,260 L120,260 L120,150 L160,150 L160,280 L200,280 L200,100 L250,100 L250,250 L300,250 L300,180 L350,180 L350,270 L400,270 L400,50 L460,50 L460,280 L500,280 L500,120 L550,120 L550,240 L600,240 L600,160 L650,160 L650,270 L700,270 L700,80 L760,80 L760,250 L800,250 L800,200 L850,200 L850,280 L920,280 L920,40 L980,40 L980,300 Z"
                        fill="currentColor"
                        className="text-primary"
                    />
                    {/* Add some neon window accents */}
                    <rect x="130" y="160" width="10" height="10" fill="#00f0ff" className="animate-pulse" />
                    <rect x="210" y="120" width="15" height="5" fill="#fcee0a" />
                    <rect x="410" y="70" width="20" height="2" fill="#00f0ff" />
                    <rect x="710" y="100" width="10" height="10" fill="#fcee0a" className="animate-pulse" />
                    <rect x="930" y="60" width="20" height="5" fill="#00f0ff" />
                </svg>
            </div>

            {/* Vignette Overlay for focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>
    );
}
