import Link from 'next/link';
import Section from '../../components/Section';

export default function PlanoAdesao() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Plano de Saúde por Adesão</h1>

      {/* Seção 1: O que é o Plano por Adesão? */}
      <Section title="O que é o Plano por Adesão?">
        <p className="mb-4">
          O Plano de Saúde por Adesão é uma modalidade de contratação coletiva, vinculada a categorias profissionais, como advogados, engenheiros, militares e outras.
        </p>
        <p>
          Com esse plano, você pode aproveitar descontos e benefícios exclusivos para a sua categoria profissional.
        </p>
      </Section>

      {/* Seção 2: Vantagens do Plano por Adesão */}
      <Section title="Vantagens do Plano por Adesão">
        <ul className="list-disc pl-6">
          <li>Descontos especiais para profissionais de determinadas categorias.</li>
          <li>Cobertura completa e flexível.</li>
          <li>Rede credenciada ampla e de qualidade.</li>
          <li>Atendimento personalizado e suporte dedicado.</li>
        </ul>
      </Section>

      {/* Seção 3: Como Contratar */}
      <Section title="Como Contratar">
        <p className="mb-4">
          Para contratar um Plano de Saúde por Adesão, basta entrar em contato conosco através do formulário de cotação ou pelo WhatsApp.
        </p>
        <div className="text-center">
          <Link href="/formulario" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Solicitar Cotação
          </Link>
        </div>
      </Section>
    </div>
  );
}