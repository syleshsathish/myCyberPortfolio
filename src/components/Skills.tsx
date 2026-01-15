"use client";

import { motion } from "framer-motion";
import { FaAws, FaJava } from "react-icons/fa";
import { SiMysql, SiKalilinux, SiWireshark } from "react-icons/si";
import { Shield, Users, MessageSquare, Brain, Zap } from "lucide-react";
import { MdNetworkCheck } from "react-icons/md";
import { JSX } from "react";

/* =========================
   Type Definitions
========================= */

type SkillItem = {
    name: string;
    icon?: JSX.Element;
};

type SkillCategory = {
    category: string;
    icon: JSX.Element;
    items: SkillItem[];
    className: string;
};

/* =========================
   Skills Data
========================= */

const skills: SkillCategory[] = [
    {
        category: "Security Operations & Tools",
        icon: <Shield className="w-6 h-6" />,
        items: [
            { name: "Penetration Testing", icon: <SiKalilinux /> },
            { name: "Wireshark", icon: <SiWireshark /> },
            { name: "Nmap", icon: <SiKalilinux /> },
        ],
        className: "md:col-span-2 bg-indigo-900/20 border-indigo-500/20",
    },
    {
        category: "Cloud Security & DevOps",
        icon: <FaAws className="w-6 h-6" />,
        items: [
            { name: "AWS", icon: <FaAws /> },
            { name: "Cloud Security", icon: <Shield /> },
        ],
        className: "md:col-span-2 bg-neutral-900/50 border-neutral-800",
    },
    {
        category: "Languages & Databases",
        icon: <FaJava className="w-6 h-6" />,
        items: [
            { name: "Java", icon: <FaJava /> },
            { name: "SQL", icon: <SiMysql /> },
        ],
        className: "md:col-span-1 bg-neutral-900/50 border-neutral-800",
    },
    {
        category: "Networking Basics",
        icon: <MdNetworkCheck className="w-6 h-6" />,
        items: [
            { name: "OSI & TCP/IP Models" },
            { name: "IP Addressing & Subnetting" },
            { name: "Ports & Protocols" },
            { name: "DNS, DHCP, HTTP/HTTPS" },
        ],
        className: "md:col-span-1 bg-neutral-900/50 border-neutral-800",
    },
    {
        category: "Soft Skills",
        icon: <Users className="w-6 h-6" />,
        items: [
            { name: "Communication", icon: <MessageSquare /> },
            { name: "Problem Solving", icon: <Brain /> },
            { name: "Leadership", icon: <Users /> },
            { name: "Adaptability", icon: <Zap /> },
        ],
        className: "md:col-span-2 bg-emerald-900/20 border-emerald-500/20",
    },
];

/* =========================
   Component
========================= */

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 md:px-10 bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Skills that fuel my passion
                    </h2>
                    <p className="text-muted-foreground max-w-md">
                        My technical arsenal, ranging from security tools to core
                        networking and database fundamentals.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`h-full p-6 rounded-3xl border flex flex-col group hover:border-primary/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ${skill.className}`}
                        >
                            {/* Card Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-2 bg-white/5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold">
                                    {skill.category}
                                </h3>
                            </div>

                            {/* Skill Items */}
                            <div className="flex flex-wrap gap-3">
                                {skill.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="text-sm text-muted-foreground bg-white/5 px-3 py-2 rounded-md flex items-center gap-2 leading-none hover:bg-white/10 transition-colors cursor-default"
                                    >
                                        {item.icon && (
                                            <span className="text-lg">
                                                {item.icon}
                                            </span>
                                        )}
                                        {item.name}
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
