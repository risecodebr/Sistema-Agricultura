import { describe, expect, test } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";
import { faker } from "@faker-js/faker";

describe("Teste de produtos", async () => {
  await setup();

  test("Pode criar produto", async () => {
    const produto = {
      codigo: faker.number.int({ min: 100000, max: 999999999999 }).toString(),
      nome: faker.commerce.productName(),
      preco: faker.number.float({ min: 1, max: 100 }),
      quantidade: faker.number.int({ min: 1, max: 100 }),
      descricao: faker.commerce.productDescription(),
      fornecedor_id: 1,
      data_validade: faker.date.future(),
      numero_pedido: faker.number.int({ min: 1, max: 100 }).toString(),
      lote: faker.number.int({ min: 1, max: 100 }).toString(),
    };

    const response = await $fetch("/api/v1/produtos/create", {
      method: "POST",
      body: JSON.stringify(produto),
    });

    expect(response.statusCode).toBe(200);
  });

  test("Pode listar produtos", async () => {
    const response = await $fetch("/api/v1/produtos");
    expect(response.statusCode).toBe(200);

    expect(response).toHaveProperty("data");
  });

  test("Pode Editar produto", async () => {
    const produto = {
      codigo: faker.number.int({ min: 100000, max: 999999999999 }).toString(),
      nome: faker.commerce.productName(),
      preco: faker.number.float({ min: 1, max: 100 }),
      quantidade: faker.number.int({ min: 1, max: 100 }),
      descricao: faker.commerce.productDescription(),
      fornecedor_id: 1,
      data_validade: faker.date.future(),
      numero_pedido: faker.number.int({ min: 1, max: 100 }).toString(),
      lote: faker.number.int({ min: 1, max: 100 }).toString(),
    };

    const response = await $fetch("/api/v1/produtos/create", {
      method: "POST",
      body: JSON.stringify(produto),
    });

    expect(response.statusCode).toBe(200);

    const responseEdit = await $fetch(`/api/v1/produtos/update`, {
      method: "PUT",
      body: JSON.stringify({
        id: response.data.id,
        codigo: faker.number.int({ min: 100000, max: 999999999999 }).toString(),
        nome: faker.commerce.productName(),
        preco: faker.number.float({ min: 1, max: 100 }),
        quantidade: faker.number.int({ min: 1, max: 100 }),
        descricao: faker.commerce.productDescription(),
        fornecedor_id: 1,
        data_validade: faker.date.future(),
        numero_pedido: faker.number.int({ min: 1, max: 100 }).toString(),
        lote: faker.number.int({ min: 1, max: 100 }).toString(),
      }),
    });

    expect(responseEdit.statusCode).toBe(200);
  });

  test("Pode deletar produto", async () => {
    const produto = {
      codigo: faker.number.int({ min: 100000, max: 999999999999 }).toString(),
      nome: faker.commerce.productName(),
      preco: faker.number.float({ min: 1, max: 100 }),
      quantidade: faker.number.int({ min: 1, max: 100 }),
      descricao: faker.commerce.productDescription(),
      fornecedor_id: 1,
      data_validade: faker.date.future(),
      numero_pedido: faker.number.int({ min: 1, max: 100 }).toString(),
      lote: faker.number.int({ min: 1, max: 100 }).toString(),
    };

    const response = await $fetch("/api/v1/produtos/create", {
      method: "POST",
      body: JSON.stringify(produto),
    });

    expect(response.statusCode).toBe(200);

    const responseDelete = await $fetch(
      `/api/v1/produtos/${response.data.id}`,
      {
        method: "DELETE",
      }
    );

    expect(responseDelete.statusCode).toBe(200);
  });
});
