"use client";

import { Button, TextInput, Textarea, Label, Card } from "flowbite-react";
import { MapPin, Phone, Mail, Printer } from "lucide-react";

export default function ContactSection() {
    return (
        <section
            className="relative w-full  bg-gradient-to-l from-primarylight via-primarylight to-secondary/30 bg-cover bg-center flex items-center justify-center"
            id="services"
        >


            {/* Centered content */}
            <div className="relative z-10 text-center max-w-7xl px-2 lg:px-16 py-32">
                {/* Title box with border */}
                <div className=" rounded-none inline-block mb-12">
                    <h1 className="text-5xl md:text-6xl font-normal text-accent headingclass">
                        Contact Us
                    </h1>
                    <p className="mt-3 text-sm text-accent  max-w-2xl">
                        Ready to take the next step? Reach out to schedule your confidential
                        consultation. Our team is here to answer your questions and help you
                        get started.
                    </p>
                </div>
                <div className="container mx-auto px-2 text-left">


                    {/* Contact Cards */}
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Left - Contact Info */}
                        <Card className="p-8 rounded-2xl shadow-lg border-0">
                            <h3 className="text-xl font-semibold text-accent dark:accent mb-6">
                                Get In Touch
                            </h3>
                            <div className="space-y-4 text-stone-700 dark:text-gray-300">
                                <p className="flex items-start">
                                    <MapPin className="text-secondary h-6 w-6 mr-3 mt-1" />
                                    <span>
                                        680 Mowry Avenue
                                        <br />
                                        Fremont, CA 94536
                                    </span>
                                </p>
                                <p className="flex items-center">
                                    <Phone className="text-secondary h-6 w-6 mr-3" />
                                    <a
                                        href="tel:510-598-4921"
                                        className="hover:text-secondary transition"
                                    >
                                        (510) 598-4921
                                    </a>
                                </p>
                                <p className="flex items-center">
                                    <Printer className="text-secondary h-6 w-6 mr-3" />
                                    <span>(510) 973-2393 (Fax for Referrals)</span>
                                </p>
                                <p className="flex items-center">
                                    <Mail className="text-secondary h-6 w-6 mr-3" />
                                    <a
                                        href="mailto:contact@trivalleyclinic.com"
                                        className="hover:text-secondary transition"
                                    >
                                        contact@trivalleyclinic.com
                                    </a>
                                </p>
                            </div>
                        </Card>

                        {/* Right - Form */}
                        <Card className="p-8 rounded-2xl shadow-lg border-0">
                            <h3 className="text-xl font-semibold text-accent dark:accent mb-6">
                                Send Us a Message
                            </h3>
                            <form className="space-y-4">
                                <div>
                                    <Label htmlFor="name">Name</Label>
                                    <TextInput
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="Your full name"
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <TextInput
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        required
                                        rows={4}
                                        placeholder="Type your message..."
                                        className="mt-2"
                                    />
                                </div>
                                <Button outline
                                    type="submit"
                                    size="lg"
                                    className="px-8 py-3 text-lg font-semibold shadow-lg m-auto"
                                >
                                    Submit Request
                                </Button>
                            </form>

                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
