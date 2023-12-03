import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const funcionario = await prisma.funcionario.findFirst({
    where: {
      email: email,
      password: password,
    },
  });

  if (!funcionario) {
    return { statusCode: 401, statusMessage: "Dados invalidos." };
  }

  await setUserSession(event, { ...funcionario });

  return { statusCode: 200, statusMessage: "Sucesso!" };
});
