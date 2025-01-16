"use client";

import Home from "@/components/Home";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testmonials";
import Cta from "@/components/Cta";

export default function HomePage() {
  return (
    <>     
      <Home />
      <Services />
      <About /> 
      <Projects />
      <Steps />
      <Testimonials />
      <Cta />
     
    </>
  );
}
