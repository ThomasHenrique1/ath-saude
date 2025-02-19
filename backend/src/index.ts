import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();
const PORT = 5000;

// Middleware para permitir requisições JSON e CORS
app.use(cors());
app.use(express.json());

// Rota para criar um novo lead
app.post('/leads', async (req, res) => {
  const {
    name,
    age,
    email,
    phone,
    maritalStatus,
    hasChildren,
    hasHealthPlan,
    currentPlan,
    hasCNPJ,
    serviceType,
  } = req.body;

  try {
    const newLead = await prisma.lead.create({
      data: {
        name,
        age: age ? parseInt(age) : null, // Converte idade para número
        email,
        phone,
        maritalStatus,
        hasChildren,
        hasHealthPlan,
        currentPlan,
        hasCNPJ,
        serviceType,
      },
    });
    res.status(201).json(newLead); // Retorna o lead criado
  } catch (error) {
    console.error('Erro ao criar lead:', error);
    res.status(500).json({ error: 'Erro ao criar lead' });
  }
});

// Rota inicial para teste
app.get('/', (req, res) => {
  res.send('API ATH Saúde está rodando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});