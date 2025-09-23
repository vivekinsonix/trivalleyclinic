"use client";

import { Button } from "flowbite-react";

export default function Hero() {
    return (
        <section
            className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: "url('/tri3.jpg')", // replace with your image path
            }}
        >
            {/* Overlay (optional for dark effect) */}
            <div className="absolute inset-0 bg-primarypink/20" />

            {/* Centered content */}
            <div className="relative z-10 text-center max-w-3xl">
                {/* Title box with border */}
                <div className="border-2 border-accent bg-gradient-to-b from-primary via-primary/90 to-primarygray rounded-none lg:px-16 py-32 inline-block">
                    <h1 className="text-4xl md:text-6xl font-normal text-accent headingclass">
                        Feeling  Overwhelmed, Anxious, or Alone?
                    </h1>
                    <p className="mt-3  text-stone-600">
                        It&apos;s okay not to be okay. Our compassionate doctors provide expert psychiatric care and personalized solutions, guiding you from where you are today to a place of peace and well-being. Imagine a life where you feel like yourself again.
                    </p>
                </div>

                {/* Action button */}
                <div className="mt-8 lg:flex justify-between block lg:px-0 px-2 gap-3">
                    <Button
                        color="default"
                        size="lg"
                        className="px-4 py-3 text-lg font-semibold shadow-lg mb-3 m-auto border-0 w-full"
                    >
                        Start Your Journey to Feeling Better
                    </Button>
                    <Button outline
                       
                        size="lg"
                        className="px-4 py-3 text-lg font-semibold shadow-lg lg:m-auto mt-5 w-full"
                    >
                        Learn How We Can Help
                    </Button>
                </div>
            </div>
        </section>
    );
}
