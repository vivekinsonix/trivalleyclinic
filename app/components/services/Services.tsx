"use client";


import { Servicestabs } from "./ServicesTabs";

export default function Services() {
    return (
        <section
            className="relative w-full bg-gradient-to-b from-primaryyellow via-primarygray/90 to-primarygray bg-cover bg-center flex items-center justify-center"
            id="services"
        >


            {/* Centered content */}
            <div className="relative z-10 text-center max-w-5xl px-3 lg:px-16 py-32">
                {/* Title box with border */}
                <div className=" rounded-none inline-block mb-12">
                    <h1 className="text-5xl md:text-6xl font-normal text-accent headingclass">
                        Our Services
                    </h1>
                    <p className="mt-3 text-sm text-accent">
                        We offer a suite of specialized services designed to address your unique health needs. Click through the tabs below to learn how we can support your journey to wellness.
                    </p>
                </div>

                <Servicestabs />
            </div>
        </section>
    );
}
