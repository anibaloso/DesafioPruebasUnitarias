<template>
    <label for="mensaje">Mensaje</label>
    <input id="mensaje" v-model="mensaje" />
    <button @click="enviarMensaje">Enviar Mensaje</button>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['enviando'])
const mensaje = ref('')

const enviarMensaje = () => {
    emit('enviando', mensaje.value)
}

</script>
