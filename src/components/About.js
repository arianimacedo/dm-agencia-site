"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen relative flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/background/dm-background-1.png)" }}
    >
      <div className="absolute inset-0 bg-transparent opacity-50"></div>
      <div className="relative z-10 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#055B87] font-merriweather p-2">
            Sobre a DM
          </h2>
          <p className="text-black text-lg md:text-xl lg:text-2xl m-4 text-left">
            Na DM, somos apaixonados por transformar visões em realidades
            digitais. Como uma agência de marketing digital líder, dedicamo-nos
            a ajudar empresas de todos os tamanhos a prosperar no ambiente
            online dinâmico e competitivo de hoje.
          </p>
          <p className="text-black text-lg md:text-xl lg:text-2xl m-4 text-left">
            Com uma equipe de especialistas em SEO, gestão de mídias sociais,
            branding, criação de conteúdo e campanhas publicitárias, fornecemos
            soluções personalizadas que se alinham perfeitamente com os
            objetivos de cada cliente. Nosso compromisso com a inovação,
            criatividade e resultados mensuráveis garante que suas campanhas não
            só alcancem, mas superem as expectativas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
