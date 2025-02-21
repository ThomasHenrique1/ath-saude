import React from "react";
import FaixaEtaria from "../FaixaEtaria/FaixaEtaria";

const AgeGroupsSection = () => {
  const ageGroups = [
    {
      src: "/images/criancas.jpg",
      alt: "Crianças",
      label: "Planos para Crianças",
    },
    {
      src: "/images/adultos.jpg",
      alt: "Adultos",
      label: "Planos para Adultos",
    },
    {
      src: "/images/idoso.jpg",
      alt: "Idosos",
      label: "Planos para Idosos",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {ageGroups.map((group, index) => (
        <FaixaEtaria key={index} src={group.src} alt={group.alt} label={group.label} />
      ))}
    </div>
  );
};

export default AgeGroupsSection;