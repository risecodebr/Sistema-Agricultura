<script setup lang="ts">
</script>
<template>
    <NuxtLayout name="default">
        <div class="container">
            <div class="card mt-3">
                <div class="card-header">
                    <h1>Treinamento do uso do sistema</h1>
                </div>
                <div class="card-body">
                    <p>Acessando a pagina <NuxtLink href="/dashboard/configuracao">Configuração</NuxtLink> você poderá
                        fazer o cadastro e personalização do sistema para a sua fazenda!</p>
                    <p>Acessando a pagina <NuxtLink href="/dashboard/funcionarios">Funcionarios</NuxtLink> você poderá fazer
                        o cadastro dos funcionarios da fazenda!</p>
                    <p>Acessando a pagina <NuxtLink href="/dashboard/fornecedores">Fornecedores</NuxtLink> você poderá fazer
                        o cadastro dos fornecedores da fazenda!</p>
                    <p>Apos cadastrar os fornecedores você podera acessar os <NuxtLink href="/dashboard/produtos">Produtos
                        </NuxtLink> para fazer o cadastro dos produtos da fazenda!</p>
                    <p>Apos cadastrar os produtos você podera acessar os <NuxtLink href="/dashboard/relatorio">Relatorio
                        </NuxtLink>
                        para ver o relatorio e informações da fazenda!</p>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>