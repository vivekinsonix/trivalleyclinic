"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primaryteal dark:bg-primaryteal py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo */}
        <div>
          <Link href="/home">
             <span className="self-center hidden lg:block text-accent whitespace-nowrap text-xl font-semibold dark:text-accent headingclass uppercase">Tri-Valley-Clinic</span>
          </Link>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-accent mb-3">
            LOCATIONS
          </h4>
          <ul className="space-y-1 text-accent dark:text-accent text-sm">
            <li><Link href="/contact/#locations">Los Angeles</Link></li>
            <li><Link href="/contact/#locations">Tucson</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-accent dark:text-accent mb-3">
            SERVICES
          </h4>
          <ul className="space-y-1 text-accent dark:text-accent text-sm">
            <li><Link href="#services">Psychiatry </Link></li>
            <li><Link href="#services">Weight Loss</Link></li>
            <li><Link href="#services">IV Infusion </Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-accent dark:text-accent mb-3">
            COMPANY
          </h4>
          <ul className="space-y-1 text-accent dark:text-accent text-sm">
            <li><Link href="#doctors">Meet The Team</Link></li>
            <li><Link href="/about-us">Our Values</Link></li>
            <li><Link href="/policies">Policies</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-accent dark:text-accent mb-3">
            RESOURCES
          </h4>
          <ul className="space-y-1 text-accent dark:text-accent text-sm">
            <li><Link href="/contact/#faqs">Frequently Asked Questions</Link></li>
        
          </ul>
        </div>
      </div>
      {/* Contact + Flag */}
      <div className="container mx-auto px-6 mt-24 flex flex-col md:flex-row items-center justify-center gap-6 ">
        <p className="text-sm text-accent dark:text-accent">
       
          <a
            href="insonix.com"
            className="text-accent hover:underline"
          >
          Tri Valley Clinic® Copyright 2025. 
All rights reserved.
          </a>
        </p>
        
      </div>
    </footer>
  );
}
