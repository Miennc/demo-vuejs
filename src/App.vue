<script>
export default {
  name: 'App',
  data() {
    return {
      carts: [],
      total: 0,
      products: [
        {
          id: 1,
          name: 'product1',
          price: 200,
          releaseDate: '08-01-2021',
          sellingProducts: true,
          branch: 'LV',
          quantity: 0,
          description: 'mô văn tả',
          img: 'https://i.pinimg.com/564x/27/37/20/27372020ca6311452c34c901aae34372.jpg',
          badge: 'bán chạy',
          color: ['red', 'blue', 'yellow', 'pink']

        },
        {
          id: 2,
          name: 'product2',
          price: 200,
          releaseDate: '08-01-2021',
          sellingProducts: true,
          branch: 'GC',
          quantity: 0,
          description: 'mô văn tả',
          badge: 'không bán chạy',
          img: 'https://i.pinimg.com/564x/5a/1e/dd/5a1edd052c6ce4424bed1099526309e9.jpg',
          color: ['red', 'blue', 'yellow', 'pink']

        },

      ]
    }
  },
  computed: {
    isDisabled() {
      return this.products.length === 0;
    }
  },
  methods: {
    addToCart(id) {
      if (this.carts.find(product => product.id === id)) {
        this.carts.find(product => product.id === id).quantity++;
        localStorage.setItem('listCart', JSON.stringify(this.carts));
      } else {
        this.carts.push(this.products.flat().find(product => product.id === id));
        localStorage.setItem('listCart', JSON.stringify(this.carts));
        alert('thêm sản phẩm vào giỏ hàng !');
      }
    },
    showCart() {
      if (localStorage.getItem('listCart')) {
        this.carts = JSON.parse(localStorage.getItem('listCart'));
      }
    },
    payment(){
      this.total = this.carts.reduce((total, item) => total + (Number(item.price) *Number(item.quantity)), 0);
    }
  }
}
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="content">
        <div v-for="(item, index) in products" :key="index">
          <div> {{ item.name }}</div>
          <div>{{ item.description }}</div>
          <div>{{ item.releaseDate  |formatDate }}</div>
          <div>{{ item.price | formatCurrency }}</div>
          <div>{{ item.badge }}</div>
          <div v-for="(color, index) in item.color" :key="index">
            <button :class="color"> {{ color }}</button>
          </div>
          <button :disabled="isDisabled" @click="addToCart(item.id)">thêm vào giỏ hàng</button>
          <div><img :src="item.img" alt=""></div>

        </div>
      </div>
      <div class="cart">
        <button @click="showCart">showCart</button>
        <div v-for="(item, index) in carts" :key="index">
          <div> {{ item.name }}</div>
          <div> số lượng {{ item.quantity }}</div>
          <div> giá {{ item.price }}</div>
        </div>
      </div>
      <div>
           <button @click="payment()">payment</button>
        <div> tổng tiền {{total}}</div>
      </div>
    </div>
  </div>

</template>

<style>
#app {
  text-align: center;
}

.red {
  background: red;
}

.blue {
  background: blue;
}

.yellow {
  background: yellow;
}

.pink {
  background: pink;
}

.container {
  display: flex;
}
</style>