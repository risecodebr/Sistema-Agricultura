import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id, nome, email, password } = await readBody(event);

  await prisma.funcionario.update({
    where: {
      id: id,
    },
    data: {
      nome: nome,
      email: email,
      password: password,
    },
  });

  return {
    statusCode: 200,
    statusMessage: "Fornecedor atualizado com sucesso!",
  };
});
