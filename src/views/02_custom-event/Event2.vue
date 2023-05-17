<template>
  <div class="child">
    <p>我是子组件2</p>
    <button @click="handler">点击我触发自定义事件customClick</button>
    <button @click="$emit('click','白骨精')">点击我触发自定义事件click</button>
  </div>
</template>

<script setup lang="ts">
//利用defineEmits方法返回函数触发自定义事件
//defineEmits方法不需要引入直接使用
// 使用的自定义事件需要在defineEmits中写出
const $emit = defineEmits(['customClick','click'])
// 如果没有在defineEmits写出也会触发自定义事件，但是同时也会触发父组件的原生click事件
// const $emit = defineEmits()
const handler = () => {
  // 第一个参数为自定义事件名,后面为传递的参数
  $emit('customClick', '孙悟空', '猪八戒')
}
</script>

<style scoped>
.child {
  width: 400px;
  height: 200px;
  background: pink;
}
</style>
