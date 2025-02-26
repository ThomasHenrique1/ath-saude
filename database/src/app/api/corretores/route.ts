// src/app/api/corretores/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '@/app/lib/auth';


const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { nome, email, senha } = await request.json();

  try {
    const senhaCriptografada = await hashPassword(senha);

    const novoCorretor = await prisma.corretor.create({
      data: {
        nome,
        email,
        senha: senhaCriptografada,
      },
    });

    return NextResponse.json(novoCorretor, { status: 201 });
  } catch (error) {
    console.error('Erro ao cadastrar corretor:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}