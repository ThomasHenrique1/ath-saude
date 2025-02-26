// src/app/api/leads/disponiveis/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const leadsDisponiveis = await prisma.lead.count({
      where: { CorretorLead: { none: {} } }, // Leads não associados a nenhum corretor
    });
    return NextResponse.json({ total: leadsDisponiveis });
  } catch (error) {
    console.error('Erro ao buscar leads disponíveis:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}