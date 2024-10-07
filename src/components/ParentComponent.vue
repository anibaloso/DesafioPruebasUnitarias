<template>
    <div class="container">
        <h2>Aca esta el hijo y manda el mensaje</h2>
        <ChildComponent @enviando="eventEmit" />
    </div>
    <div class="container">
        <h2>Aca esta el padre y recibe el mensaje</h2>
        <h3 v-if="mensaje">Mensaje recibido: {{ mensaje }}</h3>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from '@/components/ChildComponent.vue'

const mensaje = ref('')

const eventEmit = (nuevoMensaje) => mensaje.value = nuevoMensaje

</script>

<style scoped>
.container {
    border: 1px solid;
    margin-top: 2rem;
}
</style>
