"use client";
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-[rgb(223,242,255)] py-40 -m-20 text-center md:text-left">
        <div className="container justify-items-center mx-auto m-5 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-[#055B87]">
          {/* Coluna 1 */}
          <div>
            <h2 className="text-3xl font-bold">DM</h2>
            <p className="mt-2 text-sm font-extralight">AGÊNCIA DE MARKETING</p>
            <p className="mt-2 text-gray-700 text-sm">
              Experiência avançada em design e desenvolvimento web.
            </p>
          </div>
  
          {/* Coluna 2 */}
          <div>
            <h3 className="font-semibold mb-2">Mapa do site</h3>
            <ul className="text-gray-700 space-y-1">
            <li>
                <a href="#home" className="hover:text-[#055B87]">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#055B87]">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#055B87]">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#055B87]">
                  Projetos
                </a>
              </li>
            </ul>
          </div>
  
          {/* Coluna 3 */}
          <div>
            <h3 className="font-semibold mb-2">Contato</h3>
            <ul className="text-gray-700 space-y-1">
              <li>dm@agenciadm.com.br</li>
              <li>55 11 5555-5555</li>
              <li>Rua DM, 01 - São Paulo / SP</li>
            </ul>
          </div>
        </div>
  
        {/* Redes Sociais */}
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https:/www.instagram.com"
            aria-label="Instagram"
            className="text-[#F08A5D] hover:text-gray-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https:/www.github.com"
            aria-label="Github"
            className="text-[#F08A5D] hover:text-gray-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://wa.me/seu-numero"
            aria-label="WhatsApp"
            className="text-[#F08A5D] hover:text-gray-500"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
  
        {/* Copyright */}
        <div className="mt-8 text-gray-700 text-sm text-center">
          Site criado por Anne&Ge para portfólio. <br />
          Copyright: {currentYear}
        </div>
      </footer>
    );
  };
  




