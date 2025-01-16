import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <section id='services' className="flex flex-col min-h-screen ">    
      <div className="py-16 bg-gray-100 flex-grow">
        <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#055B87] font-merriweather p-2">O que podemos fazer pela sua empresa?</h2>

          <p className="text-gray-600 text-lg">Nossos serviços são personalizados para atender às necessidades de cada cliente. Confira abaixo o que podemos fazer por você:</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center max-w-5xl mx-auto">

            <div className="w-80 p-8 border rounded-lg bg-white shadow-lg">
              <div className="w-8 h-4 bg-orange-500 flex items-center justify-center mx-auto">
                <Image src="/assets/icons/digital-strategy.png" alt="Estratégia de Marketing" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold mt-4">Estratégia de Marketing</h3>
              <p className="mt-2 text-gray-600 text-left">Estratégias de marketing personalizadas que alinham com os objetivos de negócios do cliente.</p>
            </div>
            <div className="w-80 p-8 border rounded-lg bg-white shadow-lg">
              <div className="w-8 h-4 bg-orange-500 flex items-center justify-center mx-auto">
                <Image src="/assets/icons/logo-design.png" alt="Criação de design" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold mt-4">Criação de design</h3>
              <p className="mt-2 text-gray-600 text-left">Serviços de design gráfico como logotipos, sites, materiais impressos e anúncios.</p>
            </div>
            <div className="w-80 p-8 border rounded-lg bg-white shadow-lg">
              <div className="w-8 h-4 bg-orange-500 flex items-center justify-center mx-auto">
                <Image src="/assets/icons/seo.png" alt="SEO" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold mt-4">SEO</h3>
              <p className="mt-2 text-gray-600 text-left">Pesquisa de palavras-chave, otimização on-page, criação de backlinks para aumentar a visibilidade online e atrair tráfego orgânico.</p>
            </div>
            <div className="w-80 p-8 border rounded-lg bg-white shadow-lg">
              <div className="w-8 h-4 bg-orange-500 flex items-center justify-center mx-auto">
                <Image src="/assets/icons/social-media.png" alt="Gestão de Mídias Sociais" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold mt-4">Gestão de Mídias Sociais</h3>
              <p className="mt-2 text-gray-600 text-left">Ajudamos a construir e manter uma presença ativa e envolvente nas plataformas sociais. </p>
              
            </div>
          </div>
        </div>
      </div>        
    </section>
  );
};

export default Services;
