<script>
export default {
  name: 'App',
  data() {
    return {
      listData: [],
      post: {
        title: '',
        content: ''
      },
      update: {
        title: '',
        content:''
      },
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      fetch('http://192.168.1.38/note_cy/mien/listNote.php').then((res) => res.json()).then((data) => {
        this.listData = data;
      })
    },

    async addNote() {
      const formData = new FormData();
      for (const key in this.post) {
        formData.append(key, this.post[key]);
      }
      const request = new Request(
          "http://192.168.1.38/note_cy/mien/addNote.php",
          {
            method: "POST",
            mode: "cors",
            cache: "default",
            body: formData,
          }
      );
      const res = await fetch(request);
      const {photos} = await res.json();
      this.data = photos[0];
    },
    async remove(id) {
      const formData = new FormData();
      formData.append('id', id);
      const request = new Request(
          "http://192.168.1.38/note_cy/mien/deleteNote.php",
          {
            method: "POST",
            mode: "cors",
            cache: "default",
            body: formData,
          }
      );
      await fetch(request);
      this.getData();
    },
     async updateNote(id){
       this.active = true;
       const formData  = new FormData();
      formData.append("id", id);
      for(const key in this.update) {
        formData.append(key,this.update[key]);
      }

      const request = new Request(
        "http://192.168.1.38/note_cy/mien/updateNote.php",
        {
          method: "POST",
          mode: "cors",
          cache: "default",
          body: formData,
        }
      );
      await fetch(request);
      this.getDate();
     }
  }
}
</script>

<template>
  <div id="app">
    <div>
      <form action="">
        <input placeholder="title" v-model="post.title">
        <input placeholder="content" v-model="post.content">
        <button @click="addNote()" type="submit">add</button>
      </form>
    </div>
    <div>

    </div>

    <div v-for="(item, index) in listData.flat()" :key="index">
      <div>{{ item.title }}
        {{ item.content }}
        <span> <button @click="remove(item.id)">Delete</button></span>
          <form action="" >
        <input placeholder=" update title" v-model="update.title">
        <input placeholder=" update content" v-model="update.content">
        <button @click="updateNote(item.id)" type="submit">update</button>
      </form>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  text-align: center;
}

</style>