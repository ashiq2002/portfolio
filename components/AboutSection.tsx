"use client";

import { motion } from "framer-motion";
import { User, Award, Code, Zap } from "lucide-react";

const highlights = [
    {
        icon: <Code className="text-secondary" size={32} />,
        title: "Mobile Expert",
        description: "Expert in architecting robust systems for live auctions, logistics, and HR management.",
    },
    {
        icon: <Zap className="text-primary" size={32} />,
        title: "Real-time Tech",
        description: "Complex integrations using Socket.io, Pusher, gRPC, and REST APIs.",
    },
    {
        icon: <Award className="text-pink-500" size={32} />,
        title: "Best Performer",
        description: "Recognized for delivering user-centric UI/UX and scalable mobile solutions.",
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-gray-300 text-lg leading-relaxed"
                    >
                        <p>
                            I am an innovative <span className="text-white font-bold">Flutter and Android Developer</span> based in Dhaka, Bangladesh. With a proven track record, I specialize in building high-performance, real-time mobile applications that solve complex business problems.
                        </p>
                        <p>
                            From architecting secure HR management systems with <span className="text-secondary">Face Recognition</span> to developing robust <span className="text-secondary">Live Auction</span> platforms using real-time data synchronization, I thrive on pushing the boundaries of mobile technology.
                        </p>
                        <div className="flex items-center gap-4 mt-8">
                            <div className="p-4 bg-black/60 rounded-lg border border-primary/20 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                <span className="block text-3xl font-display font-bold text-primary drop-shadow-[0_0_5px_rgba(252,238,10,0.5)]">5+</span>
                                <span className="text-xs uppercase tracking-wider text-gray-400 font-display">Years Exp</span>
                            </div>
                            <div className="p-4 bg-black/60 rounded-lg border border-secondary/20 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                <span className="block text-3xl font-display font-bold text-secondary drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">20+</span>
                                <span className="text-xs uppercase tracking-wider text-gray-400 font-display">Projects</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="p-6 bg-black/60 border border-white/5 rounded-xl hover:border-primary/40 hover:shadow-[0_0_20px_rgba(252,238,10,0.1)] transition-all flex items-start gap-4 backdrop-blur-md"
                            >
                                <div className="p-3 bg-black/80 rounded-lg border border-white/5">{item.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold font-display text-white mb-2 tracking-wide text-shadow-sm">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
