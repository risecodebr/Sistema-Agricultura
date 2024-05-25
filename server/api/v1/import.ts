import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  const fazendas = await prisma.fazenda.createMany({
    data: data.fazendas,
    skipDuplicates: true,
  });

  const fornecedores = await prisma.funcionario.createMany({
    data: data.fornecedores,
    skipDuplicates: true,
  });

  const produtos = await prisma.produto.createMany({
    data: data.produtos,
    skipDuplicates: true,
  });

  const funcionarios = await prisma.funcionario.createMany({
    data: data.funcionarios,
    skipDuplicates: true,
  });

  return {
    statusCode: 201,
    message: "Importação realizada com sucesso",
    data: {
      fazendas,
      fornecedores,
      produtos,
      funcionarios,
    },
  };
});
