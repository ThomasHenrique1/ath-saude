import Image from 'next/image';
import successIcon from '../../../public/images/imagemStyles/icon-sucesso.png';
import errorIcon from '../../../public/images/imagemStyles/icon-erro.png'; // Adicione um ícone de erro

interface ModalMessageProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type: 'success' | 'error';
}

export default function ModalMessage({ isOpen, onClose, title, message, type }: ModalMessageProps) {
  if (!isOpen) return null;

  const icon = type === 'success' ? successIcon : errorIcon;
  const borderColor = type === 'success' ? 'border-green-400' : 'border-red-400';
  const textColor = type === 'success' ? 'text-green-700' : 'text-red-700';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`bg-white border-l-4 ${borderColor} p-6 rounded-lg text-center max-w-md w-full`}>
        <Image
          src={icon}
          alt={type === 'success' ? 'Sucesso' : 'Erro'}
          width={64}
          height={64}
          className="w-16 h-16 mx-auto mb-4"
        />
        <h2 className={`text-2xl font-bold ${textColor} mb-2`}>{title}</h2>
        <p className={textColor}>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}