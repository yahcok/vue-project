<!-- javascript -->
<script setup>

// 暴露给父组件，传递给子组件
defineProps({
    msg: {
        type: String,
        // 是否是必要的参数
        required: true
    },
})
import {reactive, ref} from 'vue'

// 而另一个 API ref() 则可以接受任何值类型。ref 会返回一个包裹对象，并在 .value 属性下暴露内部值。
const count = ref(0)
console.log(count)//[object Object] === RefImpl {__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: 0, _value: 0}

//reactive() 只适用于对象 (包括数组和内置类型，如 Map 和 Set)。
const testPrint = reactive({
    count: 0
})
console.log(testPrint)//Proxy(Object) 
console.log(testPrint.count)// 0

// const addOne = function() {
//     count.value++
// }
function addOne() {
    count.value++
}

const reduceOne = function() {
    count.value--
}

/*
 script setup是vue3中新增的组件
 */


</script>

<!-- html页面 -->
<template>
    <div>
        <!-- 在模板中访问的msg ref不需要使用.value, 它会被自动解包 -->
        <h1>{{ msg }}</h1> <br/>
        <button @click="addOne">+1</button>&nbsp;&emsp;
        <button @click="reduceOne">-1</button>
        <h1>{{ count }}</h1>
    </div>
</template>

<!-- css样式 scoped：代表该css样式只在该组件中有效

表示局部部署
没有的话里面的css样式会在所有组件中进行渲染
-->
<style scoped>
div {
    /* border: 1px solid red; */
    text-align: center;
}
button {
    width: 70px;
    height: 30px;
}
text {
    color: red;
    display: block;
}
</style>