import Link from 'next/link';

export default function FormDescription() {
  return (
    <section className="mb-8 text-center text-lg text-gray-700">
      <p className="mb-4">
        Preencha o formulário abaixo para solicitar uma cotação personalizada. Nossa equipe entrará em contato com você em breve.
      </p>
      <p>
        Dúvidas?{' '}
        <Link href="/" className="text-blue-500 hover:underline">
          Volte para a página inicial
        </Link>
        .
      </p>
    </section>
  );
}