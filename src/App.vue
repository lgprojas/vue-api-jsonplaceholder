<template>

  <div className="container p-2">
    <div class='h2'>Lista de posts:</div>
    <Posts :posts="posts"/>
    <Pagination />
  </div>
</template>

<script>
import Posts from './components/Posts.vue'
import Pagination from './components/Pagination.vue'

export default {
  name: 'App',
  components: {
    Posts,
    Pagination,
  },
  data(){
    return{
      posts: []
    }
  },
  created(){
      
      const getPosts = async () => { 
        await fetch('https://jsonplaceholder.org/posts', { method: "get"})
        .then(response => response.json())
        .then(data => {
          this.posts = data;
        })
      }

      getPosts();
    },
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
</style>
