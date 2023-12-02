<script setup lang="ts">
import "../assets/css/default.scss";
import navbar from "../componentes/navbar.vue";

</script>
<template>
    
    <navbar/>
    <div class="main">
        <slot />
    </div>
</template>