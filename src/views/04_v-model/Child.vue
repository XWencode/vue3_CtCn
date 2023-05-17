<template>
  <div class="child">
    <h3>子组件钱数:{{ modelValue }}</h3>
    <button @click="handler">父子组件数据同步</button>
  </div>
</template>

<script setup lang="ts">
// 自定义事件
let props = defineProps(['modelValue'])
let $emit = defineEmits(['onUpdate:modelValue'])
const handler = () => {
  $emit('onUpdate:modelValue', props.modelValue + 100)
}
</script>

<style scoped>
.child {
  width: 600px;
  height: 300px;
  background: skyblue;
}
</style>
