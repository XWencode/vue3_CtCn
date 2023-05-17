<template>
  <div>
    <h1>事件</h1>
    <!-- 原生DOM事件 -->
    <pre @click="handler">
      大江东去浪淘尽,千古分流人物
    </pre>
    <button @click="handler1(1,2,3,$event)">点击我传递多个参数</button>
    <hr>
    <!--
        vue2框架当中:这种写法自定义事件,可以通过.native修饰符变为原生DOM事件
        vue3框架下面写法其实即为原生DOM事件,且直接绑定在根标签上

        vue3:原生的DOM事件不管是放在标签身上、组件标签身上都是原生DOM事件
      -->
    <Event1 @click="handler2"></Event1>
    <hr>
    <!-- 绑定自定义事件xxx:实现子组件给父组件传递数据 -->
    <Event2 @customClick="handler3" @click="handler4"></Event2>
  </div>
</template>

<script setup lang="ts">
//引入子组件
import Event1 from './Event1.vue';
//引入子组件
import Event2 from './Event2.vue';
//事件回调--1
const handler=()=>{
  alert(123)
}
//事件回调--2
const handler1=(a,b,c,$event)=>{
  console.log(a,b,c,$event);
}
// 点击子组件1触发原生事件
const handler2=()=>{
  alert("我是子组件1触发原生事件")
}
// 组件2的自定义事件
const handler3=(a,b)=>{
  console.log("customClick",a,b);
}
// 在组件2上绑定的click自定义事件
const handler4=(a)=>{
  console.log("click自定义事件",a);
}
</script>

<style scoped>
</style>