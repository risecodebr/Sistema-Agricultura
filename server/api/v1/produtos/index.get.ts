import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const produtos = await prisma.produto.findMany();
  return {
    statusCode: 200,
    data: produtos,
    count: produtos.length,
  };
});
