"use client";

import Image from "next/image";

interface SubHeaderProps {
    title: string;
    description?: string;
    backgroundImage?: string;
}

export default function SubHeader({ title, description, backgroundImage }: SubHeaderProps) {
    return (
        <section className="relative isolate overflow-hidden">
            {/* Background Image */}
            {backgroundImage && (
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-center"
                />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-700/70" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-20 text-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
                {description && (
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
