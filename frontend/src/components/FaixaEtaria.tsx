import Image from 'next/image';

interface FaixaEtariaProps {
  src: string;
  alt: string;
  label: string;
}

export default function FaixaEtaria({ src, alt, label }: FaixaEtariaProps) {
  return (
    <div className="text-center bg-white p-4 rounded-lg shadow-md">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={200}
        className="rounded-lg"
      />
      <p className="mt-2 text-gray-800 font-medium">{label}</p>
    </div>
  );
}