import React from "react";
import LogoPlanoSaude from "../LogoPlanoSaude/LogoPlanoSaude";

{/*/images/logoPlanos/*/}
const HealthPlansSection = () => {
  const logos = [
    { src: "/images/logoPlanos/hapvida.png", alt: "Hapvida" },
    { src: "/images/logoPlanos/notredame.png", alt: "NotreDame" },
    { src: "/images/logoPlanos/portoseguro.png", alt: "Porto Seguro" },
    { src: "/images/logoPlanos/unimedseguros.webp", alt: "Unimed Seguros" },
    { src: "/images/logoPlanos/medsenior.webp", alt: "Med Senior" },
    { src: "/images/logoPlanos/qualicorp.png", alt: "Qualicorp" },
    { src: "/images/logoPlanos/unimed.png", alt: "Unimed" },
    { src: "/images/logoPlanos/amil.png", alt: "Amil" },
    { src: "/images/logoPlanos/bradescosaude.png", alt: "Bradesco Saúde" },
    { src: "/images/logoPlanos/sulamerica.png", alt: "SulAmérica" },
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