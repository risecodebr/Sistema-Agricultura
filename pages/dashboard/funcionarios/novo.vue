<script setup lang="ts">

const form = {
    nome: '',
    email: '',
    password: '',
}

async function submit() {
    const { data } = await useFetch('/api/v1/funcionarios/create', {
        method: 'POST',
        body: JSON.stringify(form)
    });

    if (data.value?.statusCode !== 200) {
        alert('Erro ao cadastrar funcionario!');
    } 
    
    navigateTo('/dashboard/funcionarios');
}
</script>
<template>
    <NuxtLayout name="default">
        <div class="container mt-2">
            <h1>Novo Funcionario</h1>
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome" v-model="form.nome" required placeholder="Nome">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" v-model="form.email" required placeholder="Email">
                </div>
                <div class="mb-3">
                    <label for="senha" class="form-label">Senha</label>
                    <input type="password" class="form-control" id="senha" v-model="form.password" required
                        placeholder="Senha">
                </div>
                <button type="submit" class="btn btn-primary">Salvar</button>
            </form>
        </div>
    </NuxtLayout>
</template>