<script setup lang="ts">

const { data: funcionarios } = await useFetch('/api/v1/funcionarios')
const { data: fornecedores } = await useFetch('/api/v1/fornecedores')
const { data: produtos } = await useFetch('/api/v1/produtos')

</script>
<template>
    <NuxtLayout name="default">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Relatorio</h1>
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>Funcionarios cadastrados</th>
                                <td>{{ funcionarios?.count }}</td>
                            </tr>
                            <tr>
                                <th>Fornecedores Cadastrados</th>
                                <td>{{ fornecedores?.count }}</td>
                            </tr>
                            <tr>
                                <th>Produtos Cadastrados</th>
                                <td>{{ produtos?.count }}</td>
                            </tr>
                            <tr>
                                <th>Quantidade Total dos Produtos</th>
                                <td>{{ produtos?.data.reduce((acumulador, produto) => acumulador + produto.quantidade, 0) }}</td>
                            </tr>
                            <tr>
                                <th>Valor Total dos Produtos</th>
                                <td>{{ produtos?.data.reduce((acumulador, produto) => acumulador + produto.preco, 0) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>