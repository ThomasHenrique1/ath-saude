/* eslint-disable @next/next/no-img-element */
interface BannerHeroProps {
  title: string;
  description: string;
  image?: string; // Imagem opcional
  overlayColor?: string; // Cor da sobreposição (opcional)
  textColor?: string; // Cor do texto (opcional)
}

export default function BannerHero({
  title,
  description,
  image,
  overlayColor = "bg-black opacity-50", // Default (sem imagem)
  textColor = "text-white" // Default (cor do texto branca)
}: BannerHeroProps) {
  return (
    <div className="relative h-64 flex items-center justify-center bg-blue-900 text-white mb-8">
      {/* Se a imagem for passada, ela será exibida */}
      {image && (
        <img
          src={image}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm opacity-80"
        />
      )}

      {/* Overlay personalizado, mas com cor padrão se não for fornecido */}
      <div className={`absolute inset-0 ${overlayColor}`}></div>

      <div className={`relative z-10 text-center ${textColor}`}>
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
}
