<template>
  <div class="child1">
    <h3>我是子组件1:曹植</h3>
  </div>
</template>

<script setup lang="ts">
import $bus from '@/bus';
//组合式API函数
import { onMounted, onBeforeUnmount } from 'vue';
//组件挂载完毕的时候,当前组件绑定一个事件,接受将来兄弟组件传递的数据
onMounted(()=>{
  $bus.on('getCar',(car)=>{
    console.log("感谢兄弟送来的"+car);
  })
})
onBeforeUnmount(()=>{
  $bus.off('getCar')
  console.log("卸载了getCar事件");
  
})
</script>

<style scoped>
.child1 {
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>