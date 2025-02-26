// src/app/components/AddClientForm.tsx
import React, { useState } from 'react';


import { Lead } from '@/app/types/types';
import { addLead } from '@/app/utils/api';

const AddClientForm: React.FC = () => {
  const [formData, setFormData] = useState<Omit<Lead, 'id'>>({
    nome: '',
    email: '',
    telefone: '',
    status: 'novo',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addLead(formData);
    setFormData({ nome: '', email: '', telefone: '', status: 'novo' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="text"
        placeholder="Nome"
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        className="p-2 border rounded mr-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="p-2 border rounded mr-2"
      />
      <input
        type="text"
        placeholder="Telefone"
        value={formData.telefone}
        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Adicionar Cliente
      </button>
    </form>
  );
};

export default AddClientForm;