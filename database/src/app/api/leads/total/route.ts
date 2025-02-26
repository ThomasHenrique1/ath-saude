// src/app/api/leads/total/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const totalLeads = await prisma.lead.count();
    return NextResponse.json({ total: totalLeads });
  } catch (error) {
    console.error('Erro ao buscar total de leads:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}