import { describe, expect, test } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";
import { faker } from "@faker-js/faker";

describe("Teste de funcionarios", async () => {
  await setup();

  test("Pode listar funcionarios", async () => {
    const response = await $fetch("/api/v1/funcionarios");
    expect(response.statusCode).toBe(200);

    expect(response).toHaveProperty("data");
    expect(response.data).toHaveLength(2);
  });

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
});
