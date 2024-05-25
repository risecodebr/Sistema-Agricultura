<script setup>


let installPrompt = ref(null);


onMounted(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        installPrompt.value = e;
    });
});

async function installPwa() {
    if (installPrompt.value) {
        installPrompt.value.prompt();
        const { outcome } = await installPrompt.userChoice;
    }

}
</script>


<template>
    <NuxtLayout name="default">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Sistema Agricultura</h1>
                </div>
                <div class="mt-3">
                    <button @click="installPwa" class="btn btn-primary">Instalar em meu Celular ou Computador</button>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>