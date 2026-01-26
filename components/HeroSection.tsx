"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";

export default function HeroSection() {
    const scrambledText = useScrambleText("MD. ASHIQ HOSSAIN", 3000);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
            {/* Background Grid/Effect */}
            <div className="absolute inset-0 bg-[url('/portfolio/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-secondary tracking-widest text-sm md:text-base font-medium mb-4 uppercase">
                        Hello, I am
                    </h2>
                    <h1
                        className="glitch-text text-4xl md:text-6xl lg:text-7xl font-glitch font-bold text-primary mb-6 uppercase -skew-x-12 drop-shadow-[5px_5px_0px_rgba(0,240,255,1)]"
                        data-text={scrambledText}
                    >
                        {scrambledText}
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0">
                        Innovative <span className="text-primary font-bold">Flutter & Android Developer</span> building high-performance, real-time mobile applications with cutting-edge technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <a
                            href="/portfolio/assets/MyResume.pdf"
                            download="MD_Ashiq_Hossain_Resume.pdf"
                            className="px-8 py-3 bg-primary text-black font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 clip-path-polygon"
                        >
                            <Download size={18} /> Download CV
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-primary text-primary font-bold text-sm uppercase tracking-wider hover:bg-primary/10 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/10 overflow-hidden bg-black/50 ring-1 ring-white/20">
                        <img
                            src="/portfolio/assets/ashiq.png"
                            alt="MD. Ashiq Hossain"
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
