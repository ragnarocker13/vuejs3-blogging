<template>
  <h1>OUR BLOGS</h1>
  <BlogList :posts='posts' class='bloglist'/>

</template>

<script>

import BlogList from '../components/BlogList.vue'
import getBlogs from '../composables/getBlogs.js'

export default {

 name: 'BlogsView',
 components: { BlogList },
 setup() {

    // DESTRUCTURE or extract the variables from getPosts composable
    const { posts, load, error } = getBlogs()

    // run the load func from getBlogs composables
    load()

    return { posts, error, load }
 }
}
</script>

<style>

.bloglist {
  margin-bottom: 30px;
}

</style>