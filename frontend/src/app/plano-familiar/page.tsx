import Link from 'next/link';
import Section from '../../components/Section';

export default function PlanoFamiliar() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Plano de Saúde Familiar</h1>

      {/* Seção 1: O que é o Plano Familiar? */}
      <Section title="O que é o Plano Familiar?">
        <p className="mb-4">
          O Plano de Saúde Familiar é a solução ideal para quem deseja garantir a saúde e o bem-estar de toda a família, com cobertura completa e benefícios exclusivos.
        </p>
        <p>
          Com esse plano, você pode incluir cônjuge, filhos e até mesmo outros dependentes, como pais ou sogros.
        </p>
      </Section>

      {/* Seção 2: Vantagens do Plano Familiar */}
      <Section title="Vantagens do Plano Familiar">
        <ul className="list-disc pl-6">
          <li>Cobertura para toda a família em um único plano.</li>
          <li>Descontos especiais para famílias numerosas.</li>
          <li>Rede credenciada ampla e de qualidade.</li>
          <li>Atendimento personalizado e suporte dedicado.</li>
        </ul>
      </Section>

      {/* Seção 3: Como Contratar */}
      <Section title="Como Contratar">
        <p className="mb-4">
          Para contratar um Plano de Saúde Familiar, basta entrar em contato conosco através do formulário de cotação ou pelo WhatsApp.
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