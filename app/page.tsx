import { Header } from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Services from "./components/services/Services";
import Ourteam from "./components/team/OurTeam";
import Virtual from "./components/virtual/virtual";

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Ourteam />
      <Virtual />


    </>
  );
}
