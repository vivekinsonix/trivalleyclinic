import Image from "next/image";
import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function PsychiatricCarePage() {
    return (
        <>
            <Header />
            {/* SubHeader */}
            <section className="relative isolate overflow-hidden">
                <Image
                    src="/cm.jpg"
                    alt="Psychiatric Care"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondarydark/90 to-secondarydark/90" />
                <div className="relative z-10 container mx-auto px-6 py-20 text-center text-white">
                    <h1 className="text-4xl md:text-6xl mb-4 font-bold">Psychiatric Care</h1>
                    <p className="mt-2 max-w-2xl mx-auto text-lg text-white/90">
                        Comprehensive evaluation and personalized treatment for mood,
                        anxiety, trauma, and psychosis to support your mental well-being.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
                        About Our Psychiatric Care
                    </h2>
                    <p className="text-stone-700 leading-relaxed mb-8">
                        At Tri-Valley Clinic, our psychiatrists provide compassionate and
                        evidence-based care tailored to the unique needs of each individual.
                        We focus on accurate diagnosis and collaborative treatment planning
                        to help you achieve long-term wellness.
                    </p>

                    {/* Feature image */}
                    <div className="mb-10">
                        <img
                            className="w-full rounded-xl object-cover border-4 border-white shadow-xl"
                            src="/cm.jpg"
                            alt="Psychiatric consultation"
                        />
                    </div>

                    {/* Services grid with extra points */}
                    <ul className="grid grid-cols-1 md:grid-cols-1 gap-3">
                        <li className="bg-white rounded-xl p-6  hover:shadow-md hover:scale-[1.02] transition-transform duration-300">
                            <h3 className="text-lg font-semibold text-accent">Mood Disorders</h3>
                            <p className="text-stone-600 mt-2">
                                Specialized treatment for depression, bipolar disorder, and other mood-related conditions.
                            </p>
                            <ul className="list-disc list-inside mt-3 text-stone-600 text-sm space-y-1">
                                <li>Major depressive disorder</li>
                                <li>Bipolar disorder management</li>
                                <li>Seasonal affective disorder (SAD)</li>
                            </ul>
                        </li>

                        <li className="bg-white rounded-xl p-6 hover:shadow-md hover:scale-[1.02] transition-transform duration-300">
                            <h3 className="text-lg font-semibold text-accent">Anxiety Disorders</h3>
                            <p className="text-stone-600 mt-2">
                                Personalized care for generalized anxiety, panic disorder, phobias, and more.
                            </p>
                            <ul className="list-disc list-inside mt-3 text-stone-600 text-sm space-y-1">
                                <li>Generalized anxiety disorder (GAD)</li>
                                <li>Panic attacks & phobias</li>
                                <li>Social anxiety disorder</li>
                            </ul>
                        </li>

                        <li className="bg-white rounded-xl p-6 hover:shadow-md hover:scale-[1.02] transition-transform duration-300">
                            <h3 className="text-lg font-semibold text-accent">Trauma & Stress</h3>
                            <p className="text-stone-600 mt-2">
                                Evidence-based therapies for PTSD, trauma recovery, and stress management.
                            </p>
                            <ul className="list-disc list-inside mt-3 text-stone-600 text-sm space-y-1">
                                <li>Post-traumatic stress disorder (PTSD)</li>
                                <li>Acute stress disorder</li>
                                <li>Grief & adjustment issues</li>
                            </ul>
                        </li>

                        <li className="bg-white rounded-xl p-6  hover:shadow-md hover:scale-[1.02] transition-transform duration-300">
                            <h3 className="text-lg font-semibold text-accent">Psychosis Treatment</h3>
                            <p className="text-stone-600 mt-2">
                                Comprehensive evaluation and ongoing support for psychotic disorders.
                            </p>
                            <ul className="list-disc list-inside mt-3 text-stone-600 text-sm space-y-1">
                                <li>Schizophrenia spectrum disorders</li>
                                <li>Schizoaffective disorder</li>
                                <li>First-episode psychosis programs</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
}
