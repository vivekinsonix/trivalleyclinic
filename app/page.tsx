import ContactSection from "./components/contacts/Contacts";
import Footer from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Services from "./components/services/Services";
import Ourteam from "./components/team/OurTeam";
import Virtual from "./components/virtual/virtual";
import WhatWeTreat from "./components/whatwetreat/WhatWeTreat";

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Ourteam />
      <Virtual />
      <WhatWeTreat />
      <ContactSection />
      <Footer />


    </>
  );
}
