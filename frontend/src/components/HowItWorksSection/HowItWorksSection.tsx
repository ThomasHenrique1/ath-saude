import React from "react";

const HowItWorksSection = () => {
  return (
    <>
      <p className="mb-4 text-gray-600">
        O plano de saúde empresarial opera de forma semelhante aos planos
        individuais, mas com algumas diferenças importantes. Ele é contratado
        por uma empresa para oferecer assistência médica aos seus colaboradores,
        podendo incluir dependentes e, em alguns casos, até prestadores de
        serviço vinculados à empresa.
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-600">
        <li>CNPJ ativo (MEI, pequenas, médias e grandes empresas).</li>
        <li>
          Número mínimo de vidas, que pode variar entre 2 e 30, dependendo da
          operadora.
        </li>
        <li>
          Inclusão obrigatória de sócios ou funcionários registrados no regime
          CLT.
        </li>
      </ul>
    </>
  );
};

export default HowItWorksSection;