<script setup>
import {ref} from 'vue'
const num = ref(123)
console.log(num.value)

function onInput(e) {
    num.value = e.target.value
}

</script>

<template>
<h1>{{ num }}</h1>


<!-- 需求：将input的值和文本值绑定，也就是文本值和input内容同步显示，以下两个input功能一样 -->
<input type="text" @input="onInput" :value="num">
<input v-model="num"/>




</template>

<style scoped>
</style>