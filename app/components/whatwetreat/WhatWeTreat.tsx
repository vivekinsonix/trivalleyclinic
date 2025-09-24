"use client";

import ServicesCards from "./ServicesCards";



export default function WhatWeTreat() {
    return (
        <section
            className="relative w-full bg-gradient-to-b from-primarylight via-primarylight/90 to-primarylight bg-cover bg-center flex items-center justify-center" id="doctors"

        >


            {/* Centered content */}
            <div className="relative z-10 text-center max-w-7xl lg:px-12 px-3 lg:py-32 py-16">
                {/* Title box with border */}
                <div className="  rounded-none inline-block mb-12">
                    <h1 className="text-5xl md:text-6xl font-normal text-accent headingclass">
                        What We Treat
                    </h1>
                    <p className="mt-3 text-sm text-accent max-w-2xl">
                        We offer a suite of specialized services designed to address your unique health needs. Click through the tabs below to learn how we can support your journey to wellness.
                    </p>
                </div>
                <ServicesCards />
            </div>
        </section>
    );
}
