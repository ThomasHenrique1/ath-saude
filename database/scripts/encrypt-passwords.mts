// scripts/encrypt-passwords.ts
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/app/lib/auth';

const prisma = new PrismaClient();

async function main() {
  const corretores = await prisma.corretor.findMany();

  for (const corretor of corretores) {
    const senhaCriptografada = await hashPassword(corretor.senha);

    await prisma.corretor.update({
      where: { id: corretor.id },
      data: { senha: senhaCriptografada },
    });

    console.log(`Senha criptografada para o corretor: ${corretor.email}`);
  }
}

main()
  .catch((error) => {
    console.error('Erro ao criptografar senhas:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });