/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { comparePassword } from '@/app/lib/auth';


const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, senha } = await request.json();

  try {
    const corretor = await prisma.corretor.findUnique({
      where: { email },
    });

    if (!corretor) {
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
    }

    const senhaValida = await comparePassword(senha, corretor.senha);

    if (!senhaValida) {
      return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
    }

    const token = createToken(corretor.id);

    return NextResponse.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}

function createToken(id: number) {
  throw new Error('Function not implemented.');
}
