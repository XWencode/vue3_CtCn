<template>
  <div class="box">
    <h1>props:我是父组件曹操</h1>
    <hr />
    <Child info="我是曹操" :info1="info"></Child>
  </div>
</template>

<script setup lang="ts">
import Child from '@/views/01_props/Child.vue'
import { ref } from 'vue'

//props:可以实现父子组件通信,props数据还是只读的！！！
const info = ref('你好')
</script>

<style scoped>
.box {
  width: 100vw;
  height: 400px;
  background: yellowgreen;
}
</style>
