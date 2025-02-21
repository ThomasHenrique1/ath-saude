import Section from "../components/Section/Section";
import ButtonCTA from "@/components/ButtonCTA/ButtonCTA";
import BannerHome from "@/components/BannerHome/BannerHome";
import PlanLinks from "@/components/PlanLinks/PlanLinks";
import AgeGroupsSection from "@/components/AgeGroupsSection/AgeGroupsSection";
import HealthPlansSection from "@/components/HealthPlansSection/HealthPlansSection";
import AdditionalInfoSection from "@/components/AdditionalInfoSection/AdditionalInfoSection";
import ContractTypesSection from "@/components/ContractTypesSection/ContractTypesSection";
import HowItWorksSection from "@/components/HowItWorksSection/HowItWorksSection";

export default function Home() {
  return (
    
    <div className="bg-white min-h-screen">
      {/* Header com Logo e Efeito de Blur esta puxando um component */}
      <BannerHome /> 
      <main className="container mx-auto px-6 py-12">
        {/* Seção 1: Quem Somos */}
        <Section title="Quem Somos">
          <p className="mb-4 text-gray-600 leading-relaxed">
            Somos consultores autônomos especializados em planos de saúde, com X
            anos de experiência e mais de Y clientes atendidos.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nosso diferencial é o atendimento personalizado, suporte dedicado e
            acompanhamento na contratação.
          </p>
        </Section>

        {/* Links para Páginas de Planos */}
        <PlanLinks />

        {/* Seção 2: Atendemos Todas as Idades */}

        <Section title="Atendemos Todas as Idades">
          <p className="mb-6 text-gray-600">
            Oferecemos planos de saúde para crianças, adultos e idosos.
            Independentemente da sua idade, temos a solução ideal para você e
            sua família.
          </p>
          <AgeGroupsSection/>
        </Section>

        {/* Seção 3: Planos de Saúde que Trabalhamos */}
        <Section title="Planos de Saúde que Trabalhamos">
          <p className="mb-6 text-gray-600">
            Trabalhamos com as principais operadoras do mercado. Confira algumas
            delas:
          </p>
          <HealthPlansSection />
        </Section>

        {/* Seção 4: Informações Adicionais */}
        <Section title="Informações Adicionais">
          <AdditionalInfoSection />
        </Section>

        {/* Seção 5: Modalidades de Contratação */}
        <Section title="Modalidades de Contratação">
          <ContractTypesSection />
        </Section>

        {/* Seção 6: Como Funciona o Plano de Saúde Empresarial */}
        <Section title="Como Funciona o Plano de Saúde Empresarial?">
          <HowItWorksSection />
        </Section>

        {/* Botão de Call-to-Action */}
        <ButtonCTA />
      </main>
    </div>
  );
}
