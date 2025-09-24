"use client";

import { Button, Card } from "flowbite-react";
import Link from "next/link";

const doctors = [
    {
        name: "Dr. Japsharan Gill, MD",
        title: "Psychiatrist",
        slug: "japsharan-gill",
        img: "dr-japsharan-gill.jpg",
        desc: "Completed my psychiatric residency at UCLA Kern Psychiatry Residency Program in Bakersfield. I have worked and/or trained at Kern Medical Center, Olive View Medical Center, Bakersfield VA Clinic, the West Los Angeles VA Medical Center outpatient clinic, Alameda Health System, Fremont hospital and others.",
    },
    {
        name: "Dr. Shabeg S. Gondara, MD",
        title: "Psychiatrist",
        slug: "Shabeg-S",
        img: "dr.shabeg.jpg",
        desc: "Completed my psychiatric residency at UCLA Kern Psychiatry Residency Program in Bakersfield. I have worked and/or trained at Kern Medical Center, Olive View Medical Center, Bakersfield VA Clinic, the West Los Angeles VA Medical Center outpatient clinic, Alameda Health System, Fremont hospital and others.",
    },
];

export default function DoctorGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor, i) => (
                <Card
                    key={i}
                    className="bg-white rounded-2xl p-4 text-center shadow-lg border-0"
                >
                    <img
                        src={doctor.img}
                        alt={doctor.name}
                        className="w-44 h-44 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                    />
                    <h3 className="text-2xl font-bold text-stone-900">{doctor.name}</h3>
                    <p className="text-primaryteal font-semibold mt-1">{doctor.title}</p>
                    {/* <p className="text-stone-600 my-4">{doctor.desc}</p> */}
                    <div className="flex flex-wrap items-center justify-center gap-1">
                        <img
                            src="/Alameda_Health_System_logo.png"
                            alt="Alameda Health System"
                            className="h-20 w-auto grayscale-0 hover:grayscale-0 transition"
                        />
                        <img
                            src="/kern-medical-logo.png"
                            alt="Kern Medical"
                            className="h-16 w-auto grayscale-0 hover:grayscale-0 transition"
                        />
                        <img
                            src="/US_Veterans_Health_Administration_logo.png"
                            alt="U.S. Veterans Health Administration"
                            className="h-16 w-auto grayscale-0 hover:grayscale-0 transition"
                        />
                        <img
                            src="/fh.png"
                            alt="U.S. Veterans Health Administration"
                            className="h-16 w-auto grayscale-0 hover:grayscale-0 transition"
                        />
                        <img
                            src="/b2.png"
                            alt="U.S. Veterans Health Administration"
                            className="h-24 w-auto grayscale-0 hover:grayscale-0 transition"
                        />
                    </div>
                    <Link href="/detail">
                        <Button outline
                            color="default"
                            size="lg"
                            className="px-6 py-3 h-10 mt-3 text-lg font-semibold shadow-lg m-auto"
                        >
                            Read More
                        </Button>
                    </Link>
                </Card>
            ))}
        </div>
    );
}
