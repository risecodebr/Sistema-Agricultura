import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const fazendas = await prisma.fazenda.findMany();
  const fornecedores = await prisma.fornecedor.findMany();
  const produtos = await prisma.produto.findMany();
  const funcionarios = await prisma.funcionario.findMany();

  setResponseHeader(event, "Content-Type", "text/json");
  setResponseHeader(
    event,
    "Content-Disposition",
    `attachment; filename="backup.json"`
  );

  return {
    fazendas,
    fornecedores,
    produtos,
    funcionarios,
  };
});
