<script setup lang="ts">

const { data: fornecedores, refresh, pending } = await useFetch('/api/v1/fornecedores', {
    lazy: true
});

async function excluir(id: number) {
    await useFetch('/api/v1/fornecedores/' + id, {
        method: 'DELETE',
        body: JSON.stringify({ id })
    });

    refresh();
}

</script>
<template>
    <NuxtLayout name="default">
        <div class="container mt-2">
            <div class="row">
                <div class="col-12 table-responsive-sm">
                    <div class="d-flex justify-content-between">
                        <h1>Fornecedores</h1>
                        <div>
                            <font-awesome-icon @click="refresh" :icon="['fas', 'rotate']" class="cursor-pointer" size="2xl"
                                style="color: #0d6efd;" />
                            <NuxtLink to="/dashboard/fornecedores/novo" class="ms-2">
                                <font-awesome-icon :icon="['fas', 'plus']" size="2xl" />
                            </NuxtLink>
                        </div>
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
                            <tr v-for="fornecedor in fornecedores?.data" :key="fornecedor.id">
                                <td>{{ fornecedor.nome }}</td>
                                <td>{{ fornecedor.cnpj }}</td>
                                <td>{{ fornecedor.telefone }}</td>
                                <td>
                                    <NuxtLink :to="`/dashboard/fornecedores/editar/${fornecedor.id}`">
                                        <font-awesome-icon icon="edit" />
                                    </NuxtLink>
                                </td>
                                <td>
                                    <a @click="excluir(fornecedor.id)">
                                        <font-awesome-icon icon="trash" style="color: #0d6efd;" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-12" v-if="pending">
                    <div class="d-flex justify-content-center">
                        <font-awesome-icon icon="spinner" spin size="2x" />
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>