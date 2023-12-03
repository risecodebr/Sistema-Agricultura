import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { nome, cnpj, telefone } = await readBody(event);

  await prisma.fornecedor.create({
    data: {
      nome: nome,
      cnpj: cnpj,
      telefone: telefone,
    },
  }); 

  return {
    statusCode: 200,
    statusMessage: "Fornecedor atualizado com sucesso!",
  };
});
