"use client";

import { Button } from "flowbite-react";



export default function Virtual() {
    return (
        <section
            className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center" id="schedule"
            style={{
                backgroundImage: "url('/appointments.jpg')", // replace with your image path
            }}
        >
            {/* Overlay (optional for dark effect) */}
            <div className="absolute inset-0 bg-primarypink/20" />

            {/* Centered content */}
            <div className="relative z-10 text-center max-w-3xl">
                {/* Title box with border */}
                <div className="border-2 border-accent bg-gradient-to-b from-primary via-primary/90 to-primarygray rounded-none px-16 py-32 inline-block">
                    <h1 className="text-4xl md:text-6xl mb-3 font-normal text-accent headingclass">
                        Schedule Your Appointment.
                    </h1>
                    <p className="mt-3  text-stone-600">
                        For your convenience and safety, Tri-Valley Clinic offers secure
                        virtual visits. Receive the same high-quality care from our doctors
                        from the comfort and privacy of your own home. Contact us today to
                        learn more and schedule your telehealth appointment.
                    </p>
                </div>

                {/* Action button */}
                <div className="mt-8 lg:flex justify-between block m-auto gap-3 space-y-3">

                    <Button outline
                        color="default"
                        size="lg"
                        className="px-8 py-3 text-lg font-semibold shadow-lg m-auto"
                    >
                        Book a Appointment
                    </Button>
                </div>
            </div>
        </section>
    );
}
