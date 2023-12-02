<template>
    <NuxtLayout name="default">
        <div class="container mt-2">
            <h1>Novo Fornecedor</h1>
            <form>
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome" placeholder="Nome">
                </div>
                <div class="mb-3">
                    <label for="cpnj" class="form-label">CNPJ</label>
                    <input type="text" class="form-control" id="cpnj" placeholder="CNPJ">
                </div>
                <div class="mb-3">
                    <label for="telefone" class="form-label">Telefone</label>
                    <input type="text" class="form-control" id="telefone" placeholder="Telefone">
                </div>
                <button type="submit" class="btn btn-primary">Salvar</button>
            </form>
        </div>
    </NuxtLayout>
</template>