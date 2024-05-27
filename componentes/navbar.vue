<script setup>
const { data } = await useFetch('/api/v1/configuracao');

function logout() {
    useUserSession().clear();
    navigateTo('/');
}

</script>
<template>
    <header>
        <nav class="navbar bg-dark navbar-dark">
            <div class="container-fluid">
                <NuxtLink class="navbar-brand" href="/dashboard">{{ data?.data?.nome }}</NuxtLink>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                    aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse collapse" id="menu">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/dashboard">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/dashboard/treinamento">Treinamento</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/dashboard/funcionarios">Funcionarios</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/dashboard/fornecedores">Fornecedores</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/dashboard/produtos">Produtos</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/dashboard/relatorio">Relatorios E Backup</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/dashboard/configuracao">Configuração</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click="logout">Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>