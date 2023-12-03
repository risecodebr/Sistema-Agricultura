import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const fornecedores = await prisma.fornecedor.findMany();
  return {
    statusCode: 200,
    data: fornecedores,
    count: fornecedores.length,
  };
});
