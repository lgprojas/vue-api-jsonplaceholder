<template>
    <div class='row row-cols-2 row-cols-lg-2 g-2'>
        <div v-for="(post, key) in posts" :key="key" class="card m-1 " style='max-width: 540px;'>
            <div class="row g-0">
                <div class="col-md-4 mt-4">
                    <img :src="post.image" class="img-fluid rounded-start img-thumbnail p-2" alt="..." width="100" height="auto"/>
                </div>
            <div class="col-md-8">
                <div class="card-body">
                <div class="card-title h6" style="text-align: justify; height: 45px;">{{ post.title }}</div>
                <p className="card-text" style="text-align: justify;">{{ Truncate(post.content,100,100) }}</p>
                <p class="card-text"><small className="text-muted">Publicado {{ post.publishedAt }}</small></p>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Truncate } from '../helpers/Truncate';

export default {
  name: 'Posts',
  props: {
    posts: []
  },
  methods: {
    Truncate
  }
}
</script>