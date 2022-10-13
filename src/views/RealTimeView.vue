<template>
  <h1>This is the Real-time data</h1>
  <div class="realtimeData" v-for="post in posts" :key="post.id">
    <div>{{ post.title }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

export default {
    setup() {
        const posts = ref([])

        projectFirestore.collection('posts')
            .orderBy('createdAd', 'desc')
            .onSnapshot((snap) => {
                let docs = snap.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                posts.value = docs
            })

        return { posts }
    }
}
</script>

<style>

</style>