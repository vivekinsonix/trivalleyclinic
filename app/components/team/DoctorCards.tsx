"use client";

import { Card } from "flowbite-react";

const doctors = [
    {
        name: "Dr. Japsharan Gill, MD",
        title: "Psychiatrist",
        img: "https://placehold.co/150x150/f5f5f4/57534e?text=Dr.+Gill",
        desc: "Dr. Gill is dedicated to providing compassionate and comprehensive mental health care. She specializes in diagnostic evaluations and evidence-based treatment plans that empower patients on their path to recovery and well-being.",
    },
    {
        name: "Dr. Aman Sharma, MD",
        title: "Psychiatrist",
        img: "https://placehold.co/150x150/f5f5f4/57534e?text=Dr.+Sharma",
        desc: "Dr. Sharma focuses on holistic patient care with expertise in mood disorders and anxiety management, ensuring tailored approaches for long-term well-being.",
    },
];

export default function DoctorGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor, i) => (
                <Card
                    key={i}
                    className="bg-white rounded-2xl p-8 text-center shadow-lg border-0"
                >
                    <img
                        src={doctor.img}
                        alt={doctor.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                    />
                    <h3 className="text-2xl font-bold text-stone-900">{doctor.name}</h3>
                    <p className="text-primarypink font-semibold mt-1">{doctor.title}</p>
                    <p className="text-stone-600 my-4">{doctor.desc}</p>
                    <a className="px-8 py-3 text-sm  justify-center flex  underline">
                        Read More
                    </a>
                </Card>
            ))}
        </div>
    );
}
