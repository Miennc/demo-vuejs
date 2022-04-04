<script>
export default {
  name: 'App',
  data() {
    return {
      products: [],
      carts: [],
      search: '',
      active: false,
      total: 0,
    }
  },
  methods: {
    getData() {
      fetch(`https://6246a3c3e3450d61b000fdf0.mockapi.io/products?search=${this.search}`).then(response => response.json()).then((data) => {
        this.products.push(data)
      })
      this.products.splice(0, 1)
    },
    onSubmit() {
      this.getData();
      this.search = '';
    },
    addToCart(id) {
      if (this.carts.find(product => product.id === id)) {
        alert('sản phẩm đã có trong giỏ hàng  !');
      } else {
        this.carts.push(this.products.flat().find(product => product.id === id));
        localStorage.setItem('listCart', JSON.stringify(this.carts));
        alert('thêm sản phẩm vào giỏ hàng !');
      }

    },
    showCart() {
      this.active = !this.active;
      this.products = [];
      if (localStorage.getItem('listCart')) {
        this.carts = JSON.parse(localStorage.getItem('listCart'));
      }
    },
    removeItemCart(id) {
      this.carts.splice(this.carts.find(item => item.id === id), 1);
      localStorage.setItem('listCart', JSON.stringify(this.carts));
      alert('xóa sản phẩm khỏi giỏ hàng !');
    },
    payment() {
      this.total = this.carts.reduce((total, item) => total + Number(item.price), 0);
    },

  },
  mounted() {
    this.getData();
  },
}
</script>

<template>
  <div id="app">
    <div class="menu">
      <div>
        <form action="" @submit.prevent="onSubmit()">
          <input type="text" v-model="search" placeholder="Search" class="search">
        </form>
      </div>
      <div class="cart" @click="showCart()">cart</div>
      <div class="cart" v-show="active" @click="payment()">payment</div>
    </div>
    <div v-show="active"> tổng tiền hàng: {{ total }}</div>
    <div v-show="active"> thuế là : {{ total * 0.08 }}</div>
    <div v-show="active"> tổng tiền hóa đơn : {{ total + (total * 0.08) }}</div>
    <div v-for="(cart, index) in carts" :key="index" v-show="active" class="listCart">
      <div><img :src="cart.thumb" alt=""></div>
      <div> {{ cart.name }}</div>
      <div class="colorPrice">::{{ cart.price }}</div>
      <div>
        <button @click="removeItemCart(cart.id)">xóa khỏi giỏ hàng</button>
      </div>
    </div>

    <ul v-for="(item, index) in products.flat()" :key="index">
      <div> Name :{{ item.name }}</div>
      <div> Price :{{ item.price }}</div>
      <div> Description :{{ item.description }}</div>
      <div>
        <button @click="addToCart(item.id)">add to cart</button>
      </div>
      <img :src="item.thumb" alt="">
    </ul>

  </div>

</template>

<style>
#app {
  text-align: center;
}

.search {
  width: 500px;
  height: 30px;
  border-radius: 10px;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart {
  width: 100px;
  height: 36px;
  background: red;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 23px;
  cursor: pointer;
}

.listCart {
  display: flex;
  justify-content: center;
  align-items: center;
}

.listCart img {
  width: 200px;
  height: 200px;
}

.listCart .colorPrice {
  color: red;
}
</style>