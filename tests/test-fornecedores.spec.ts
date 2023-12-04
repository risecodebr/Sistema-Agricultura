import { describe, expect, test } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";
import { fa, faker } from "@faker-js/faker";

describe("Teste de funcionarios", async () => {
  await setup();

  test("Pode criar fornecedor", async () => {
    const fornecedor = {
        nome: faker.company.name(),
        cnpj: faker.number.int({ min: 10000000000000, max: 99999999999999 }).toString(),
        telefone: faker.phone.number(),
    };

    const response = await $fetch("/api/v1/fornecedores/create", {
      method: "POST",
      body: JSON.stringify(fornecedor),
    });

    expect(response.statusCode).toBe(200);
  });

    test("Pode listar fornecedores", async () => {
        const response = await $fetch("/api/v1/fornecedores");
        expect(response.statusCode).toBe(200);
    
        expect(response).toHaveProperty("data");
    });

    test("Pode Editar fornecedor", async () => {
        const fornecedor = {
            nome: faker.company.name(),
            cnpj: faker.number.int({ min: 10000000000000, max: 99999999999999 }).toString(),
            telefone: faker.phone.number(),
        };

        const response = await $fetch("/api/v1/fornecedores/create", {
            method: "POST",
            body: JSON.stringify(fornecedor),
        });

        expect(response.statusCode).toBe(200);

        const responseEdit = await $fetch(
            `/api/v1/fornecedores/update`,
            {
                method: "PUT",
                body: JSON.stringify({
                    id: response.data.id,
                    nome: faker.company.name(),
                    cnpj: faker.number.int({ min: 10000000000000, max: 99999999999999 }).toString(),
                    telefone: faker.phone.number(),
                }),
            }
        );

        expect(responseEdit.statusCode).toBe(200);
    });

    test("Pode deletar fornecedor", async () => {
        const fornecedor = {
            nome: faker.company.name(),
            cnpj: faker.number.int({ min: 10000000000000, max: 99999999999999 }).toString(),
            telefone: faker.phone.number(),
        };
    
        const response = await $fetch("/api/v1/fornecedores/create", {
            method: "POST",
            body: JSON.stringify(fornecedor),
        });

        expect(response.statusCode).toBe(200);

        const responseDelete = await $fetch(
            `/api/v1/fornecedores/${response.data.id}`,
            {
                method: "DELETE",
                body: JSON.stringify({
                    id: response.data.id,
                }),
            }
        );

        expect(responseDelete.statusCode).toBe(200);
    });
});
