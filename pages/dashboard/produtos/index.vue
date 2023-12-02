<script setup lang="ts">
    let produtos = [
        {
            id: 1,
            codigo: "123",
            nome: "Produto 1",
            preco: 10.00,
            quantidade: 10,
        },
    ];
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
                            <tr v-for="produto in produtos" :key="produto.id">
                                <td>{{ produto.codigo }}</td>
                                <td>{{ produto.nome }}</td>
                                <td>R${{ produto.preco }}</td>
                                <td>{{ produto.quantidade }}</td>
                                <td>
                                    <nuxt-link :to="`/dashboard/produtos/${produto.id}`">
                                        <font-awesome-icon icon="edit"></font-awesome-icon>
                                    </nuxt-link>
                                </td>
                                <td>
                                    <nuxt-link :to="`/dashboard/produtos/excluir/${produto.id}`">
                                        <font-awesome-icon icon="trash"></font-awesome-icon>
                                    </nuxt-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>