<script setup>
import {ref} from 'vue'

const counter = ref(0)

function aumentar() {
    counter.value++
}
function disminuir() {
    counter.value--
}
</script>
<template>
    <div>
        <h1 >Contador : <span id="contador">{{ counter }}</span></h1>
        <button @click="aumentar" id="aumentar">Aumentar +1 </button>
        <button @click="disminuir" id="disminuir">Disminuir -1 </button>

    </div>

</template>