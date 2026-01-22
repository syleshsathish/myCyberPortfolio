"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "National College of Ireland (NCI)",
        role: "Lab Assistant",
        period: "2025 – Present",
        location: "Dublin, Ireland",
        logo: "/myCyberPortfolio/public/Nci.png",
        description: [
            "Assisted students during labs, tutorials, and lectures by answering questions related to course content.",
            "Supported lecturers in managing undergraduate-level classes and practical sessions.",
            "Helped students understand technical concepts and complete hands-on exercises effectively.",
        ],
    },
    {
        company: "Hash Hack Code",
        role: "Mentor",
        period: "2023 – 2024",
        location: "India",
        logo: "/myCyberPortfolio/public/hash.png",
        description: [
            "Mentored students in programming fundamentals and web development concepts.",
            "Guided learners through hands-on coding sessions and real-world problem solving.",
            "Acted as a point of contact between students and the organization, ensuring smooth communication.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience">
        <section className="py-20 px-4 md:px-10 bg-zinc-950">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                        <Briefcase className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                        Experience
                    </h2>
                    <p className="text-muted-foreground max-w-md">
                        A timeline of my professional growth and academic contributions.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
                    />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative pl-6 md:pl-12 group"
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.2 + 0.3,
                                        type: "spring",
                                        stiffness: 200,
                                    }}
                                    className="absolute -left-[7px] md:left-[9px] top-6 md:top-8 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 group-hover:scale-125 transition-transform"
                                >
                                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                </motion.div>

                                {/* Experience Card */}
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                    className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all"
                                >
                                    <div className="flex flex-col gap-4">
                                        {/* Header */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden shrink-0">
                                                <img
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    className="w-full h-full object-contain scale-125"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-primary font-medium">
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Meta */}
                                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground text-xs md:text-sm pl-0 md:pl-16">
                                            <p className="font-medium">{exp.period}</p>
                                            <p className="text-white/40">•</p>
                                            <p>{exp.location}</p>
                                        </div>

                                        {/* Description */}
                                        <ul className="list-disc list-inside text-sm text-muted-foreground pl-0 md:pl-16 space-y-1">
                                            {exp.description.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </section>
    );
}
