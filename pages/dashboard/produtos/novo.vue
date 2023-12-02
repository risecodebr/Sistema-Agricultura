<template>
    <NuxtLayout name="default">
        <div class="container mt-2">
            <h1>Novo Produto</h1>
            <form>
                <div class="mb-3">
                    <label for="codigo" class="form-label">Codigo</label>
                    <input type="text" class="form-control" id="codigo" placeholder="Codigo">
                </div>
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome" placeholder="Nome">
                </div>
                <div class="mb-3">
                    <label for="preco" class="form-label">Preço</label>
                    <input type="text" class="form-control" id="preco" placeholder="Preço">
                </div>
                <div class="mb-3">
                    <label for="quantidade" class="form-label">Quantidade</label>
                    <input type="text" class="form-control" id="quantidade" placeholder="Quantidade">
                </div>
                <div class="mb-3">
                    <label for="descricao" class="form-label">Descrição</label>
                    <input type="text" class="form-control" id="descricao" placeholder="Descrição">
                </div>
                <div class="mb-3">
                    <label for="fornecedor" class="form-label">Fornecedor</label>
                    <select class="form-select" id="fornecedor">
                        <option selected>Selecione um fornecedor</option>
                        <option value="1">Fornecedor 1</option>
                        <option value="2">Fornecedor 2</option>
                        <option value="3">Fornecedor 3</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="dataValidade" class="form-label">Data de Validade</label>
                    <input type="date" class="form-control" id="dataValidade" placeholder="Data de Validade">
                </div>
                <div class="mb-3">
                    <label for="numeroPedido" class="form-label">Numero do Pedido</label>
                    <input type="text" class="form-control" id="numeroPedido" placeholder="Numero do Pedido">
                </div>
                <div class="mb-3">
                    <label for="lote" class="form-label">Lote</label>
                    <input type="text" class="form-control" id="lote" placeholder="Lote">
                </div>
                <button type="submit" class="btn btn-primary mb-3">Salvar</button>
            </form>
        </div>
    </NuxtLayout>
</template>