"use client";

import React from 'react';

const whatsappNumber = "5511967086965"; // Coloque seu número de WhatsApp aqui

const Cta = () => {
  return (
    <section className="bg-[#FBEED9] py-16 px-6 md:px-12 m-4 text-black relative z-20 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-left space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center">
          <p className="text-xl md:text-4xl mb-6 md:mb-0 md:mr-6">
            Pronto para transformar sua ideia em realidade?
          </p>
        </div>

        <button
          className="md:px-6 px-16 py-3 bg-orange-500 text-white rounded-md text-sm font-semibold hover:bg-orange-400 transition duration-300 md:text-lg"
          onClick={() =>
            window.open(`https://wa.me/${whatsappNumber}`, "_blank")
          }
        >
          CONTRATE JÁ!
        </button>
      </div>
    </section>
  );
};

export default Cta;
