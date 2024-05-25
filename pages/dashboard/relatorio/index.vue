<script setup lang="ts">

const { data } = await useFetch('/api/v1/configuracao', { lazy: true });

const { data: funcionarios, refresh: refreshFuncionarios } = await useFetch('/api/v1/funcionarios', { lazy: true })
const { data: fornecedores, refresh: refleshFornecedores } = await useFetch('/api/v1/fornecedores', { lazy: true })
const { data: produtos, refresh: refleshProdutos } = await useFetch('/api/v1/produtos', { lazy: true })
const input = ref({} as HTMLInputElement)

async function readFile(file: File) {
    const reader = new FileReader()
    reader.readAsText(file)
    return new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = reject
    })
}

async function importData() {
    const file = input.value.files?.[0]
    if (!file) return
    const content = await readFile(file)
    const { data } = await useFetch('/api/v1/import', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: content as string,
        ignoreResponseError: true
    })

    refleshFornecedores()
    refreshFuncionarios()
    refleshProdutos()
    alert(data.value?.message)
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
                                <td>{{ produtos?.data.reduce((acumulador, produto) => acumulador + produto.quantidade,
                                    0) }}
                                </td>
                            </tr>
                            <tr>
                                <th>Valor Total dos Produtos</th>
                                <td>{{ produtos?.data.reduce((acumulador, produto) => acumulador + produto.preco, 0) }}
                                </td>
                            </tr>
                            <tr>
                                <th class="d-flex justify-content-end">
                                    <input type="file" ref="input" @change="importData" class="d-none"
                                        accept="application/JSON" />
                                    <button @click="input.click()" class="btn btn-primary">Importar</button>
                                </th>
                                <td><a href="/api/v1/backup" download class="btn btn-primary">Baixar</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>