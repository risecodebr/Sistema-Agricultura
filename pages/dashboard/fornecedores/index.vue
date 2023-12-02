<script setup lang="ts">
    let fornecedores = [
        {
            id: 1,
            nome: "João",
            cnpj: "123456789",
            telefone: "123456789",
        },
        {
            id: 2,
            nome: "Maria",
            cnpj: "123456789",
            telefone: "123456789",
        }
    ];
</script>
<template>
    <NuxtLayout name="default">
        <div class="container mt-2">
            <div class="row">
                <div class="col-12 table-responsive-sm">
                    <div class="d-flex">
                        <h1>Fornecedores</h1>
                        <nuxt-link to="/dashboard/fornecedores/novo" class="btn btn-primary ms-auto">
                            Novo
                        </nuxt-link>
                    </div>
                    <table class="table table-striped ">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CNPJ</th>
                                <th>Telefone</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="fornecedor in fornecedores" :key="fornecedor.id">
                                <td>{{ fornecedor.nome }}</td>
                                <td>{{ fornecedor.cnpj }}</td>
                                <td>{{ fornecedor.telefone }}</td>
                                <td>
                                    <nuxt-link :to="`/dashboard/fornecedores/${fornecedor.id}`">
                                        <font-awesome-icon icon="edit"></font-awesome-icon>
                                    </nuxt-link>
                                </td>
                                <td>
                                    <nuxt-link :to="`/dashboard/fornecedores/excluir/${fornecedor.id}`">
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