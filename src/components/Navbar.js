"use client";

import { useState } from "react";
import ClientButton from "./ClientButton";
import Link from "next/link";

export default function Navbar() {
  const whatsappNumber = "5511967086965"; // Coloque seu número de WhatsApp aqui
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 uppercase fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-[#055B87] text-2xl font-bold">DM</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-[#055B87] focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <div className={`${isOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-6`}>
          <Link legacyBehavior href="#home">
            <a className="text-[#055B87] block mt-4 md:inline-block md:mt-0 hover:text-orange-400 transition duration-300 cursor-pointer">
              Home
            </a>
          </Link>
          <Link legacyBehavior href="#services">
            <a className="text-[#055B87] block mt-4 md:inline-block md:mt-0 hover:text-orange-400 transition duration-300 cursor-pointer">
              Serviços
            </a>
          </Link>
          <Link legacyBehavior href="#about">
            <a className="text-[#055B87] block mt-4 md:inline-block md:mt-0 hover:text-orange-400 transition duration-300 cursor-pointer">
              Sobre
            </a>
          </Link>
          <Link legacyBehavior href="#projects">
            <a className="text-[#055B87] block mt-4 md:inline-block md:mt-0 hover:text-orange-400 transition duration-300 cursor-pointer">
              Projetos
            </a>
          </Link>
        </div>
        <div className="hidden md:inline-block">
          <ClientButton whatsappNumber={whatsappNumber} />
        </div>
      </div>
    </nav>
  );
}