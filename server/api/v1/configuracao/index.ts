import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const fazenda = await prisma.fazenda.findFirst();

  return {
    statusCode: 200,
    data: fazenda,
  };
});
