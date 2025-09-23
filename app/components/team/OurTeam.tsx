"use client";

import DoctorCard from "./DoctorCards";


export default function Ourteam() {
    return (
        <section
            className="relative w-full bg-gradient-to-b from-primarygray via-primarygray/90 to-primary bg-cover bg-center flex items-center justify-center" id="doctors"

        >


            {/* Centered content */}
            <div className="relative z-10 text-center max-w-5xl lg:px-16 px-3 py-32">
                {/* Title box with border */}
                <div className="  rounded-none inline-block mb-12">
                    <h1 className="text-5xl md:text-6xl font-normal text-accent headingclass">
                        Meet Our Doctors
                    </h1>
                    <p className="mt-3 text-sm text-accent">
                        Our practice is led by dedicated and experienced physicians committed to providing the highest standard of care.
                    </p>
                </div>
                <DoctorCard />
            </div>
        </section>
    );
}
