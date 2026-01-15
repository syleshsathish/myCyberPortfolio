"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-10 pt-20 relative overflow-hidden">
            {/* Background Blur Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-sm md:text-base font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                        Cyber Security Student
                    </h2>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-6">
                        Sylesh{" "}
                        <span className="text-muted-foreground whitespace-nowrap">
                            Sathish Kumar
                        </span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
I learned how systems are built before learning how they break — now I focus on securing them.
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-12 bg-white/20"></div>
                        <span className="text-sm text-muted-foreground">
                            Based in Ireland
                        </span>
                    </div>
                </motion.div>

                {/* Image Section */}
{/* Image Section */}
{/* Image Section */}
{/* Image Section */}
<motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="
        relative
        mx-auto
        -mt-8 md:-mt-16
        h-[320px] w-[340px]
        md:h-[420px] md:w-[400px]
        rounded-3xl
        overflow-hidden
        bg-black/40
        shadow-[0_25px_80px_rgba(0,0,0,0.65)]
    "
>
    <Image
        src="/profile.png"
        alt="Sylesh Sathish Kumar - Cyber Security Student"
        fill
        className="object-contain p-4"
        quality={100}
        priority
    />
</motion.div>




            </div>
        </section>
    );
}
