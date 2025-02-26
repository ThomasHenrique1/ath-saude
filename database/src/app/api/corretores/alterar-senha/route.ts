// src/app/api/corretores/alterar-senha/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { comparePassword, hashPassword } from '@/app/lib/auth';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, senhaAtual, novaSenha } = await request.json();

  try {
    const corretor = await prisma.corretor.findUnique({
      where: { email },
    });

    if (!corretor) {
      return NextResponse.json({ error: 'Corretor não encontrado' }, { status: 404 });
    }

    const senhaValida = await comparePassword(senhaAtual, corretor.senha);

    if (!senhaValida) {
      return NextResponse.json({ error: 'Senha atual incorreta' }, { status: 401 });
    }

    const novaSenhaCriptografada = await hashPassword(novaSenha);

    await prisma.corretor.update({
      where: { id: corretor.id },
      data: { senha: novaSenhaCriptografada },
    });

    return NextResponse.json({ message: 'Senha alterada com sucesso' });
  } catch (error) {
    console.error('Erro ao alterar senha:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}