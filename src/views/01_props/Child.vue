<template>
  <div class="son">
    <h1>我是子组件:曹植</h1>
    <h1>我是父组件数据:{{ infos.info }}</h1>
    <!-- props可以省略前面名字,但在script里使用就必须加前面名字 -->
    <h1>我是父组件数据:{{ info1 }}</h1>
    <button @click="changePropsData">点击改变props数据</button>
  </div>
</template>

<script setup lang="ts">
//需要使用到defineProps方法去接受父组件传递过来的数据

//defineProps是Vue3提供方法,不需要引入直接使用
const infos = defineProps(['info', 'info1'])

function changePropsData() {
  // infos.info1='hello' //提示错误,无法为“info1”赋值，因为它是只读属性
}
</script>

<style scoped>
.son {
  width: 400px;
  height: 200px;
  background: hotpink;
}
</style>
