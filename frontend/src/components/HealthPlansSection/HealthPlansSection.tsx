import React from "react";
import LogoPlanoSaude from "../LogoPlanoSaude/LogoPlanoSaude";

const HealthPlansSection = () => {
  const logos = [
    { src: "/images/hapvida.png", alt: "Hapvida" },
    { src: "/images/notredame.png", alt: "NotreDame" },
    { src: "/images/portoseguro.png", alt: "Porto Seguro" },
    { src: "/images/unimedseguros.webp", alt: "Unimed Seguros" },
    { src: "/images/medsenior.webp", alt: "Med Senior" },
    { src: "/images/qualicorp.png", alt: "Qualicorp" },
    { src: "/images/unimed.png", alt: "Unimed" },
    { src: "/images/amil.png", alt: "Amil" },
    { src: "/images/bradescosaude.png", alt: "Bradesco Saúde" },
    { src: "/images/sulamerica.png", alt: "SulAmérica" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {logos.map((logo, index) => (
        <LogoPlanoSaude key={index} src={logo.src} alt={logo.alt} />
      ))}
    </div>
  );
};

export default HealthPlansSection;