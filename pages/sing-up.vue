<script setup lang="ts">

</script>
<template>
    <NuxtLayout name="login">
        <div class="card text-center">
            <div class="card-header">
                <h1 class="display-4">Sistema Agrícola</h1>
            </div>
            <div class="card-body">
                <form>
                    <h3>Cadastrar</h3>
                    <input type="email" id="inputEmail" class="form-control mb-3" placeholder="Email" required autofocus>
                    <input type="password" id="inputPassword" class="form-control mb-3" placeholder="Senha" required>
                    <input type="password" id="inputPassword" class="form-control mb-3" placeholder="Confirmar Senha" required>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary" type="submit">Cadastrar</button>
                    </div>
                    <a href="/" class="btn btn-link">Já tem uma conta?</a>
                </form> 
            </div>
        </div>
    </NuxtLayout>
</template>