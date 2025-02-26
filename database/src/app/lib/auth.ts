// src/app/lib/auth.ts
import bcrypt from 'bcrypt';

export const login = async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Credenciais inválidas');
    }
  
    const data = await response.json();
    localStorage.setItem('token', data.token);
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
  
  export const logout = () => {
    localStorage.removeItem('token');
  };



const SALT_ROUNDS = 10;

// Criptografa uma senha
export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

// Verifica se a senha está correta
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};