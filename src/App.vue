<script>
export default {
  name: "App",

  data() {
    return {
      cart: [],
      products: [
        {
          id: 1,
          name: "PS5",
          price: 5555,
          publicDate: "05-05-2021",
          image:
              "https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg",
          hot: true,
        },
        {
          id: 2,
          name: "PS4",
          price: 4444,
          publicDate: "04-04-2021",
          image:
              "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$",
          hot: true,
        },
        {
          id: 3,
          name: "PS3",
          price: 3333,
          publicDate: "03-03-2021",
          image:
              "https://game.haloshop.vn/image/catalog/blogs/ps3-co-con-dang-mua/ps3-co-con-dang-mua-21.jpg",
          hot: false,
        },
      ],
      paymentMethods: [
        {text: "COD", value: 1},
        {text: "Banking", value: 2},
        {text: "Ứng dụng bên thứ 3", value: 3},
      ],
      selectedPayment: 2,
    };
  },
  computed: {
    hotProducts() {
      return this.products.filter(product => product.hot);
    },
    maxPrice() {
      return Math.max(...this.products.map(product => product.price));
    },
    minPrice() {
      return Math.min(...this.products.map(product => product.price));
    },

  },
};
</script>

<template>
  <div id="app">
    <div v-for="(item, index) in products" :key="index">
      <div :id=item.id>
        <div class="">
          <img :src=item.image alt="">
        </div>
        <div>
          <h1>{{item.name}}</h1>
          <p>{{item.price}}</p>
          <p>{{item.publicDate}}</p>
          <p> max product {{maxPrice}}</p>
          <p> min product {{minPrice}}</p>
          <p v-for="(hot, index) in hotProducts" :key="index">
            {{hot.name}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#app {
  text-align: center;
}
</style>