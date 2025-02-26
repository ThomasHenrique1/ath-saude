// src/app/api/leads/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const leads = await prisma.lead.findMany({
    where: { CorretorLead: { none: {} } }, // Leads não associados a nenhum corretor
  });

  return NextResponse.json(leads);
}