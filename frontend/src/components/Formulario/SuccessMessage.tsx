import Image from 'next/image';
import icon from '../../../public/images/icon-sucesso.png'

export default function SuccessMessage() {
    return (
      <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6 rounded-lg text-center">
        <Image
          src={icon}
          alt="Sucesso"
          width={64}
          height={64}
          className="w-16 h-16 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-green-700 mb-2">Cadastro realizado com sucesso!</h2>
        <p className="text-green-700">
          Em breve, um de nossos consultores entrará em contato. Fique de olho no seu e-mail, telefone ou WhatsApp.
        </p>
      </div>
    );
  }