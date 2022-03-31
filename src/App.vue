<script>
export  default {
  name: 'App',
  data() {
    return {
       newTasks: '',
       edit:'',
       Tasks: [
          
       ],
    }
  },
  methods: {
    addTasks:function(){
      this.Tasks.push({todo:this.newTasks, done:false})
      this.newTasks ='';
    }
  }
}
</script>

<template>
  <div id="app">
        <input type="text" v-model="newTasks" placeholder="add todo">
         <button @click="addTasks()">add task</button>
         <div v-for="(task, index) in Tasks" :key="index">
           <span>
            <input type="checkbox" v-model="task.done">
          </span>
          <span :class="{done:task.done}">{{task.todo}}</span>
          </div>
     </div>
    
</template>

<style>
#app {
  text-align: center;
}
 .done{
    text-decoration: line-through;
  }

</style>