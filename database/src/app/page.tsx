// src/app/page.tsx
'use client'; // Marque como Client Component para usar hooks e interatividade
import Link from 'next/link';
import { FaUser, FaChartLine, FaPlus, FaSignInAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Home() {
  const [totalLeads, setTotalLeads] = useState(0);
  const [corretoresAtivos, setCorretoresAtivos] = useState(0);
  const [leadsDisponiveis, setLeadsDisponiveis] = useState(0);

  // Buscar estatísticas do banco de dados
  useEffect(() => {
    const fetchEstatisticas = async () => {
      try {
        // Buscar total de leads
        const totalLeadsResponse = await fetch('/api/leads/total');
        const totalLeadsData = await totalLeadsResponse.json();
        setTotalLeads(totalLeadsData.total);

        // Buscar total de corretores ativos
        const corretoresAtivosResponse = await fetch('/api/corretores/ativos');
        const corretoresAtivosData = await corretoresAtivosResponse.json();
        setCorretoresAtivos(corretoresAtivosData.total);

        // Buscar total de leads disponíveis
        const leadsDisponiveisResponse = await fetch('/api/leads/disponiveis');
        const leadsDisponiveisData = await leadsDisponiveisResponse.json();
        setLeadsDisponiveis(leadsDisponiveisData.total);
      } catch (error) {
        console.error('Erro ao buscar estatísticas:', error);
      }
    };

    fetchEstatisticas();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Cabeçalho */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Bem-vindo ao Sistema de Corretores</h1>
        <p className="text-gray-600 mt-2">
          Gerencie seus leads e corretores de forma eficiente e profissional.
        </p>
      </header>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaChartLine className="text-4xl text-blue-500 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">{totalLeads}</h2>
          <p className="text-gray-600">Total de Leads</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaUser className="text-4xl text-green-500 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">{corretoresAtivos}</h2>
          <p className="text-gray-600">Corretores Ativos</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaChartLine className="text-4xl text-purple-500 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">{leadsDisponiveis}</h2>
          <p className="text-gray-600">Leads Disponíveis</p>
        </div>
      </div>

      {/* Links Rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/login"
          className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors text-center"
        >
          <FaSignInAlt className="text-4xl mx-auto" />
          <h2 className="text-xl font-bold mt-4">Acessar Área de Login</h2>
          <p className="mt-2">Faça login para acessar o painel do corretor.</p>
        </Link>
        <Link
          href="/corretor"
          className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:bg-green-600 transition-colors text-center"
        >
          <FaUser className="text-4xl mx-auto" />
          <h2 className="text-xl font-bold mt-4">Acessar Painel do Corretor</h2>
          <p className="mt-2">Gerencie seus leads e clientes.</p>
        </Link>
        <Link
          href="/leads/cadastrar"
          className="bg-purple-500 text-white p-6 rounded-lg shadow-md hover:bg-purple-600 transition-colors text-center"
        >
          <FaPlus className="text-4xl mx-auto" />
          <h2 className="text-xl font-bold mt-4">Cadastrar Novo Cliente</h2>
          <p className="mt-2">Adicione novos Clientes ao sistema.</p>
        </Link>
      </div>
    </div>
  );
}