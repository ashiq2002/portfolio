"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-[#050505] relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase">
                        Get In <span className="text-secondary">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-6">I'm an App Developer Expert</h3>
                        <p className="text-gray-400 mb-8">
                            Interested in working together? I'm always open to discussing app development projects or partnership opportunities.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:mdashiqhossain6@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Mail size={24} className="text-primary" />
                                </div>
                                <div>
                                    <span className="block text-xs uppercase text-gray-500 tracking-wider">Email Me</span>
                                    <span className="text-lg">mdashiqhossain6@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+8801768702444" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Phone size={24} className="text-secondary" />
                                </div>
                                <div>
                                    <span className="block text-xs uppercase text-gray-500 tracking-wider">Call Me</span>
                                    <span className="text-lg">+880 1768 702444</span>
                                </div>
                            </a>

                            <a href="https://github.com/ashiq2002" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Github size={24} className="text-white" />
                                </div>
                                <div>
                                    <span className="block text-xs uppercase text-gray-500 tracking-wider">GitHub</span>
                                    <span className="text-lg">Follow on GitHub</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/md-ashiq-hossain-0583b21ab/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Linkedin size={24} className="text-[#0077b5]" />
                                </div>
                                <div>
                                    <span className="block text-xs uppercase text-gray-500 tracking-wider">LinkedIn</span>
                                    <span className="text-lg">Connect on LinkedIn</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                        <textarea
                            placeholder="Message"
                            rows={5}
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                        ></textarea>
                        <button
                            className="w-full py-4 bg-primary text-black font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2"
                        >
                            <Send size={18} /> Send Message
                        </button>
                    </form>
                </div>

                <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} MD. Ashiq Hossain. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}
