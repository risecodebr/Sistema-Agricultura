<script setup lang="ts">
    let funcionarios = [
        {
            id: 1,
            nome: "João",
            email: "aaaaaaa2gmail.com",
        },
        {
            id: 2,
            nome: "Maria",
            email: "aaaaaaa2gmail.com",
        }
    ];
</script>
<template>
    <NuxtLayout name="default">
        <div class="container mt-2">
            <div class="row">
                <div class="col-12 table-responsive-sm">
                    <div class="d-flex">
                        <h1>Funcionarios</h1>
                        <nuxt-link to="/dashboard/funcionarios/novo" class="btn btn-primary ms-auto">Novo</nuxt-link> 
                    </div>
                    <table class="table table-striped ">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="funcionario in funcionarios" :key="funcionario.id">
                                <td>{{ funcionario.nome }}</td>
                                <td>{{ funcionario.email }}</td>
                                <td>
                                    <nuxt-link :to="`/dashboard/funcionarios/${funcionario.id}`">
                                        <font-awesome-icon icon="edit"></font-awesome-icon>
                                    </nuxt-link>
                                </td>
                                <td>
                                    <nuxt-link :to="`/dashboard/funcionarios/excluir/${funcionario.id}`">
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