<script>
export default {
  name: 'App',
  data() {
    return {
      products: [],
      carts: [],
      search: '',
      active: false,
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
      this.carts.push(this.products.flat().find(product => product.id === id));
      localStorage.setItem('listCart', JSON.stringify(this.carts));
      alert('sản phẩm đã được thêm vào giỏ hàng !');
    },
    showCart() {
      this.active = !this.active;
      this.products = [];
      if (localStorage.getItem('listCart')) {
        this.carts = JSON.parse(localStorage.getItem('listCart'));
      }
    },
    showHome() {
      this.active = !this.active;
      this.getData();
    }
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
      <div class="cart" @click="showHome()">home</div>
    </div>

    <div v-for="(cart, index) in carts" :key="index" v-show="active">
      <div>{{ cart.name }}</div>
      <img :src="cart.thumb" alt="">
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
  width: 66px;
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
</style>