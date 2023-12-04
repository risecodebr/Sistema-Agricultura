import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { nome, email, password } = await readBody(event);

  let user = await prisma.funcionario.create({
    data: {
      nome: nome,
      email: email,
      password: password,
    },
  }); 

  return {
    statusCode: 200,
    statusMessage: "Funcionario criado com sucesso!",
    data: user,
  };
});
