// src/app/api/corretores/[id]/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const corretor = await prisma.corretor.findUnique({
      where: { id: Number(params.id) },
      include: { CorretorLead: { include: { Lead: true } } }, // Inclui os leads associados
    });

    if (!corretor) {
      return NextResponse.json({ error: 'Corretor não encontrado' }, { status: 404 });
    }

    return NextResponse.json(corretor);
  } catch (error) {
    console.error('Erro ao buscar corretor:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}