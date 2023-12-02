<script setup lang="ts">

let form = {
    nome: '',
    email: '',
    password: ''
}

async function submit() {
    const { data } = await useFetch('/api/v1/auth/sign-in', {
        method: 'POST',
        body: JSON.stringify(form)
    })

    if (data.value?.statusCode !== 200) {
        alert(data.value?.statusMessage)
        return
    }

    navigateTo('/dashboard/home')
}

</script>
<template>
    <NuxtLayout name="login">
        <div class="card text-center">
            <div class="card-header">
                <h1 class="display-4">Sistema Agrícola</h1>
            </div>
            <div class="card-body">
                <form @submit.prevent="submit">
                    <h3>Cadastrar</h3>
                    <input type="text" id="inputName" class="form-control mb-3" v-model="form.nome" placeholder="Nome" required autofocus>
                    <input type="email" id="inputEmail" class="form-control mb-3" v-model="form.email" placeholder="Email" required autofocus>
                    <input type="password" id="inputPassword" class="form-control mb-3" v-model="form.password" placeholder="Senha" required>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary" type="submit">Cadastrar</button>
                    </div>
                    <NuxtLink href="/" class="btn btn-link">Já tem uma conta?</NuxtLink>
                </form> 
            </div>
        </div>
    </NuxtLayout>
</template>