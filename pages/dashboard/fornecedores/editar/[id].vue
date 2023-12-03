<script setup lang="ts">

const route = useRoute();

const { data } = await useFetch("/api/v1/fornecedores/" + route.params.id);

let form = {
    ...data.value.data
}

async function submit() {
    await useFetch('/api/v1/fornecedores/update', {
        method: 'PUT',
        body: JSON.stringify(form)
    });

    navigateTo('/dashboard/fornecedores');
}
</script>

<template>
    <NuxtLayout name="default">
        <div class="container mt-2">
            <h1>Novo Fornecedor</h1>
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome" v-model="form.nome" placeholder="Nome">
                </div>
                <div class="mb-3">
                    <label for="cpnj" class="form-label">CNPJ</label>
                    <input type="text" class="form-control" id="cpnj" v-model="form.cnpj" placeholder="CNPJ">
                </div>
                <div class="mb-3">
                    <label for="telefone" class="form-label">Telefone</label>
                    <input type="text" class="form-control" id="telefone" v-model="form.telefone" placeholder="Telefone">
                </div>
                <button type="submit" class="btn btn-primary">Salvar</button>
            </form>
        </div>
    </NuxtLayout>
</template>