<script setup>


let installPrompt = null;


onMounted(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log(e)
        e.preventDefault();
        installPrompt = e;
    });
});

async function installPwa() {
    console.log(installPrompt)
    if (installPrompt) {
        installPrompt.prompt();
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
                <div class="mt-3" v-if="installPrompt">
                    <button @click="installPwa" class="btn btn-primary">Instalar em meu Celular ou Computador</button>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>