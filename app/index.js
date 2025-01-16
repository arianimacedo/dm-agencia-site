"use client";

import Home from "../src/components/Home";
import Services from "../src/components/Services";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Steps from "../src/components/Steps";
import Testimonials from "../src/components/Testmonials";
import Cta from "../src/components/Cta";

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
