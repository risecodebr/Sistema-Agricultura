<script setup lang="ts">

const { data } = await useFetch('/api/v1/configuracao', { lazy: true });

const { data: funcionarios } = await useFetch('/api/v1/funcionarios', { lazy: true })
const { data: fornecedores } = await useFetch('/api/v1/fornecedores', { lazy: true })
const { data: produtos } = await useFetch('/api/v1/produtos', { lazy: true })

function baixar() {
    const a = document.createElement('a');
    a.href = '/api/v1/relatorio';
    a.download = 'relatorio.pdf';
    a.click();
}

</script>
<template>
    <NuxtLayout name="default">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Relatorio do(a) {{ data?.data?.nome }}</h1>
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
                                <td>{{ produtos?.data.reduce((acumulador, produto) => acumulador + produto.quantidade, 0) }}
                                </td>
                            </tr>
                            <tr>
                                <th>Valor Total dos Produtos</th>
                                <td>{{ produtos?.data.reduce((acumulador, produto) => acumulador + produto.preco, 0) }}</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td><a href="/api/v1/backup" download class="btn btn-primary">Baixar</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>