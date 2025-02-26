// src/app/components/CorretorPanel.tsx
import { Lead } from '@/app/types/types';
import { fetchLeads } from '@/app/utils/api';
import React, { useEffect, useState } from 'react';
import ClientList from '../ClientList/ClientList';



const CorretorPanel: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const getLeads = async () => {
      const data = await fetchLeads();
      setLeads(data);
    };
    getLeads();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Painel do Corretor</h1>
      <ClientList leads={leads} />
    </div>
  );
};

export default CorretorPanel;