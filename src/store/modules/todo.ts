//定义组合式API仓库
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
let useTodoState = defineStore('todo', () => {
  let todos = ref(['吃饭', '睡觉', '打cf'])
  let arr=ref([1,2,3,4,5])
  const total=computed(()=>{
    return arr.value.reduce((pre,next)=>{
        return pre+next
    },0)
  })
  return {
    todos,
    total,
    updateTodos(todo: any) {
      todos.value.push(todo)
    },
    
  }
})

export default useTodoState
