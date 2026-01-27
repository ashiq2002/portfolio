"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "UpscaleBD",
        role: "Flutter Developer",
        period: "Jan 2025 – Present",
        location: "South Banasree, Dhaka",
        projects: [
            "DigiGO: HR management app with GetX and gRPC.",
            "Ticketing: Real-time ticket management with Pusher.",
            "AttendX: Face recognition attendance system with Supabase.",
        ],
    },
    {
        company: "Ignition IT Solution",
        role: "Flutter Developer (Part-time)",
        period: "May 2025 – Nov 2025",
        location: "Remote",
        projects: [
            "Kurd Auction: Live auction system using PUSHER.",
            "Rawa Shipping: Logistics app utilizing gRPC.",
        ],
    },
    {
        company: "Market Access Analytics",
        role: "Junior Android Developer",
        period: "May 2024 – Present",
        location: "Gulshan, Dhaka",
        projects: [
            "FieldX Sales Automation: Sales tracking using Bloc.",
            "AGI: CRM platform for process optimization.",
            "EDOTCO: Real-time task notifications.",
        ],
    },
    {
        company: "SpaGreen Creative",
        role: "Android Developer",
        period: "Feb 2024 – May 2024",
        location: "Mirpur DOHS, Dhaka",
        projects: [
            "OXXO: Live TV application using Java.",
            "LMS Learning App: Online education platform.",
        ],
    },
    {
        company: "Genuine Technology",
        role: "Android Developer",
        period: "Oct 2023 – Jan 2024",
        location: "Uttara, Dhaka",
        projects: [
            "Atrai: Financial processes using Flutter & GetX.",
            "Easy HR: HR management automation.",
        ],
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase">
                        Professional <span className="text-primary">Journey</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-6 md:ml-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-primary shadow-[0_0_10px_var(--primary)]" />

                            <div className="bg-black/60 border border-white/5 p-6 rounded-xl hover:border-primary/50 transition-all group backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(252,238,10,0.15)]">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold font-display text-white group-hover:text-primary transition-colors tracking-wide drop-shadow-[0_0_8px_rgba(252,238,10,0.3)]">
                                            {exp.role}
                                        </h3>
                                        <p className="text-secondary font-medium tracking-wide">{exp.company}</p>
                                    </div>
                                    <div className="text-right mt-2 md:mt-0">
                                        <span className="block text-sm font-mono text-gray-400 bg-black/50 border border-white/10 px-3 py-1 rounded shadow-inner">
                                            {exp.period}
                                        </span>
                                        <span className="text-xs text-gray-500 mt-1 block">{exp.location}</span>
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {exp.projects.map((project, i) => (
                                        <li key={i} className="text-gray-300 text-sm flex items-start">
                                            <span className="text-primary mr-2 drop-shadow-[0_0_5px_rgba(252,238,10,0.8)]">▹</span>
                                            {project}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
