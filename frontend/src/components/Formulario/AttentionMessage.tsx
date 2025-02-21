import { FiAlertCircle } from 'react-icons/fi';

export default function AttentionMessage() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg">
      <div className="flex items-center">
        <FiAlertCircle className="text-yellow-500 text-2xl mr-2" />
        <p className="text-yellow-700">
          <strong>Atenção:</strong> Os dados que pedimos são para que o corretor saiba o mínimo de informação para que possamos entrar em contato e discutir detalhes mais importantes para uma melhor cotação. Portanto, não se preocupe.
        </p>
      </div>
    </div>
  );
}