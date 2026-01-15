"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
    {
        degree: "Master’s in Cybersecurity",
        institution: "National College of Ireland",
        period: "2025 – 2026",
        location: "Dublin, Ireland",
    },
    {
        degree: "B.Tech in Information Technology",
        institution: "Rajalakshmi Engineering College",
        period: "2020 – 2024",
        location: "Chennai, India",
    },
];

export default function Education() {
    return (
        <section id="education" className="py-20 px-4 md:px-10 bg-black">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                        <GraduationCap className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                        Education
                    </h2>
                    <p className="text-muted-foreground max-w-md">
                        My academic journey that built my foundation in technology
                        and cybersecurity.
                    </p>
                </motion.div>

                {/* Education Cards */}
                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-white">
                                {edu.degree}
                            </h3>
                            <p className="text-primary font-medium">
                                {edu.institution}
                            </p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
                                <span>{edu.period}</span>
                                <span className="text-white/40">•</span>
                                <span>{edu.location}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
