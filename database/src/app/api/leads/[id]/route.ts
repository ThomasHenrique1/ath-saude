// src/app/api/leads/[id]/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { status, plano_saude, formacao_academica } = await request.json();

  const updatedLead = await prisma.lead.update({
    where: { id: Number(params.id) },
    data: { status, plano_saude, formacao_academica },
  });

  return NextResponse.json(updatedLead);
}