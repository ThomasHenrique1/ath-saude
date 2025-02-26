/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/corretor/perfil/page.tsx
'use client';
import React, { useState } from 'react';

export default function PerfilPage() {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/corretores/alterar-senha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'corretor@example.com', senhaAtual, novaSenha }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensagem('Senha alterada com sucesso!');
      } else {
        setMensagem(data.error || 'Erro ao alterar senha');
      }
    } catch (error) {
      setMensagem('Erro ao conectar ao servidor');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Alterar Senha</h1>
      <form onSubmit={handleSubmit} className="max-w-sm">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Senha Atual</label>
          <input
            type="password"
            value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Nova Senha</label>
          <input
            type="password"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Alterar Senha
        </button>
        {mensagem && <p className="mt-4 text-sm text-gray-600">{mensagem}</p>}
      </form>
    </div>
  );
}