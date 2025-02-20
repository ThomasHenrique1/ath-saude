import Image from 'next/image';

interface LogoPlanoSaudeProps {
  src: string;
  alt: string;
}

export default function LogoPlanoSaude({ src, alt }: LogoPlanoSaudeProps) {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <div className="relative w-40 h-28 mx-auto flex justify-center items-center">
        <Image
          src={src}
          alt={alt}
          width={160} // Definindo largura fixa
          height={120} // Definindo altura fixa
          className="rounded-lg object-contain"
        />
      </div>
      {/* <p className="mt-4 text-gray-800 font-semibold text-lg">{alt}</p> */} {/* Se você quiser exibir o nome da logo */}
    </div>
  );
}
