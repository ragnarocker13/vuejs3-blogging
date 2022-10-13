<template>
    <div class="blogContainer">
        <div v-if="error">{{ error }}</div>
        <div v-if="post" class="post">
            <h2>{{ post.title }}</h2>

            <span class="tags" v-for="tag in post.tags" :key="tag">                
                <router-link :to="{ name: 'tags', params: { tag: tag }}">
                    #{{ tag }}&nbsp;
                </router-link>             
            </span>

            <h5>by {{ post.author }} | {{ post.createdAd }}</h5>
            <p>{{ post.body }}</p>
            <div class="deleteButtonContainer">
                <Button btnProp="Delete" @click="handleDelete" />
            </div>
        </div>
    </div>
</template>

<script>
import { projectFirestore } from '@/firebase/config'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import getBlog from '../composables/getBlog'
import Button from '@/components/Button.vue'
import router from '@/router'
import TagCloud from '@/components/TagCloud.vue'

export default {
    props: ["id"],
    setup(props) {
        const date = ref(new Date());
        const route = useRoute();
        console.log(date);
        // Call the getBlog composable here so we can use the post variable
        // but this time we pass an id to identify which blog id to retrieve
        // Alternatively you can declare a route object, and import it with { useRoute }
        // from here you can just pass the route object (route.params.id) instead of the prop
        const { post, load, error } = getBlog(route.params.id);
        load();

        const handleDelete = async () => {
            await projectFirestore.collection('posts')
                .doc(props.id)
                .delete()

        router.push({ name: 'blogs' })
        }


        return { post, error, date, handleDelete };
    },
    components: { Button, TagCloud }
}
</script>

<style>

.blogContainer {
    width: 70%;
    margin: auto;
}

.blogContainer span {
    font-weight: bold;
}

.blogContainer span a {
    text-decoration: none;
    color: #444;
}

.blogContainer span a.router-link-active {
    color: rgb(10, 190, 190);
}

.blogContainer span a:hover {
    color: rgb(10, 190, 190);
}

.deleteButtonContainer {
    margin: 0 45%;
}

</style>