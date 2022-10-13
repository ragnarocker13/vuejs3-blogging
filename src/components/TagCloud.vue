<template>
  <div class="tag-cloud">    
    <h4>Available Tags</h4>
    <div class="tags" v-for="tag in tags" :key="tag">
        <router-link :to="{ name: 'tags', params: { tag: tag }}">
            #{{ tag }}
        </router-link>
    </div>
  </div>
</template>

<script>
import useTags from '../composables/getTags.js'

export default {
    name: 'TagCloud',
    props: ['posts'],
    setup(props) {
        
        const { tags } = useTags(props.posts)

        return { tags }        
    }
}
</script>

<style>

.tag-cloud {
    padding: 10px;
}

.tag-cloud h3 {
    border-bottom: 1px solid #eee;
}

.tag-cloud div {
    display: inline-block;
    padding: 10px;
}

.tag-cloud .tags a {
    color: #ccc;
    text-decoration: none;
}

.tag-cloud .tags a.router-link-active {
    color: #ff8800;
    font-weight: bold;
}

</style>