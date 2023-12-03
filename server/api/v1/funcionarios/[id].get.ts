import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));

  const funcionario = await prisma.funcionario.findFirst({
    where: {
      id: id,
    },
  });

  return {
    statusCode: 200,
    data: funcionario,
  };
});
