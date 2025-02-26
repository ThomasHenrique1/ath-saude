// src/app/api/corretores/ativos/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const corretoresAtivos = await prisma.corretor.count();
    return NextResponse.json({ total: corretoresAtivos });
  } catch (error) {
    console.error('Erro ao buscar corretores ativos:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}