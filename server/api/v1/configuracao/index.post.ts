import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { nome } = await readBody(event);
  let fazenda = await prisma.fazenda.findFirst();

  if (fazenda) {
    await prisma.fazenda.update({
      where: {
        id: fazenda.id,
      },
      data: {
        nome,
      },
    });
  } else {
    fazenda = await prisma.fazenda.create({
      data: {
        nome,
      },
    });
  }

  return {
    statusCode: 200,
    data: fazenda,
  };
});
