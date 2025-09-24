"use client";

import Link from "next/link";
import { Card } from "flowbite-react";
import { Stethoscope, Brain, Droplet, HeartPulse } from "lucide-react";

const services = [
    {
        title: "Psychiatry",
        slug: "psychiatry",
        description:
            "Comprehensive psychiatric care tailored to adults",
        icon: <Brain className="h-10 w-10 text-primary" />,
        bg: "bg-primary/20 dark:bg-primary/30 hover:bg-primary/40",
    },
    {
        title: "Medication management ",
        slug: "medication-management",
        description:
            "Evidence-based treatment for mood disorders, psychosis, and anxiety.",
        icon: <Brain className="h-10 w-10 text-primary" />,
        bg: "bg-primarydark/20 dark:bg-primarydark/20 hover:bg-primarydark/40",
    },
    {
        title: "Weight Management",
        slug: "weight-management",
        description:
            "Personalized weight loss programs that combine medical expertise.",
        icon: <HeartPulse className="h-10 w-10 text-primary" />,
        bg: "bg-secondary/20 dark:bg-secondary/30 hover:bg-secondary/40",
    },
    {
        title: "IV Hydration Therapy",
        slug: "iv-hydration",
        description:
            "Safe and effective IV hydration treatments ",
        icon: <Droplet className="h-10 w-10 text-primary" />,
        bg: "bg-highlight/20 dark:bg-highlight/20 hover:bg-highlight/40",
    },
    {
        title: "Trauma & Stress Support",
        slug: "trauma-stress-support",
        description:
            "Compassionate care for individuals coping with trauma or stress.",
        icon: <Stethoscope className="h-10 w-10 text-primary" />,
        bg: "bg-secondarydark/20 dark:bg-secondarydark/20 hover:bg-secondarydark/40 ",
    },
    {
        title: "Psychosis & Anxiety ",
        slug: "mood-psychosis-anxiety",
        description:
            "Evidence-based treatment for mood disorders, psychosis, and anxiety.",
        icon: <Brain className="h-10 w-10 text-primary" />,
        bg: "bg-primarydark/20 dark:bg-primarydark/20 hover:bg-primarydark/40",
    },
];

export default function ServicesCards() {
    return (



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
                <Link key={index} href={`/services/${service.slug}`} passHref>
                    <Card
                        className={`p-6 border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl cursor-pointer ${service.bg}`}
                    >

                        <h3 className="text-xl font-semibold text-accent dark:accent">
                            {service.title}
                        </h3>
                        <p className="mt-3 text-accent dark:textaccent text-sm leading-relaxed">
                            {service.description}
                        </p>
                        <span className="mt-4 inline-block text-primarydark font-medium text-sm hover:underline">
                            Learn More →
                        </span>
                    </Card>
                </Link>
            ))}
        </div>

    );
}
