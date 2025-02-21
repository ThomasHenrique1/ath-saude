import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Sobre a Empresa */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">ATH Saúde</h3>
            <p className="text-gray-600 mb-4">
              Especialistas em planos de saúde para você e sua família.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-900 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-900 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-900 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://wa.me/551112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-900 transition duration-300"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Úteis */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-blue-900 transition duration-300">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/planos" className="text-gray-600 hover:text-blue-900 transition duration-300">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-900 transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-blue-900 transition duration-300">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Informações Legais */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Informações Legais</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/termos-de-uso" className="text-gray-600 hover:text-blue-900 transition duration-300">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="text-gray-600 hover:text-blue-900 transition duration-300">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-900 transition duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Contato</h3>
            <p className="text-gray-600 mb-2">Email: contato@athsaude.com.br</p>
            <p className="text-gray-600 mb-2">Telefone: (11) 1234-5678</p>
            <p className="text-gray-600 mb-4">Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
            <Link
              href="/formulario"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
            >
              Solicitar Cotação
            </Link>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2023 ATH Saúde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}