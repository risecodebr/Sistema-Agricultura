import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));

  await prisma.funcionario.delete({
    where: {
      id: id,
    },
  });

  return {
    statusCode: 200,
    StatusMensage: "Deletado com sucesso!",
  };
});
