import '../app/globals.css';
import Image from 'next/image';
import ClientButton from '../components/ClientButton';

export default function Home() {
  return (
    <div id="home" className="h-screen relative flex flex-col items-center justify-center text-center">
      {/* Imagem de fundo otimizada */}
      <Image
        src="/assets/background/banner.jpg"
        alt="DM Banner"
        fill
        quality={100}
        className="absolute inset-0 z-0"
        style={{ objectFit: 'cover' }} // Usando o estilo inline para ajustar o objeto
      />

      {/* Gradiente de sobreposição */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-400 opacity-70 z-1"></div>

      {/* Conteúdo acima do gradiente e da imagem */}
      <div className="relative z-10">
        <h1 className="text-white text-5xl md:text-6xl font-merriweather fade-in">Agência DM</h1>
        <p className="text-white text-lg my-4 md:text-4xl p-4 fade-in-delay">
          Criatividade e inovação para a sua empresa
        </p>
        <ClientButton whatsappNumber="5511967086965" />
      </div>
    </div>
  );
}
