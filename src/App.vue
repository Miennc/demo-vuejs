<script>
export default {
  name: "App",

  data() {
    return {
      formula: '',
      result: null,
    }
  },
  methods: {
    getNumber(value) {
      this.formula = value;
    },
  }
}
</script>


<template>
  <div id="app">
    <div class="calc-body">
      <div class="calculator-display">
        <div class="calculator-formula" v-cloak>{{ formula }}</div>
        <div class="calculator-result" v-cloak>{{ result }}</div>
      </div>
      <div/>
      <div class="calc-inputs">
        <button class="btn_square alt" aria-label="Clear" @click="clearAll">CE</button>
        <button class="btn_square" aria-label="Zero" @click="getNumber(0)">0</button>
        <button class="btn_square" aria-label="One" @click="getNumber(1)">1</button>
        <button class="btn_square" aria-label="Two" @click="getNumber(2)">2</button>
        <button class="btn_square" aria-label="Three" @click="getNumber(3)">3</button>
        <button class="btn_square" aria-label="Four" @click="getNumber(4)">4</button>
        <button class="btn_square" aria-label="Five" @click="getNumber(5)">5</button>
        <button class="btn_square" aria-label="Six" @click="getNumber(6)">6</button>
        <button class="btn_square" aria-label="Seven" @click="getNumber(7)">7</button>
        <button class="btn_square" aria-label="Eight" @click="getNumber(8)">8</button>
        <button class="btn_square" aria-label="Nine" @click="getNumber(9)">9</button>
        <button class="btn_square alt" aria-label="add" @click="add('+')">+</button>
        <button class="btn_square alt" aria-label="subtract" @click="subtract('-')">-</button>
        <button class="btn_square alt" aria-label="multiply" @click="multiply('x')">*</button>
        <button class="btn_square alt" aria-label="division" @click="division('%')">%</button>
        <button class="btn_square alt" aria-label="equals" @click="equals()">=</button>
      </div>
    </div>
  </div>
</template>

<style>
#App {
  text-align: center;
}

.calc-body {
  width: 500px;
  height: 500px;
  background: rgb(184, 184, 188);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
}

.calculator-display {
  width: 500px;
  background: pink;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn_square {
  margin: 10px 10px 10px 10px;
  width: 100px;
  height: 50px;
  background: rgb(221, 96, 232);
}

.display {
  background: #ddd;
  border: 1px solid #111;
  margin: 0 auto;
  width: 500px;
  height: 50px;
  cursor: default;
}
</style>