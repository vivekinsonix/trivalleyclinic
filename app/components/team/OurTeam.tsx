"use client";

import DoctorCard from "./DoctorCards";


export default function Ourteam() {
    return (
        <section
            className="relative w-full bg-gradient-to-b from-primarylight via-primarylight/90 to-primarylight bg-cover bg-center flex items-center justify-center" id="doctors"

        >


            {/* Centered content */}
            <div className="relative z-10 text-center max-w-5xl lg:px-12 px-3 lg:py-32 py-16">
                {/* Title box with border */}
                <div className="  rounded-none inline-block mb-12">
                    <h1 className="text-5xl md:text-6xl font-normal text-accent headingclass">
                        Meet Our Doctors
                    </h1>
                    <p className="mt-3 text-sm text-accent max-w-2xl">
                        Our practice is led by dedicated and experienced physicians committed to providing the highest standard of care.
                    </p>
                </div>
                <DoctorCard />
            </div>
        </section>
    );
}
