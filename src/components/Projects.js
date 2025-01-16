"use client";

import React, { useState } from "react";
import Image from "next/image";

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null); // Estado para rastrear o card ativo

  const toggleTextVisibility = (index) => {
    setActiveCard(activeCard === index ? null : index); // Alterna entre abrir e fechar o card clicado
  };

  const projects = [
    {
      id: 1,
      title: "Website",
      description:
        "Um website é a vitrine digital que conecta sua marca ao mundo, desenvolvemos sites responsivos e otimizados para SEO.",
      image: "/assets/projects/landing-page2.png",
    },
    {
      id: 2,
      title: "SEO",
      description:
        "Estratégias para melhorar o posicionamento do site nos resultados de busca orgânica, aumentando a visibilidade da marca.",
      image: "/assets/projects/seo.png", 
    },
    {
      id: 3,
      title: "Identidade Visual ",
      description:
        "Criação de logotipos, cartões de visita, banners, entre outros materiais gráficos para fortalecer a identidade da marca.",
      image: "/assets/projects/identidade-visual.png", 
    },
    {
      id: 4,
      title: "Gestão de Mídias Sociais",
      description:
        "Transforme sua presença digital em resultados concretos. Com gestão estratégica, sua marca alcança o público certo .",
      image: "/assets/projects/social-media.png", 
    },

  ];

  return (
   <section id="projects" className="flex flex-col min-h-screen">
     <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#055B87] font-merriweather p-2">Projetos Recentes</h2>
        <p className="text-gray-600 text-lg"> Explore nossos projetos recentes e veja como podemos transformar suas ideias em realidade.</p>
       
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="border rounded-lg p-5 bg-white shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg bg-blue-50"
              />
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              {activeCard === index && (
                <p className="text-gray-600 text-left mt-2">
                  {project.description}
                </p>
              )}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => toggleTextVisibility(index)}
                  className="text-orange-500"
                >
                  {activeCard === index ? "Fechar" : "Veja mais"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </section>
  );
};

export default Projects;
