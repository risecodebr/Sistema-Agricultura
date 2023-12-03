import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const {
    nome,
    codigo,
    descricao,
    preco,
    lote,
    numero_pedido,
    quantidade,
    data_validade,
    fornecedor_id,
  } = await readBody(event);

  await prisma.produto.create({
    data: {
      nome: nome,
      codigo: codigo,
      descricao: descricao,
      preco: preco,
      lote: lote,
      numero_pedido: numero_pedido,
      quantidade: quantidade,
      data_validade: new Date(data_validade).toISOString(),
      fornecedor_id: fornecedor_id,
    },
  });

  return {
    statusCode: 200,
    statusMessage: "Produto criado com sucesso!",
  };
});
