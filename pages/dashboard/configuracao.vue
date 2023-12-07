<script setup>

</script>
<template>
    <NuxtLayout name="default">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Configuração</h1>
                </div>
                <form @submit.prevent="submit">
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome da Fazenda</label>
                        <input type="text" class="form-control" id="nome" required placeholder="Nome">
                    </div>
                    <button type="submit" class="btn btn-primary">Salvar</button>
                </form>
            </div>
        </div>
    </NuxtLayout>
</template>