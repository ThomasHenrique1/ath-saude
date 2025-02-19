import Link from 'next/link';
import Section from '../components/Section';
import FaixaEtaria from '../components/FaixaEtaria';
import LogoPlanoSaude from '../components/LogoPlanoSaude';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Bem-vindo à ATH Saúde</h1>

        {/* Seção 1: Quem Somos */}
        <Section title="Quem Somos">
          <p className="mb-4 text-gray-700 leading-relaxed">
            Somos consultores autônomos especializados em planos de saúde, com X anos de experiência e mais de Y clientes atendidos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nosso diferencial é o atendimento personalizado, suporte dedicado e acompanhamento na contratação.
          </p>
        </Section>

        {/* Links para Páginas de Planos */}
        <div className="my-8 space-y-4">
          <Link href="/plano-individual" className="block text-blue-600 hover:text-blue-800 hover:underline">
            Saiba mais sobre o Plano Individual
          </Link>
          <Link href="/plano-familiar" className="block text-blue-600 hover:text-blue-800 hover:underline">
            Saiba mais sobre o Plano Familiar
          </Link>
          <Link href="/plano-empresarial" className="block text-blue-600 hover:text-blue-800 hover:underline">
            Saiba mais sobre o Plano Empresarial
          </Link>
          <Link href="/plano-adesao" className="block text-blue-600 hover:text-blue-800 hover:underline">
            Saiba mais sobre o Plano por Adesão
          </Link>
        </div>

        {/* Seção 2: Atendemos Todas as Idades */}
        <Section title="Atendemos Todas as Idades">
          <p className="mb-4 text-gray-700 leading-relaxed">
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
          <p className="mb-4 text-gray-700 leading-relaxed">
            Trabalhamos com as principais operadoras do mercado. Confira algumas delas:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
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
          <p className="mb-4 text-gray-700 leading-relaxed">
            Se você está procurando uma corretora de plano de saúde para uma contratação pessoa física, plano de saúde para advogados, engenheiros, militares, ou seja qual for sua profissão, então está no lugar certo. Temos todos os tipos de planos coletivos por adesão (vinculado a sua categoria profissional) e planos pessoa física.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Para sua família, nossos corretores de plano de saúde são especializados em todos os produtos que o mercado de planos de saúde oferece. Aqui você encontra tudo que sua família precisa e também pode usar sua categoria profissional para economizar ainda mais.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Para sua empresa, temos uma equipe pronta para atendê-lo de forma exclusiva e rápida. Um atendimento para quem vai direto ao ponto quando se trata de Planos de Saúde Empresarial ou Convênio Médico Empresarial.
          </p>
        </Section>

        {/* Seção 5: Modalidades de Contratação */}
        <Section title="Modalidades de Contratação">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Plano de Saúde Individual</h3>
              <p className="text-gray-700 leading-relaxed">
                A contratação do Plano de Saúde Individual ou Convênio Médico Individual possui muitas vantagens, dentre elas estão: o titular precisa dar o consentimento para o encerramento do contrato, ou seja, a operadora não pode fazer cancelamento do contrato por si só; não tem a necessidade de vínculo com empresa ou entidade de classe; exige pouca documentação; prevê a portabilidade.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Plano de Saúde Empresarial</h3>
              <p className="text-gray-700 leading-relaxed">
                O Plano de Saúde Empresarial ou Convênio Médico Empresarial é uma contratação coletiva, que também deve ser pesquisada com cuidado, sob a assessoria de uma corretora. Tal corretora dará a devida importância ao assunto e buscará o plano com melhor custo-benefício para atender com eficiência as necessidades de todos os colaboradores e dirigentes de uma empresa.
              </p>
            </div>
          </div>
        </Section>

        {/* Seção 6: Como Funciona o Plano de Saúde Empresarial */}
        <Section title="Como Funciona o Plano de Saúde Empresarial?">
          <p className="mb-4 text-gray-700 leading-relaxed">
            O plano de saúde empresarial opera de forma semelhante aos planos individuais, mas com algumas diferenças importantes. Ele é contratado por uma empresa para oferecer assistência médica aos seus colaboradores, podendo incluir dependentes e, em alguns casos, até prestadores de serviço vinculados à empresa.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Para aderir a um plano empresarial, a empresa precisa atender a certos critérios estabelecidos pelas operadoras e pela Agência Nacional de Saúde Suplementar (ANS). Os principais requisitos incluem:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed">
            <li>CNPJ ativo (Microempreendedor Individual – MEI, pequenas, médias e grandes empresas).</li>
            <li>Número mínimo de vidas, que pode variar entre 2 e 30, dependendo da operadora.</li>
            <li>Inclusão obrigatória de sócios ou funcionários registrados no regime CLT.</li>
          </ul>
        </Section>

        {/* Botão de Call-to-Action */}
        <div className="text-center mt-12">
          <Link href="/formulario" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Solicitar Cotação
          </Link>
        </div>
      </main>
    </div>
  );
}