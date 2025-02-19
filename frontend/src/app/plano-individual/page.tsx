import Link from 'next/link';
import Section from '../../components/Section';

export default function PlanoIndividual() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Plano de Saúde Individual</h1>

      {/* Seção 1: O que é o Plano Individual? */}
      <Section title="O que é o Plano Individual?">
        <p className="mb-4">
          O Plano de Saúde Individual é ideal para quem busca uma cobertura personalizada e flexível, sem a necessidade de vínculo com uma empresa ou entidade de classe.
        </p>
        <p>
          Com esse plano, você tem acesso a uma rede credenciada de hospitais, clínicas e laboratórios, além de poder incluir dependentes, como cônjuge e filhos.
        </p>
      </Section>

      {/* Seção 2: Vantagens do Plano Individual */}
      <Section title="Vantagens do Plano Individual">
        <ul className="list-disc pl-6">
          <li>Flexibilidade para escolher a cobertura que melhor atende às suas necessidades.</li>
          <li>Portabilidade garantida pela ANS (Agência Nacional de Saúde Suplementar).</li>
          <li>Atendimento personalizado e suporte dedicado.</li>
          <li>Sem necessidade de vínculo com empresa ou entidade de classe.</li>
        </ul>
      </Section>

      {/* Seção 3: Como Contratar */}
      <Section title="Como Contratar">
        <p className="mb-4">
          Para contratar um Plano de Saúde Individual, basta entrar em contato conosco através do formulário de cotação ou pelo WhatsApp.
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