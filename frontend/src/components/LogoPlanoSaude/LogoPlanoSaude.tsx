import Image from 'next/image';

interface LogoPlanoSaudeProps {
  src: string;
  alt: string;
}

export default function LogoPlanoSaude({ src, alt }: LogoPlanoSaudeProps) {
  return (
    <div className="text-center bg-white p-7 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <div className="relative w-30 h-28 mx-auto flex justify-center items-center">
        <Image
          src={src}
          alt={alt}
          width={150} // Definindo largura fixa
          height={100} // Definindo altura fixa
          className="rounded-lg object-contain"
        />
      </div>
    </div>
  );
}
