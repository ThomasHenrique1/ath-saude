// src/app/components/ClientCard.tsx
import { Lead } from '@/app/types/types';
import React from 'react';


const ClientCard: React.FC<{ lead: Lead }> = ({ lead }) => {
  const getStatusColor = () => {
    switch (lead.status) {
      case 'novo':
        return 'bg-blue-500';
      case 'em_andamento':
        return 'bg-yellow-500';
      case 'negado':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className={`p-4 rounded-lg shadow-md ${getStatusColor()} text-white`}>
      <h2 className="text-xl font-bold">{lead.nome}</h2>
      <p>{lead.email}</p>
      <p>{lead.telefone}</p>
      <p>Status: {lead.status}</p>
      {lead.plano_saude && <p>Plano de Saúde: {lead.plano_saude}</p>}
      {lead.formacao_academica && <p>Formação Acadêmica: {lead.formacao_academica}</p>}
    </div>
  );
};

export default ClientCard;