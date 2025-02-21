import React from "react";

const ContractTypesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-bold mb-4 text-blue-900">
          Plano de Saúde Individual
        </h3>
        <p className="text-gray-600">
          A contratação do Plano de Saúde Individual ou Convênio Médico
          Individual possui muitas vantagens, como: o titular precisa dar o
          consentimento para o encerramento do contrato, ou seja, a operadora
          não pode cancelar o contrato sem o consentimento.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-bold mb-4 text-blue-900">
          Plano de Saúde Empresarial
        </h3>
        <p className="text-gray-600">
          O Plano de Saúde Empresarial ou Convênio Médico Empresarial é uma
          contratação coletiva, que também deve ser pesquisada com cuidado, sob
          a assessoria de uma corretora especializada.
        </p>
      </div>
    </div>
  );
};

export default ContractTypesSection;