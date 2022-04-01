<template>
  <div id="app">
    <div class="wrapper">
      <div class="display">
        {{ display }}
      </div>
      <div class="wrapper-number">
        <div class="row-1">
          <button @click='append(7)' class="number number-7">7</button>
          <button @click='append(8)' class="number number-8">8</button>
          <button @click='append(9)' class="number number-9">9</button>
          <button @click='divide' class="number number-div">/</button>
        </div>
        <div class="row-2">
          <button @click='append(4)' class="number number-4">4</button>
          <button @click='append(5)' class="number number-5">5</button>
          <button @click='append(6)' class="number number-6">6</button>
          <button @click='multiply' class="number number-mul">*</button>
        </div>
        <div class="row-3">
          <button @click='append(1)' class="number number-1">1</button>
          <button @click='append(2)' class="number number-2">2</button>
          <button @click='append(3)' class="number number-3">3</button>
          <button @click='add' class="number number-add">+</button>
        </div>
        <div class="row-4">
          <button @click='append(0)' class="number number-0">0</button>
          <button @click='clear' class="number number-clear">Clear</button>
          <button @click='equal' class="number number-equal">=</button>
          <button @click='subtract' class="number number-sub">-</button>
        </div>

      </div>

    </div>
  </div>
</template>

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
      if (this.operatorClicked === true) {
        this.display = '';
        this.operatorClicked = false;
      }
      this.display =
          this.display === 0
              ? (this.display = number)
              : '' + this.display + number;
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;

}

.wrapper .wrapper-number {
  display: flex;
  flex-direction: column;
}

.display {
  width: 400px;
  height: 45px;
  margin-bottom: 25px;
  border: 1px solid #111;
  font-size: 2.5rem;
  cursor: default;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 1rem;
}

.number {
  width: 70px;
  height: 50px;
  margin: 15px;
}

</style>