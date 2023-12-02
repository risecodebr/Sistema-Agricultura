<script setup lang="ts">

</script>
<template>
    <NuxtLayout name="login">
        <div class="card text-center">
            <div class="card-header">
                <h1 class="display-4">Sistema Agrícola</h1>
            </div>
            <div class="card-body">
                <nuxt-link to="/dashboard" class="btn btn-primary">Dashboard</nuxt-link>
                <form>
                    <h3 class="mb-3 font-weight-normal">Iniciar Sessão</h3>
                    <input type="email" id="inputEmail" class="form-control mb-3" placeholder="Email" required autofocus>
                    <input type="password" id="inputPassword" class="form-control mb-3" placeholder="Senha" required>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary" type="submit">Entrar</button>
                    </div>
                    <a href="/sing-up" class="btn btn-link">Não tem uma conta?</a>
                </form> 
            </div>
        </div>
    </NuxtLayout>
</template>