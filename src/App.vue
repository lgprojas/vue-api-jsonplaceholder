<template>
  <div className="container p-2">
    <div class='h2'>Lista de posts:</div>
      <Posts :posts="paginatedPosts"/>
    <div class="col-lg-12 d-flex justify-content-center">
      <Pagination :postsPerPage="postsPerPage" :totalPosts="posts.length" v-on:paginate="fnpaginate"/>
    </div>
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
      posts: [],
      currentPage: 1,
      postsPerPage: 10,
      indexOfLastPost: 0,
      indexOfFirstPost: 0,
      currentPosts: [],
      paginate: 0,
    }
  },
  created(){
    this.getPosts()
  },
  methods:{
      async getPosts () { 
        await fetch('https://jsonplaceholder.org/posts', { method: "get"})
        .then(response => response.json())
        .then(data => {
          this.posts = data;
        })
      },

      fnpaginate (pageNumber){
        //alert(pageNumber)
        this.currentPage = pageNumber
      },

    },
    computed: {
      paginatedPosts: function(){
        this.indexOfLastPost = this.currentPage * this.postsPerPage; //1*10=10      
        this.indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;//10-10=0      
        return this.posts.slice(this.indexOfFirstPost, this.indexOfLastPost);//paginas de 0 a 10
      }
    },
    mounted(){

        
        
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
