"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Performance Evaluation of ML DSA Based Post-Quantum Authentication in IoT Healthcare Using Compression Optimisations",
        category: "Cryptography & Authentication",
        color: "bg-red-500",
        image: "/passforge_bg.png",
    },
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        const newIndex = currentIndex + newDirection;
        if (newIndex >= 0 && newIndex < projects.length) {
            setDirection(newDirection);
            setCurrentIndex(newIndex);
        }
    };

    const handleDragEnd = (
        _e: MouseEvent | TouchEvent | PointerEvent,
        { offset, velocity }: PanInfo
    ) => {
        const swipe = swipePower(offset.x, velocity.x);
        if (swipe < -swipeConfidenceThreshold) paginate(1);
        else if (swipe > swipeConfidenceThreshold) paginate(-1);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0,
        }),
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 200 : -200,
            opacity: 0,
        }),
    };

    return (
        <section id="projects" className="py-20 px-4 md:px-10 bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-16"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Impressive Works
                        </h2>
                        <p className="text-muted-foreground max-w-md">
                            Here are some of the projects I've worked on.
                        </p>
                    </div>

                    {/* Keep GitHub link */}
                    <Link
                        href="https://github.com/onlyuuu?tab=repositories"
                        target="_blank"
                        className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
                    >
                        View all repositories <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                {/* Mobile Carousel */}
                <div className="md:hidden relative">
                    <div className="overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", duration: 0.25 },
                                    opacity: { duration: 0.15 },
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={handleDragEnd}
                            >
                                <ProjectCard
                                    project={projects[currentIndex]}
                                    index={currentIndex}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex justify-center items-center gap-4 mt-6">
                        <button
                            onClick={() => paginate(-1)}
                            disabled={currentIndex === 0}
                            className="p-3 rounded-full border border-white/10 disabled:opacity-30"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => paginate(1)}
                            disabled={currentIndex === projects.length - 1}
                            className="p-3 rounded-full border border-white/10 disabled:opacity-30"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom GitHub Button */}
                <div className="flex justify-center">
                    <Link
                        href="https://github.com/onlyuuu?tab=repositories"
                        target="_blank"
                        className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white font-medium flex items-center gap-2"
                    >
                        And many more <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

/* =========================
   Project Card
========================= */

interface ProjectCardProps {
    project: {
        title: string;
        category: string;
        color: string;
        image: string;
    };
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <div className="relative h-[250px] md:h-[300px] w-full rounded-3xl overflow-hidden mb-6 border border-white/5 group-hover:border-primary/50 transition-colors">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="absolute bottom-6 left-6">
                    <div
                        className={`w-12 h-12 rounded-full ${project.color} flex items-center justify-center text-white`}
                    >
                        <Github className="w-6 h-6" />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-start px-2">
                <div>
                    <h3 className="text-2xl font-semibold mb-1">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                        {project.category}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
