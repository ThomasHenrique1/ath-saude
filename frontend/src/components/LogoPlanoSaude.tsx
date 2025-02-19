import Image from 'next/image';

interface LogoPlanoSaudeProps {
  src: string;
  alt: string;
}

export default function LogoPlanoSaude({ src, alt }: LogoPlanoSaudeProps) {
  return (
    <div className="text-center bg-white p-4 rounded-lg shadow-md">
      <Image
        src={src}
        alt={alt}
        width={150}
        height={100}
        className="rounded-lg"
      />
    </div>
  );
}