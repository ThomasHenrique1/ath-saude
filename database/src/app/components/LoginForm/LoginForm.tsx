/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/components/LoginForm.tsx
'use client'; // Marque como Client Component
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/app/lib/auth';


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/corretor');
    } catch (err) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Login do Corretor</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;