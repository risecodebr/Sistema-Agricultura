import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const {
    nome,
    id,
    codigo,
    descricao,
    preco,
    lote,
    numero_pedido,
    quantidade,
    data_validade,
    fornecedor_id,
  } = await readBody(event);

  await prisma.produto.update({
    where: {
      id: id,
    },
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
    statusMessage: "Fornecedor atualizado com sucesso!",
  };
});
