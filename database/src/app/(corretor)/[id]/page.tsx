// src/app/(corretor)/[id]/page.tsx
import React from 'react';

interface CorretorPageProps {
  params: {
    id: string;
  };
}

export default async function CorretorPage({ params }: CorretorPageProps) {
  const { id } = params;

  // Buscar dados do corretor e leads associados
  let corretor;
  try {
    const response = await fetch(`http://localhost:3000/api/corretores/${id}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar dados do corretor');
    }
    corretor = await response.json();
  } catch (error) {
    console.error('Erro:', error);
    return (
      <div className="p-6 bg-red-50 text-red-800 rounded-lg">
        <h1 className="text-2xl font-bold">Erro</h1>
        <p>Não foi possível carregar os dados do corretor.</p>
      </div>
    );
  }

  // Buscar leads disponíveis
  let leadsDisponiveis;
  try {
    const response = await fetch('http://localhost:3000/api/leads');
    if (!response.ok) {
      throw new Error('Erro ao buscar leads disponíveis');
    }
    leadsDisponiveis = await response.json();
  } catch (error) {
    console.error('Erro:', error);
    return (
      <div className="p-6 bg-red-50 text-red-800 rounded-lg">
        <h1 className="text-2xl font-bold">Erro</h1>
        <p>Não foi possível carregar os leads disponíveis.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-white shadow-md p-6 rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Painel do Corretor</h1>
        <p className="text-gray-600 mt-2">Bem-vindo, {corretor.nome}!</p>
      </header>

      {/* Leads Associados */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Leads Associados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corretor.CorretorLead.map((corretorLead: { id: string; Lead: { status: string; name: string; email: string; phone: string; plano_saude?: string; formacao_academica?: string; }; }) => (
            <div
              key={corretorLead.id}
              className={`p-6 rounded-lg shadow-md ${
                corretorLead.Lead.status === 'Azul'
                  ? 'bg-blue-50 border-l-4 border-blue-500'
                  : corretorLead.Lead.status === 'Laranja'
                  ? 'bg-yellow-50 border-l-4 border-yellow-500'
                  : 'bg-red-50 border-l-4 border-red-500'
              }`}
            >
              <h3 className="text-xl font-bold text-gray-800">{corretorLead.Lead.name}</h3>
              <p className="text-gray-600 mt-2">{corretorLead.Lead.email}</p>
              <p className="text-gray-600">{corretorLead.Lead.phone}</p>
              <div className="mt-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    corretorLead.Lead.status === 'Azul'
                      ? 'bg-blue-100 text-blue-800'
                      : corretorLead.Lead.status === 'Laranja'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {corretorLead.Lead.status}
                </span>
              </div>
              {corretorLead.Lead.plano_saude && (
                <p className="text-gray-600 mt-2">
                  <span className="font-semibold">Plano de Saúde:</span> {corretorLead.Lead.plano_saude}
                </p>
              )}
              {corretorLead.Lead.formacao_academica && (
                <p className="text-gray-600 mt-2">
                  <span className="font-semibold">Formação Acadêmica:</span>{' '}
                  {corretorLead.Lead.formacao_academica}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Leads Disponíveis */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Leads Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadsDisponiveis.map((lead: { id: string; name: string; email: string; phone: string; }) => (
            <div key={lead.id} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">{lead.name}</h3>
              <p className="text-gray-600 mt-2">{lead.email}</p>
              <p className="text-gray-600">{lead.phone}</p>
              <button
                onClick={async () => {
                  await fetch('/api/corretor-leads', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ corretorId: id, leadId: lead.id }),
                  });
                  window.location.reload(); // Recarregar a página para atualizar a lista
                }}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Associar Lead
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}