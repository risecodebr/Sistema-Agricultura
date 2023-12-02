<script setup lang="ts">

let form = {
    email: '',
    password: ''
}

async function submit() {
    const { data } = await useFetch('/api/v1/auth/login', {
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
                    <h3 class="mb-3 font-weight-normal">Iniciar Sessão</h3>
                    <input type="email" class="form-control mb-3" v-model="form.email" placeholder="Email" required
                        autofocus>
                    <input type="password" class="form-control mb-3" v-model="form.password" placeholder="Senha" required>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary" type="submit">Entrar</button>
                    </div>
                    <NuxtLink href="/sing-up" class="btn btn-link">Não tem uma conta?</NuxtLink>
                </form>
            </div>
        </div>
    </NuxtLayout>
</template>