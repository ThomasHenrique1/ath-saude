"use client"; // Para habilitar interatividade no Next.js

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones para o menu mobile

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Nome da Empresa */}
        <Link href="/" className="text-3xl font-bold tracking-wide">
          ATH <span className="text-blue-400">Saúde</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link href="/formulario" className="hover:text-blue-400 transition duration-300">
            Formulário
          </Link>
        </nav>

        {/* Botão do Menu Mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-900 absolute top-16 left-0 w-full text-center py-4 shadow-lg">
          <Link href="/" className="block py-2 text-lg hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/formulario" className="block py-2 text-lg hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            Solicitar Cotação
          </Link>
        </nav>
      )}
    </header>
  );
}
