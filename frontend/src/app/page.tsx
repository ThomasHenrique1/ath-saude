/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Section from '../components/Section';
import FaixaEtaria from '../components/FaixaEtaria';
import LogoPlanoSaude from '../components/LogoPlanoSaude';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header com Logo e Efeito de Blur */}
          <header className="relative h-96 flex items-center justify-center bg-gray-300 overflow-hidden">
            <img
              src="/images/logo.jpg"
              alt="ATH Saúde"
              className="absolute inset-0 w-full h-full object-cover filter blur-sm opacity-80"
            />
            {/* Camada extra para melhorar a legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/40 to-blue-900/80" />
            <div className="relative z-10 text-center">
              <h1 className="text-6xl font-bold text-white mb-4">
                Sua Saúde, Nossa Prioridade
              </h1>
              <p className="text-xl text-gray-200">
                Conheça os melhores planos de saúde para você e sua família
              </p>
            </div>
          </header>


      <main className="container mx-auto px-6 py-12">
        {/* Seção 1: Quem Somos */}
        <Section title="Quem Somos">
          <p className="mb-4 text-gray-600 leading-relaxed">
            Somos consultores autônomos especializados em planos de saúde, com X anos de experiência e mais de Y clientes atendidos.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nosso diferencial é o atendimento personalizado, suporte dedicado e acompanhamento na contratação.
          </p>
        </Section>

        {/* Links para Páginas de Planos */}
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/plano-individual" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Plano Individual</h2>
            <p className="text-gray-600">Saiba mais sobre o Plano Individual</p>
          </Link>
          <Link href="/plano-familiar" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Plano Familiar</h2>
            <p className="text-gray-600">Saiba mais sobre o Plano Familiar</p>
          </Link>
          <Link href="/plano-empresarial" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Plano Empresarial</h2>
            <p className="text-gray-600">Saiba mais sobre o Plano Empresarial</p>
          </Link>
          <Link href="/plano-adesao" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Plano por Adesão</h2>
            <p className="text-gray-600">Saiba mais sobre o Plano por Adesão</p>
          </Link>
        </div>

        {/* Seção 2: Atendemos Todas as Idades */}
        <Section title="Atendemos Todas as Idades">
        <p className="mb-6 text-gray-600">
          Oferecemos planos de saúde para crianças, adultos e idosos. Independentemente da sua idade, temos a solução ideal para você e sua família.
        </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FaixaEtaria src="/images/criancas.jpg" alt="Crianças" label="Planos para Crianças" />
            <FaixaEtaria src="/images/adultos.jpg" alt="Adultos" label="Planos para Adultos" />
            <FaixaEtaria src="/images/idoso.jpg" alt="Idosos" label="Planos para Idosos" />
          </div>
        </Section>

        {/* Seção 3: Planos de Saúde que Trabalhamos */}
        <Section title="Planos de Saúde que Trabalhamos">
          <p className="mb-6 text-gray-600">
            Trabalhamos com as principais operadoras do mercado. Confira algumas delas:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <LogoPlanoSaude src="/images/hapvida.png" alt="Hapvida" />
            <LogoPlanoSaude src="/images/notredame.png" alt="NotreDame" />
            <LogoPlanoSaude src="/images/portoseguro.png" alt="Porto Seguro" />
            <LogoPlanoSaude src="/images/unimedseguros.webp" alt="Unimed Seguros" />
            <LogoPlanoSaude src="/images/medsenior.webp" alt="Med Senior" />
            <LogoPlanoSaude src="/images/qualicorp.png" alt="Qualicorp" />
            <LogoPlanoSaude src="/images/unimed.png" alt="Unimed" />
            <LogoPlanoSaude src="/images/amil.png" alt="Amil" />
            <LogoPlanoSaude src="/images/bradescosaude.png" alt="Bradesco Saúde" />
            <LogoPlanoSaude src="/images/sulamerica.png" alt="SulAmérica" />
          </div>
        </Section>

        {/* Seção 4: Informações Adicionais */}
        <Section title="Informações Adicionais">
          <p className="mb-6 text-gray-600">
            Se você está procurando uma corretora de plano de saúde para uma contratação pessoa física, plano de saúde para advogados, engenheiros, militares, ou qualquer que seja sua profissão, está no lugar certo. Temos todos os tipos de planos coletivos por adesão (vinculado a sua categoria profissional) e planos pessoa física.
          </p>
          <p className="mb-6 text-gray-600">
            Para sua família, nossos corretores de plano de saúde são especializados em todos os produtos que o mercado de planos de saúde oferece. Aqui você encontra tudo o que sua família precisa, e ainda pode utilizar sua categoria profissional para economizar ainda mais.
          </p>
          <p className="mb-6 text-gray-600">
            Para sua empresa, temos uma equipe pronta para atendê-lo de forma exclusiva e rápida. Um atendimento ágil para quem vai direto ao ponto quando se trata de Planos de Saúde Empresarial ou Convênio Médico Empresarial.
          </p>
        </Section>

        {/* Seção 5: Modalidades de Contratação */}
        <Section title="Modalidades de Contratação">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Plano de Saúde Individual</h3>
              <p className="text-gray-600">
                A contratação do Plano de Saúde Individual ou Convênio Médico Individual possui muitas vantagens, como: o titular precisa dar o consentimento para o encerramento do contrato, ou seja, a operadora não pode cancelar o contrato sem o consentimento.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Plano de Saúde Empresarial</h3>
              <p className="text-gray-600">
                O Plano de Saúde Empresarial ou Convênio Médico Empresarial é uma contratação coletiva, que também deve ser pesquisada com cuidado, sob a assessoria de uma corretora especializada.
              </p>
            </div>
          </div>
        </Section>

        {/* Seção 6: Como Funciona o Plano de Saúde Empresarial */}
        <Section title="Como Funciona o Plano de Saúde Empresarial?">
          <p className="mb-4 text-gray-600">
            O plano de saúde empresarial opera de forma semelhante aos planos individuais, mas com algumas diferenças importantes. Ele é contratado por uma empresa para oferecer assistência médica aos seus colaboradores, podendo incluir dependentes e, em alguns casos, até prestadores de serviço vinculados à empresa.
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>CNPJ ativo (MEI, pequenas, médias e grandes empresas).</li>
            <li>Número mínimo de vidas, que pode variar entre 2 e 30, dependendo da operadora.</li>
            <li>Inclusão obrigatória de sócios ou funcionários registrados no regime CLT.</li>
          </ul>
        </Section>

        {/* Botão de Call-to-Action */}
        <div className="text-center mt-12">
              <Link href="/formulario"
                className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105"
              >
                Solicitar Cotação
              </Link>
            </div>

      </main>
    </div>
  );
}