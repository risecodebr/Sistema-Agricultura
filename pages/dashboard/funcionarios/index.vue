<script setup lang="ts">

const { data: funcionarios, refresh } = await useFetch('/api/v1/funcionarios');

async function excluir(id: number) {
    await useFetch(`/api/v1/funcionarios/${id}`, {
        method: 'DELETE',
    });

    refresh();
}

</script>
<template>
    <NuxtLayout name="default">
        <div class="container mt-2">
            <div class="row">
                <div class="col-12 table-responsive-sm">
                    <div class="d-flex">
                        <h1>Funcionarios</h1>
                        <NuxtLink to="/dashboard/funcionarios/novo" class="btn btn-primary ms-auto">Novo</NuxtLink>
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
                            <tr v-for="funcionario in funcionarios?.data" :key="funcionario.id">
                                <td>{{ funcionario.nome }}</td>
                                <td>{{ funcionario.email }}</td>
                                <td>
                                    <NuxtLink :to="`/dashboard/funcionarios/editar/${funcionario.id}`">
                                        <font-awesome-icon icon="edit"></font-awesome-icon>
                                    </NuxtLink>
                                </td>
                                <td>
                                    <a @click="excluir(funcionario.id)">
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