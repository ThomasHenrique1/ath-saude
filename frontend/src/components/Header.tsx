import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 shadow-lg">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">ATH Saúde</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/formulario" className="hover:underline">
              Formulário
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
}