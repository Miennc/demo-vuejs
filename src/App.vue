<script>
export default {
  data() {
    return {
      dataImages:[
       'https://i.pinimg.com/736x/13/ec/7a/13ec7a33a1c8a7160d490cba6b230967.jpg',
        'https://i.pinimg.com/564x/f0/d8/be/f0d8bea137cf1c5106bdec404e60d7a1.jpg',
        'https://i.pinimg.com/564x/a0/f4/f5/a0f4f55e7b19a3a43a6b457bed7724ba.jpg',
        'https://i.pinimg.com/564x/dd/7d/88/dd7d88c8fdec2edb7b89cc6f28404eb4.jpg',
        'https://i.pinimg.com/564x/f4/f5/95/f4f595cb8d2d1cff9815803d62dcd7c5.jpg',
        'https://i.pinimg.com/564x/da/5e/00/da5e00a3aebdbe162f283768d24ef5da.jpg',
      ],
      img:'',
      show:false,
    }
  },
  methods: {
    seeImg(index){
      this.img=this.dataImages[index];
      console.log(this.img);
      this.show = !this.show;
    },
  },
}

</script>
<template lang="">
    <div class="wrapper">
        <div class="image" @click="seeImg(index)" v-for="(img,index) in dataImages" :key="index" >
          <img :src="img" />
        </div>
        <div v-if="show" class="imgShow">
            <button @click="show = !show" class=close>close</button>
            <img :src="img" />
        </div>
    </div>
</template>

<style >
.wrapper{
  width:100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
}
.image{
  width:400px;
  height:400px;
  margin:10px;
}
  img{
    width:300px;
    height:300px;
    object-fit: cover;
  }
  .imgShow img{
     width: 600px;
     height:600px;
  }
  .imgShow {
    position: absolute;
    top:60px;
  }
  .imgShow .close {
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 30px;
      background-color:rgb(0, 254, 51);
      border: none;
  }
</style>