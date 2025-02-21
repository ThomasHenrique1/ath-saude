import Link from "next/link";

export default function PlanLinks (){
    return( 
              <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link
                    href="/plano-individual"
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center transform hover:scale-105"
                  >
                    <h2 className="text-xl font-bold text-blue-900 mb-2">
                      Plano Individual
                    </h2>
                    <p className="text-gray-600">Saiba mais sobre o Plano Individual</p>
                  </Link>
                  <Link
                    href="/plano-familiar"
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center transform hover:scale-105"
                  >
                    <h2 className="text-xl font-bold text-blue-900 mb-2">
                      Plano Familiar
                    </h2>
                    <p className="text-gray-600">Saiba mais sobre o Plano Familiar</p>
                  </Link>
                  <Link
                    href="/plano-empresarial"
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center transform hover:scale-105"
                  >
                    <h2 className="text-xl font-bold text-blue-900 mb-2">
                      Plano Empresarial
                    </h2>
                    <p className="text-gray-600">
                      Saiba mais sobre o Plano Empresarial
                    </p>
                  </Link>
                  <Link
                    href="/plano-adesao"
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center transform hover:scale-105"
                  >
                    <h2 className="text-xl font-bold text-blue-900 mb-2">
                      Plano por Adesão
                    </h2>
                    <p className="text-gray-600">Saiba mais sobre o Plano por Adesão</p>
                  </Link>
                 
                </div>
    )
}