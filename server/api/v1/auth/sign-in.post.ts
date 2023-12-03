import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { nome, email, password } = await readBody(event);

  if (!email || !password || !nome) {
    return {
      statusCode: 400,
      statusMessage: "Campos obrigatórios não preenchidos!",
    };
  }

  if (await emailIsValid(email)) {
    return { statusCode: 400, statusMessage: "Email já cadastrado!" };
  }

  var funcionario = await prisma.funcionario.create({
    data: {
      nome: nome,
      email: email,
      password: password,
    },
  });

  await setUserSession(event, { ...funcionario });

  return { statusCode: 200, statusMessage: "Sucesso!" };
});

async function emailIsValid(email: string) {
  return !!(await prisma.funcionario.findFirst({
    where: {
      email: email,
    },
  }));
}
