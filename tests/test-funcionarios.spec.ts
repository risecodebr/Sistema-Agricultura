import { describe, expect, test } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";
import { faker } from "@faker-js/faker";

describe("Teste de funcionarios", async () => {
  await setup();

  test("Pode criar funcionario", async () => {
    const funcionario = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const response = await $fetch("/api/v1/funcionarios/create", {
      method: "POST",
      body: JSON.stringify(funcionario),
    });

    expect(response.statusCode).toBe(200);
  });

  test("Pode listar funcionarios", async () => {
    const response = await $fetch("/api/v1/funcionarios");
    expect(response.statusCode).toBe(200);

    expect(response).toHaveProperty("data");
  });

  test("Pode Editar funcionario", async () => {
    const funcionario = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const response = await $fetch("/api/v1/funcionarios/create", {
      method: "POST",
      body: JSON.stringify(funcionario),
    });

    expect(response.statusCode).toBe(200);

    const responseEdit = await $fetch(
      `/api/v1/funcionarios/update`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: response.data.id,
          nome: faker.person.fullName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
        }),
      }
    );

    expect(responseEdit.statusCode).toBe(200);
  });

  test("Pode deletar funcionario", async () => {
    const funcionario = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const response = await $fetch("/api/v1/funcionarios/create", {
      method: "POST",
      body: JSON.stringify(funcionario),
    });

    expect(response.statusCode).toBe(200);

    const responseDelete = await $fetch(
      `/api/v1/funcionarios/${response.data.id}`,
      {
        method: "DELETE",
      }
    );

    expect(responseDelete.statusCode).toBe(200);
  });
  
});
