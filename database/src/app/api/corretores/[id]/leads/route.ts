// src/app/api/corretores/[id]/leads/route.ts
import pool from '@/app/lib/db';
import { NextResponse } from 'next/server';


export async function GET(request: Request, { params }: { params: { id: string } }) {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT * FROM leads WHERE corretor_id = $1', [params.id]);
    const leads = result.rows;

    return NextResponse.json(leads);
  } finally {
    client.release();
  }
}