// src/lib/db.ts
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ath_saude',
  password: '110202',
  port: 5432, // Porta padrão do PostgreSQL
});

export default pool;