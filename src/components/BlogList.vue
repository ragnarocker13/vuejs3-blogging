<template>
    <div class="postListContainer">
        <div v-for="post in posts" :key="post.id" class="postTitle">
          <router-link :to="{ name: 'blogPost', params: { id: post.id }}">
            <h3>{{ post.title }}</h3>
          </router-link>
          <p class="postBody">{{ post.body.substring(0,150) + '...' }}</p>
        </div>
    </div>   
    
</template>

<script>

export default {
    props: ['posts'],
    components: { },
    setup() {
        
    }
}
</script>

<style>

.postTitle {
    margin-bottom: 30px;
}

.postTitle a {
    text-transform: uppercase;
    text-decoration: none;
    color: rgba(0, 179, 179, 0.904);
}

.postTitle a:hover {
    color: crimson;
}

.postListContainer {
    width: 80%;
    margin: auto;
   
}

.postBody::first-letter {
    text-transform:capitalize;
    font-weight: bold;
}



</style>