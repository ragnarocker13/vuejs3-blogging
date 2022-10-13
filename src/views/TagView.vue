<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <!-- will only show up if you have a post -->
    <div v-if="posts.length" >
        <!-- then reuse the BlogList component, this time the value passed
        will be the postsWithTag (tag-filtered) -->
        <BlogList :posts="postsWithTag" />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import getBlogs from '../composables/getBlogs'
import BlogList from '../components/BlogList.vue'

export default {
    setup() {
        const route = useRoute()
        const { posts, error, load } = getBlogs()
        
        load()

        // create a computed variable that returns a filtered version of the array post
        // filtering out the value of the tag (represented by tae)
        // the tag value is retrieved via (route.params.tag)
        const postsWithTag = computed(() => {
            return posts.value.filter((tae) => tae.tags.includes(route.params.tag))
        })

        return { error, posts, postsWithTag }
    },
    components: { BlogList }
}
</script>

<style>

</style>