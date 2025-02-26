// src/app/components/ClientList.tsx
import { Lead } from '@/app/types/types';
import React from 'react';
import ClientCard from '../ClientCard/ClientCard';


interface ClientListProps {
  leads: Lead[];
}

const ClientList: React.FC<ClientListProps> = ({ leads }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {leads.map((lead) => (
        <ClientCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
};

export default ClientList;