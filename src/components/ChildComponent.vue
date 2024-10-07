<template>
    <label for="mensaje">Mensaje</label>
    <input id="mensaje" v-model="mensaje" />
    <button @click="enviarMensaje">Enviar Mensaje</button>
</template>

<script setup>
import { ref } from 'vue';

//definimos el metodo emit para emitir eventos desde el componente
const emit = defineEmits(['enviando'])

//se define una variable reactiva llamada "mensaje"
const mensaje = ref('')

//la funcion emite un evento llamado "enviando" que tiene el valor actual de mensaje
const enviarMensaje = () => {
    emit('enviando', mensaje.value)
}

</script>
