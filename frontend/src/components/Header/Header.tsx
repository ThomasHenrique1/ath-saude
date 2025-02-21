"use client"; // Para habilitar interatividade no Next.js

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi"; // Ícones para o menu mobile

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Nome da Empresa */}
        <Link href="/" className="text-3xl font-bold tracking-wide hover:text-blue-400 transition duration-300">
          ATH <span className="text-blue-400">Saúde</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link
            href="/formulario"
            className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <span>Solicitar Cotação</span>
            <FiArrowRight className="text-white" />
          </Link>
        </nav>

        {/* Botão do Menu Mobile */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <>
          {/* Overlay escuro */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Menu */}
          <nav className="md:hidden bg-gray-900 fixed top-16 left-0 w-full text-center py-4 shadow-lg z-50">
            <Link
              href="/"
              className="block py-3 text-lg hover:text-blue-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/formulario"
              className="block py-3 text-lg hover:text-blue-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Solicitar Cotação
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}