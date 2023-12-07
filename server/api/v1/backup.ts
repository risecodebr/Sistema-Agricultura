import { PrismaClient } from "@prisma/client";
import { format } from "@fast-csv/format";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const fazenda = await prisma.fazenda.findFirst();
  const fornecedor = await prisma.fornecedor.findMany({
    include: {
      produtos: true,
    },
  });

  const csv = format({ headers: true }).on("error", (error) =>
    console.error(error)
  );
  setResponseHeader(event, "Content-Type", "text/csv");
  setResponseHeader(
    event,
    "Content-Disposition",
    `attachment; filename="${fazenda?.nome || "Fazenda"}.csv"`
  );

  fornecedor.forEach((item) => csv.write(item));

  return {
    statusCode: 200,
    data: fornecedor,
  };
});
