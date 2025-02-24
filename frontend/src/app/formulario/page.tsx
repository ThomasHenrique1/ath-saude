'use client';

import { useState } from 'react';
import api from '../../services/api';
import { FormField, AttentionMessage,} from '../../components/Formulario';
import ModalMessage from '@/components/Formulario/Modal';
import FormDescription from '../../components/Formulario/FormDescription';
import { FiUser, FiCalendar, FiMail, FiPhone, FiBriefcase, FiCheckSquare, FiFileText, FiMessageSquare } from 'react-icons/fi';

export default function Formulario() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    hasCNPJ: false,
    profession: '',
    hasHealthPlan: false,
    contactPreference: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await api.post('/leads', formData);
      console.log('Lead enviado com sucesso:', response.data);

      // Configura o modal de sucesso
      setModalTitle('Sucesso!');
      setModalMessage('Cadastro realizado com sucesso. Em breve, um de nossos consultores entrará em contato.');
      setModalType('success');
      setIsModalOpen(true);

      // Limpa os campos do formulário após o envio bem-sucedido
      setFormData({
        name: '',
        age: '',
        email: '',
        phone: '',
        hasCNPJ: false,
        profession: '',
        hasHealthPlan: false,
        contactPreference: '',
      });
    } catch (error) {
      console.error('Erro ao enviar lead:', error);

      // Configura o modal de erro
      setModalTitle('Erro');
      setModalMessage('Erro ao se cadastrar! Tente novamente.');
      setModalType('error');
      setIsModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Solicitar Cotação</h1>

        {/* Descrição do Formulário */}
        <FormDescription />

        {/* Campo de Atenção */}
        <AttentionMessage />

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="Nome Completo:"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: João da Silva"
            required
            icon={<FiUser className="inline-block mr-2" />}
          />

          <FormField
            label="Idade:"
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder="Ex: 30"
            required
            icon={<FiCalendar className="inline-block mr-2" />}
          />

          <FormField
            label="E-mail:"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Ex: joao.silva@email.com"
            required
            icon={<FiMail className="inline-block mr-2" />}
          />

          <FormField
            label="Telefone (WhatsApp):"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Ex: (11) 99999-9999"
            required
            icon={<FiPhone className="inline-block mr-2" />}
          />

          <FormField
            label="Profissão:"
            type="text"
            value={formData.profession}
            onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
            placeholder="Ex: Advogado"
            required
            icon={<FiBriefcase className="inline-block mr-2" />}
          />

          <FormField
            label="Já possui plano de saúde?"
            type="select"
            value={formData.hasHealthPlan ? 'sim' : 'nao'}
            onChange={(e) => setFormData({ ...formData, hasHealthPlan: e.target.value === 'sim' })}
            icon={<FiCheckSquare className="inline-block mr-2" />}
            options={[
              { value: 'nao', label: 'Não' },
              { value: 'sim', label: 'Sim' },
            ]}
          />

          <FormField
            label="Tem CNPJ ou MEI ativo?"
            type="select"
            value={formData.hasCNPJ ? 'sim' : 'nao'}
            onChange={(e) => setFormData({ ...formData, hasCNPJ: e.target.value === 'sim' })}
            icon={<FiFileText className="inline-block mr-2" />}
            options={[
              { value: 'nao', label: 'Não' },
              { value: 'sim', label: 'Sim' },
            ]}
          />

          <FormField
            label="Como podemos entrar em contato?"
            type="select"
            value={formData.contactPreference}
            onChange={(e) => setFormData({ ...formData, contactPreference: e.target.value })}
            icon={<FiMessageSquare className="inline-block mr-2" />}
            options={[
              { value: 'Telefone', label: 'Telefone' },
              { value: 'Email', label: 'E-mail' },
              { value: 'WhatsApp', label: 'WhatsApp' },
            ]}
            required
          />

          {/* Botão de Enviar */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>

         {/* Modal de Feedback */}
         <ModalMessage
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={modalTitle}
          message={modalMessage}
          type={modalType}
        />
      </div>
    </div>
  );
}