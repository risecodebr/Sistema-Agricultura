import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const funcionarios = await prisma.funcionario.findMany();
  return {
    statusCode: 200,
    data: funcionarios,
    count: funcionarios.length,
  };
});
