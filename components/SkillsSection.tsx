"use client";

import { motion } from "framer-motion";
import { SiDart, SiKotlin, SiTypescript, SiMysql, SiFlutter, SiFirebase, SiSupabase, SiSocketdotio, SiPusher } from "react-icons/si";
import { FaJava, FaAndroid, FaLayerGroup } from "react-icons/fa";
import { TbApi, TbWorldWww, TbPackages, TbRocket, TbRipple, TbBoxModel } from "react-icons/tb";

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "Dart", icon: <SiDart /> },
            { name: "Java", icon: <FaJava /> },
            { name: "Kotlin", icon: <SiKotlin /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "SQL", icon: <SiMysql /> },
        ],
        color: "border-primary text-primary shadow-primary/20",
    },
    {
        title: "Frameworks & Tools",
        skills: [
            { name: "Flutter", icon: <SiFlutter /> },
            { name: "Android SDK", icon: <FaAndroid /> },
            { name: "Jetpack", icon: <TbRocket /> },
        ],
        color: "border-secondary text-secondary shadow-secondary/20",
    },
    {
        title: "State Management",
        skills: [
            { name: "BLoC", icon: <TbPackages /> },
            { name: "GetX", icon: <TbBoxModel /> },
            { name: "Provider", icon: <FaLayerGroup /> },
            { name: "Riverpod", icon: <TbRipple /> },
        ],
        color: "border-pink-500 text-pink-500 shadow-pink-500/20",
    },
    {
        title: "Real-time & Backend",
        skills: [
            { name: "gRPC", icon: <TbApi /> },
            { name: "Socket.io", icon: <SiSocketdotio /> },
            { name: "Pusher", icon: <SiPusher /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "Supabase", icon: <SiSupabase /> },
            { name: "REST API", icon: <TbWorldWww /> },
        ],
        color: "border-green-400 text-green-400 shadow-green-400/20",
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-[#0c0c0c] relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase">
                        Technical <span className="text-secondary">Arsenal</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-black/60 border border-white/5 rounded-2xl p-8 hover:bg-black/80 transition-all backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
                        >
                            <h3 className="text-xl font-bold font-display text-white mb-6 uppercase tracking-wider drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className={`px-4 py-2 border rounded-full text-sm font-medium font-display uppercase tracking-wide bg-black/60 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_currentColor] transition-all cursor-crosshair flex items-center gap-2 ${category.color}`}
                                        style={{
                                            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                                        }}
                                    >
                                        <span className="text-lg">{skill.icon}</span>
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
