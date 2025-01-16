"use client";

import React from 'react';

const Steps = () => {
  // Array de objetos contendo as informações de cada etapa (número, título e descrição)
  const etapas = [
    { numero: '1', titulo: 'Briefing', descricao: 'O guia que direciona o projeto, alinhando metas e visão do cliente.' },
    { numero: '2', titulo: 'Ideias', descricao: 'O combustível da inovação, transformando possibilidades em realidades.' },
    { numero: '3', titulo: 'Planejamento', descricao: 'Traçar o caminho que leva ideias aos resultados.' },
    { numero: '4', titulo: 'Alinhamento', descricao: 'O processo de alinhamento começa no briefing e continua para ajustar estratégias.' },
    { numero: '5', titulo: 'Entrega', descricao: 'A materialização de um trabalho bem executado e alinhado às expectativas do cliente.' },
    { numero: '6', titulo: 'Feedback', descricao: 'É nossa bússola no pós-venda, garantindo suporte e atenção personalizada a cada detalhe.' },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Título principal da seção */}
      <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#055B87] font-merriweather p-2">Etapas da DM</h2>
      <p className="text-gray-600 md:text-lg">Conheça o nosso processo de trabalho e veja como podemos transformar suas ideias em realidade.</p>
      </div>

      {/* Grid centralizada com largura máxima */}
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {etapas.map((etapa, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Número da etapa */}
            <div className="text-4xl font-bold text-orange-500">{etapa.numero}</div>
            {/* Conteúdo da etapa */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{etapa.titulo}</h3>
              <p className="text-gray-600">{etapa.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
