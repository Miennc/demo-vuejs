<script>
export  default {
  name: 'App',
  data() {
    return {
      number: 1,
      message:"hello",
      users: {
        name:'mien',
        age:20
      }
    }
  },
  methods: {
    Increment(){
      return this.number++;
    }
  },
}
</script>

<template>
  <div id="app">
    {{name}}
    <div>{{message | to-UpperCase}}</div>
    <button @click="Increment">button</button>
  </div>

</template>

<style>
#app {
  text-align: center;
}
</style>