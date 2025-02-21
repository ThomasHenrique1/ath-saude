/* eslint-disable @next/next/no-img-element */
export default function BannerHome(){
    return (
        <header className="relative h-96 flex items-center justify-center bg-gray-300 overflow-hidden">
                <img
                  src="/images/logo.jpg"
                  alt="ATH Saúde"
                  className="absolute inset-0 w-full h-full object-cover filter blur-sm opacity-80"
                />
                {/* Camada extra para melhorar a legibilidade */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/40 to-blue-900/80" />
                <div className="relative z-10 text-center">
                  <h1 className="text-6xl font-bold text-white mb-4">
                    Sua Saúde, Nossa Prioridade
                  </h1>
                  <p className="text-xl text-gray-200">
                    Conheça os melhores planos de saúde para você e sua família
                  </p>
                </div>
              </header>
    )
}