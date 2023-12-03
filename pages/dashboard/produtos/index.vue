<script setup lang="ts">

const { data: produtos, refresh } = await useFetch('/api/v1/produtos');

async function excluir(id: number) {
    await useFetch(`/api/v1/produtos/${id}`, {
        method: 'DELETE'
    });

    await refresh();
}

</script>
<template>
    <NuxtLayout name="default">
        <div class="container mt-2">
            <div class="row">
                <div class="col-12 table-responsive-sm">
                    <div class="d-flex">
                        <h1>Produtos</h1>
                        <nuxt-link to="/dashboard/produtos/novo" class="btn btn-primary ms-auto">Novo</nuxt-link>
                    </div>
                    <table class="table text-center table-striped ">
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Qtd</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="produto in produtos?.data" :key="produto.id">
                                <td>{{ produto.codigo }}</td>
                                <td>{{ produto.nome }}</td>
                                <td>R${{ produto.preco }}</td>
                                <td>{{ produto.quantidade }}</td>
                                <td>
                                    <nuxt-link :to="`/dashboard/produtos/editar/${produto.id}`">
                                        <font-awesome-icon icon="edit"></font-awesome-icon>
                                    </nuxt-link>
                                </td>
                                <td>
                                    <a @click="excluir(produto.id)">
                                        <font-awesome-icon icon="trash"></font-awesome-icon>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>