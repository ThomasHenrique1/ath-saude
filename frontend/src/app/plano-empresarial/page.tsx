import Link from 'next/link';
import Section from '../../components/Section';

export default function PlanoEmpresarial() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Plano de Saúde Empresarial</h1>

      {/* Seção 1: O que é o Plano Empresarial? */}
      <Section title="O que é o Plano Empresarial?">
        <p className="mb-4">
          O Plano de Saúde Empresarial é a solução ideal para empresas que desejam oferecer benefícios de saúde aos seus colaboradores, aumentando a produtividade e a satisfação no ambiente de trabalho.
        </p>
        <p>
          Com esse plano, você pode incluir sócios, funcionários e até mesmo prestadores de serviço vinculados à empresa.
        </p>
      </Section>

      {/* Seção 2: Vantagens do Plano Empresarial */}
      <Section title="Vantagens do Plano Empresarial">
        <ul className="list-disc pl-6">
          <li>Menor custo em comparação aos planos individuais.</li>
          <li>Possibilidade de incluir dependentes (cônjuges e filhos).</li>
          <li>Redução do período de carência para grupos acima de 30 vidas.</li>
          <li>Atendimento personalizado e suporte dedicado.</li>
        </ul>
      </Section>

      {/* Seção 3: Como Contratar */}
      <Section title="Como Contratar">
        <p className="mb-4">
          Para contratar um Plano de Saúde Empresarial, basta entrar em contato conosco através do formulário de cotação ou pelo WhatsApp.
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