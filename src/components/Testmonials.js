import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  
  const depoimentos = [
    {
      nome: 'Jordana Assis',
      empresa: 'Doo-Doo Clínica Veterinária',
      mensagem: 'O site ficou incrível! A experiência do usuário está fluida, e já estou recebendo ótimos feedbacks dos meus clientes. Agradeço pela dedicação!',
      imagem: '/assets/people/image-1.png', // Ajuste o caminho conforme necessário
    },
    {
      nome: 'Tiago Oliveira',
      empresa: 'Imobiliária do Bairro',
      mensagem: 'Estou impressionado com os resultados! A estratégia de marketing foi certeira e estou vendo um crescimento constante no meu público. Excelente trabalho!',
      imagem: '/assets/people/image-2.png', // Ajuste o caminho conforme necessário
    }
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Container geral com flex para centralizar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center max-w-screen-lg mx-auto">
        {/* Título da seção - ficará à esquerda no desktop */}
        <div className="mb-8 md:mb-0 md:mr-12 md:flex-shrink-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#055B87] font-merriweather p-2">
            O que dizem os
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#055B87] font-merriweather p-2">
            clientes da DM?
          </h2>
        </div>
        {/* Container dos depoimentos - ficará à direita no desktop */}
        <div className="grid grid-cols-1 gap-8 md:w-1/2">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="flex flex-col bg-blue-50 p-6 rounded-lg shadow-md ">
              {/* Conteúdo do depoimento */}
              <div className="relative mb-4">
                <span className="text-6xl text-orange-500 absolute top-[-20px] left-[-10px]">“</span>
                <p className="text-lg text-gray-800 mb-2 pl-6">{depoimento.mensagem}</p>
                <span className="text-6xl text-orange-500 absolute bottom-[-40px] right-[-10px]">”</span>
              </div>
              {/* Imagem do cliente */}
              <div className="flex items-center mt-4">
                <Image 
                  src={depoimento.imagem} 
                  alt={`Foto de ${depoimento.nome}`} 
                  width={64} 
                  height={64} 
                  className="rounded-full mr-8" 
                />
                {/* Nome e empresa do cliente */}
                <div className="flex flex-col">
                  <p className="font-bold text-[#055B87]">{depoimento.nome}</p>
                  <p className="text-sm text-gray-500">{depoimento.empresa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
