import Image from 'next/image';
import Link from 'next/link';
import Section from '../../components/Section';

export default function PlanoAdesao() {
  return (
    <div className="bg-white min-h-screen py-8 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Plano de Saúde por Adesão
      </h1>

      {/* Seção 1: O que é o Plano por Adesão? */}
      <Section title="O que é o Plano por Adesão?">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/profissionais.jpg" // Imagem ilustrativa de profissionais
            alt="Profissionais de diferentes categorias"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <p className="text-base text-gray-700">
          O <strong>Plano de Saúde por Adesão</strong> é uma modalidade de contratação coletiva voltada para profissionais de determinadas categorias, como advogados, engenheiros, médicos, militares, entre outros. Ao se inscrever nesse plano, você passa a fazer parte de um grupo que, por meio de sua categoria, tem acesso a condições especiais de cobertura de saúde, com descontos significativos.
        </p>
        <p className="text-base text-gray-700 mt-4">
          Esse tipo de plano oferece a você a possibilidade de ter um atendimento médico de qualidade, com a flexibilidade de escolher entre diferentes operadoras e planos, tudo com um custo reduzido devido à adesão em grupo.
        </p>
      </Section>

      {/* Seção 2: Vantagens do Plano por Adesão */}
      <Section title="Vantagens do Plano por Adesão">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/beneficios.jpg" // Imagem que represente benefícios de saúde
            alt="Vantagens do plano de adesão"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <p className="text-base text-gray-700 mb-4">
          Ao optar pelo Plano de Saúde por Adesão, você usufrui de uma série de benefícios exclusivos, como:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
          <li>Descontos expressivos em comparação aos planos individuais.</li>
          <li>Ampla rede de cobertura, com acesso a hospitais, clínicas e médicos renomados.</li>
          <li>Possibilidade de inclusão de dependentes com condições facilitadas.</li>
          <li>Planos flexíveis, adaptáveis às suas necessidades e ao seu orçamento.</li>
          <li>Atendimento especializado, com suporte dedicado para dúvidas e ajustes.</li>
        </ul>
      </Section>

      {/* Seção 3: Como Contratar? */}
      <Section title="Como Contratar?">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/formulario.jpg" // Imagem de preenchimento de formulário ou contato
            alt="Preenchimento de formulário"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <p className="text-base text-gray-700 mb-4">
          A contratação de um <strong>Plano de Saúde por Adesão</strong> é simples e rápida! Para obter mais informações e contratar o seu plano, basta preencher o nosso formulário de cotação. Assim, um de nossos consultores entrará em contato com você para oferecer as melhores opções disponíveis para sua categoria profissional.
        </p>
        <div className="text-center">
          <Link
            href="/formulario"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Preencher Formulário de Cotação
          </Link>
        </div>
      </Section>
    </div>
  );
}
