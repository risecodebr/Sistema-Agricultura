import { describe, expect, test } from "vitest";
import { setup, fetch } from "@nuxt/test-utils";

describe("Teste Acessar paginas", async () => {
  await setup();

  test("Pode Acessar Home", async () => {
    const response = await fetch("/");
    expect(response.status).toBe(200);
  });

  test("Pode Acessar Cadastro", async () => {
    const response = await fetch("/sing-up");
    expect(response.status).toBe(200);
  });

  test("Pode Acessar Dashboard", async () => {
    const response = await fetch("/dashboard");
    expect(response.status).toBe(200);
  });

  test("Pode Acessar Funcionarios", async () => {
    const response = await fetch("/dashboard/funcionarios");
    expect(response.status).toBe(200);
  });

  test("Pode Acessar Fornecedores", async () => {
    const response = await fetch("/dashboard/fornecedores");
    expect(response.status).toBe(200);
  });

  test("Pode Acessar Produtos", async () => {
    const response = await fetch("/dashboard/produtos");
    expect(response.status).toBe(200);
  });
});
