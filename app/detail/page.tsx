"use client";

import { Card, Button, Badge } from "flowbite-react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function DoctorProfile() {
    return (
        <>
            <Header />
            <section className="py-20 bg-stone-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column - Doctor Photo + Quick Info */}
                        <Card className="p-0 border-0 shadow-lg rounded-2xl bg-white dark:bg-gray-800">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-full h-100 relative mb-6 border-4 border-white shadow-lg">
                                    <Image
                                        src="/dr-japsharan-gill.jpg"
                                        alt="Dr. Jane Smith"
                                        fill
                                        className=" object-cover"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
                                    Dr. Japsharan Gill, MD
                                </h2>
                                <p className="text-stone-600 dark:text-gray-300">
                                    Psychiatrist
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                    <Badge color="info">Psychiatry</Badge>
                                    <Badge color="green">Anxiety</Badge>
                                    <Badge color="teal">Trauma</Badge>
                                </div>

                                <div className="mt-6 space-y-3 text-sm mb-5">
                                    <p className="flex items-center gap-2 text-stone-700 dark:text-gray-300">
                                        <Phone className="w-4 h-4 text-secondary" /> : (510)598-4921
                                    </p>
                                    <p className="flex items-center gap-2 text-stone-700 dark:text-gray-300">
                                        <Mail className="w-4 h-4 text-secondary" />{" "}
                                        contact@trivalleyclinic.com
                                    </p>
                                </div>


                                <Button outline

                                    size="lg"
                                    className="px-4 py-3 text-lg font-semibold shadow-lg lg:m-auto mt-5 w-full"
                                >
                                    Book Appointment
                                </Button>
                            </div>
                        </Card>

                        {/* Right Column - Biography & Details */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Biography */}
                            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white dark:bg-gray-800">
                                <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                                    About Dr. Japsharan Gill, MD
                                </h3>
                                <p className="text-stone-700 dark:text-gray-300 leading-relaxed">
                                    Completed my psychiatric residency at UCLA Kern Psychiatry Residency Program in Bakersfield. I have worked and/or trained at Kern Medical Center, Olive View Medical Center, Bakersfield VA Clinic, the West Los Angeles VA Medical Center outpatient clinic, Alameda Health System, Fremont hospital and others.
                                </p>
                            </Card>

                            {/* Education & Credentials */}
                            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white dark:bg-gray-800">
                                <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                                    Education & Credentials
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-stone-700 dark:text-gray-300">
                                    <li>MD, Stanford University School of Medicine</li>
                                    <li>Residency in Psychiatry, UCSF Medical Center</li>
                                    <li>Board-Certified in Adult Psychiatry</li>
                                </ul>
                            </Card>

                            {/* Specialties */}
                            <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white dark:bg-gray-800">
                                <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                                    Areas of Expertise
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    <Badge color="gray">Mood Disorders</Badge>
                                    <Badge color="gray">Psychosis</Badge>
                                    <Badge color="gray">Anxiety Disorders</Badge>
                                    <Badge color="gray">Trauma Therapy</Badge>
                                    <Badge color="gray">Stress Management</Badge>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
