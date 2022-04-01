<script>


export default {
  name: 'App',
  data() {
    return {
      previous: null,
      display: 0,
      operator: null,
      operatorClicked: false
    };
  },
  methods: {
    clear() {
      this.display = 0;
    },

    append(number) {
      if (this.operatorClicked) {
        this.display = '';
        this.operatorClicked = false;
      }
      this.display = this.display === 0 ? (this.display = number) : '' + this.display + number;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.previous = this.display;
      this.operatorClicked = true;
    },
    multiply() {
      this.operator = (a, b) => a * b;
      this.previous = this.display;
      this.operatorClicked = true;
    },
    subtract() {
      this.operator = (a, b) => a - b;
      this.previous = this.display;
      this.operatorClicked = true;
    },
    add() {
      this.operator = (a, b) => a + b;
      this.previous = this.display;
      this.operatorClicked = true;
    },
    equal() {
      this.display = this.operator(Number(this.previous), Number(this.display));
      this.previous = null;
      this.operatorClicked = true;
    }
  }

}
</script>

<template>
  <div id="app">
    <div class="calc-body">
      <div class="display">
        {{ display }}
      </div>
      <div/>
      <button @click='append(7)' class="number number-7">7</button>
      <button @click='append(8)' class="number number-8">8</button>
      <button @click='append(9)' class="number number-9">9</button>
      <button @click='divide' class="number number-div">/</button>
      <button @click='append(4)' class="number number-4">4</button>
      <button @click='append(5)' class="number number-5">5</button>
      <button @click='append(6)' class="number number-6">6</button>
      <button @click='multiply' class="number number-mul">*</button>
      <button @click='append(1)' class="number number-1">1</button>
      <button @click='append(2)' class="number number-2">2</button>
      <button @click='append(3)' class="number number-3">3</button>
      <button @click='add' class="number number-add">+</button>
      <button @click='append(0)' class="number number-0">0</button>
      <button @click='clear' class="number number-clear">Clear</button>
      <button @click='equal' class="number number-equal">=</button>
      <button @click='subtract' class="number number-sub">-</button>
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

.display {
  width: 500px;
  background: pink;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.number {
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