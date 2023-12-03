<script setup lang="ts">

const route = useRoute();

const { data: produto } = await useFetch(`/api/v1/produtos/${route.params.id}`);

let form = {
    ...produto.value.data,
    data_validade: new Date(produto.value.data.data_validade).toISOString().slice(0, 16),
}

const { data: fornecedores } = await useFetch('/api/v1/fornecedores');
form.fornecedor_id = fornecedores?.value?.data[0]?.id || 0;

async function submit() {
    const { data } = await useFetch('/api/v1/produtos/update', {
        method: 'PUT',
        body: JSON.stringify(form)
    });

    if (data?.value?.statusCode !== 200) {
        alert('Erro ao salvar produto');
        return;
    }

    navigateTo('/dashboard/produtos');
}


</script>

<template>
    <NuxtLayout name="default">
        <div class="container mt-2">
            <h1>Novo Produto</h1>
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label for="codigo" class="form-label">Codigo</label>
                    <input type="text" class="form-control" id="codigo" v-model="form.codigo" required placeholder="Codigo">
                </div>
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome" v-model="form.nome" required placeholder="Nome">
                </div>
                <div class="mb-3">
                    <label for="preco" class="form-label">Preço</label>
                    <input type="number" class="form-control" id="preco" v-model="form.preco" required placeholder="Preço">
                </div>
                <div class="mb-3">
                    <label for="quantidade" class="form-label">Quantidade</label>
                    <input type="number" class="form-control" id="quantidade" v-model="form.quantidade" required
                        placeholder="Quantidade">
                </div>
                <div class="mb-3">
                    <label for="descricao" class="form-label">Descrição</label>
                    <input type="text" class="form-control" id="descricao" v-model="form.descricao" required
                        placeholder="Descrição">
                </div>
                <div class="mb-3">
                    <label for="fornecedor" class="form-label">Fornecedor</label>
                    <select class="form-select" id="fornecedor" v-model="form.fornecedor_id" required>
                        <option v-for="fornecedor in fornecedores?.data" :key="fornecedor.id" :value="fornecedor.id">
                            {{ fornecedor.nome }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="dataValidade" class="form-label">Data de Validade</label>
                    <input type="datetime-local" class="form-control" id="dataValidade" v-model="form.data_validade" required placeholder="Data de Validade">
                </div>
                <div class="mb-3">
                    <label for="numeroPedido" class="form-label">Numero do Pedido</label>
                    <input type="text" class="form-control" id="numeroPedido" v-model="form.numero_pedido" required placeholder="Numero do Pedido">
                </div>
                <div class="mb-3">
                    <label for="lote" class="form-label">Lote</label>
                    <input type="text" class="form-control" id="lote" v-model="form.lote" required placeholder="Lote">
                </div>
                <button type="submit" class="btn btn-primary mb-3">Salvar</button>
            </form>
        </div>
    </NuxtLayout>
</template>