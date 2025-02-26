// src/app/api/corretor-leads/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { corretorId, leadId } = await request.json();

  const corretorLead = await prisma.corretorLead.create({
    data: {
      corretorid: corretorId,
      leadid: leadId,
    },
  });

  return NextResponse.json(corretorLead);
}