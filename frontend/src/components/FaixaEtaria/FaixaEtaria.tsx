import Image from 'next/image';

interface FaixaEtariaProps {
  src: string;
  alt: string;
  label: string;
}

export default function FaixaEtaria({ src, alt, label }: FaixaEtariaProps) {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <div className="relative w-full h-60 overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          width={300} // Largura fixa
          height={200} // Altura fixa
          className="rounded-lg object-cover w-full h-full"
          priority // Adicionado para carregar a imagem com prioridade
        />
      </div>
      <p className="mt-4 text-blue-900 font-semibold text-lg">{label}</p>
    </div>
  );
}