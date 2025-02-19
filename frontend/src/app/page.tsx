'use client'; // Adicione isso no topo do arquivo para usar hooks do React

import { useState } from 'react';
import api from '../services/api';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    maritalStatus: '',
    hasChildren: '',
    hasHealthPlan: '',
    currentPlan: '',
    hasCNPJ: '',
    serviceType: 'consultoria', // Valor padrão
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/leads', formData);
      console.log('Lead enviado com sucesso:', response.data);
      alert('Lead cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar lead:', error);
      alert('Erro ao cadastrar lead. Tente novamente.');
    }
  };

  return (
    <div className="p-4">
      {/* Seção: Quem Somos */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quem Somos</h2>
        <p>
          Somos consultores autônomos especializados em planos de saúde, com X anos de experiência e mais de Y clientes atendidos.
        </p>
        {/* Adicione fotos e nomes dos consultores aqui */}
      </section>

      {/* Seção: Quais Planos Trabalhamos */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quais Planos Trabalhamos?</h2>
        <p>
          Trabalhamos com as principais operadoras do mercado, oferecendo planos individuais, familiares, empresariais e por adesão.
        </p>
        {/* Adicione uma tabela ou lista comparativa de planos aqui */}
      </section>

      {/* Seção: Como Trabalhamos */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Como Trabalhamos?</h2>
        <p>
          Nosso processo é simples e transparente: solicite uma cotação, analisamos seu perfil, recomendamos o melhor plano e auxiliamos na contratação.
        </p>
        <p>
          Oferecemos suporte pós-venda para garantir sua satisfação.
        </p>
      </section>

      {/* Formulário de Contato */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Solicite uma Cotação</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Nome Completo:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Ex: João da Silva"
              required
            />
          </div>
          <div>
            <label className="block">Idade:</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block">E-mail:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block">Telefone (WhatsApp):</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block">Estado Civil:</label>
            <select
              value={formData.maritalStatus}
              onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="">Selecione</option>
              <option value="solteiro">Solteiro(a)</option>
              <option value="casado">Casado(a)</option>
              <option value="divorciado">Divorciado(a)</option>
              <option value="viuvo">Viúvo(a)</option>
            </select>
          </div>
          <div>
            <label className="block">Possui filhos?</label>
            <select
              value={formData.hasChildren}
              onChange={(e) => setFormData({ ...formData, hasChildren: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="">Selecione</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
              <option value="pretendo">Pretendo ter em breve</option>
            </select>
          </div>
          <div>
            <label className="block">Já possui um plano de saúde?</label>
            <select
              value={formData.hasHealthPlan}
              onChange={(e) => setFormData({ ...formData, hasHealthPlan: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="">Selecione</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>
          {formData.hasHealthPlan === 'sim' && (
            <div>
              <label className="block">Qual plano você possui?</label>
              <input
                type="text"
                value={formData.currentPlan}
                onChange={(e) => setFormData({ ...formData, currentPlan: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
          )}
          <div>
            <label className="block">Tem CNPJ ou MEI ativo?</label>
            <select
              value={formData.hasCNPJ}
              onChange={(e) => setFormData({ ...formData, hasCNPJ: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="">Selecione</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>
          <div>
            <label className="block">Escolha o tipo de serviço:</label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full p-2 border rounded"
              required
            >
              <option value="consultoria">Consultoria (Custo variável)</option>
              <option value="contratar">Contratar um Plano</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}