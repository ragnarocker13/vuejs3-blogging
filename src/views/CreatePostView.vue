<template>
  <h1>Create A Blog Post</h1>

  <div class="formClass">
    <!-- declare @submit.prevent to prevent the default action from executing -->
    <form @submit.prevent="handleSubmit">
        <label>Title:</label>
        <input type="text" required v-model="title">
        <label>Author:</label>
        <input type="text" required v-model="author">
        <label>Content:</label>
        <textarea required v-model="body"></textarea>
        <label>Tags:</label>
        <input         
        type="text" 
        v-model="tag"
        @keyup.,.prevent="handleKeydown"
        >
        <div v-for="tag in tags" :key="tag" class="pill">
            <span @click="removeTag(tag)">#{{ tag }}</span>
        </div>
        <button>Add Post</button>
    </form>
  </div>
</template>

<script>

import { ref } from 'vue'
import router from '@/router'
import { projectFirestore, timestamp } from '@/firebase/config'

export default {
    name: 'CreatePostView',
    setup() {
        const title = ref('')
        const author = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

        // POST REQUEST Code to be executed in this method
        const handleSubmit = async () => {
            const post = {
                title: title.value,
                author: author.value,
                // convert the first letter to capital
                body: body.value.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase()),
                tags: tags.value,
                // imported and added in firebase/config.js
                createdAd: timestamp()
            }

            // await fetch('http://localhost:3333/posts', 
            // // This second parameter will accept arguments of our post request
            // {
            //     method: 'POST', // indicating that the request is POST
            //     headers: { 'Content-Type': 'application/json' }, // headers to declare the type of data we are sending
            //     body: JSON.stringify(post) // converts the passed data to JSON string
            // })

            // This adds the posts object to the 'posts' collection in firestorm
            const res = await projectFirestore.collection('posts').add(post)
            
            router.push({ name: 'blogs' })
        }

        const handleKeydown = () => {
            const slicedTag = tag.value.slice(0,-1)
            // will fire the condition if the value is not yet in the Array 'tags'
            if(!tags.value.includes(slicedTag)) {
                // /\s/ - a regex that means to filter out all white spaces in the 'tag' variable
                tag.value = tag.value.replace(/\s/, '')
                // add the 'tag' value inside the 'tags' array
                tags.value.push(slicedTag)
                console.log('tag accepted')
            }           
            tag.value = ''
        }

        // This method filters out the data from 'tags' array, filtering out the clicked 'tag' value
        const removeTag = (tag) => {
            tags.value = tags.value.filter((i) => {
                return tag !== i
            })
        }

        return { title, author, body, tag, tags, handleKeydown, handleSubmit, removeTag }
    }
}
</script>

<style>

form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}

input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 10px;
}

textarea {
    height: 160px;
}

label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: #222;
    margin-bottom: 10px;
}

.pill {
    display: inline-block;
    background: rgb(11, 91, 211);
    color: white;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
    border-radius: 20px;
    width: 200;
    padding: 6px 12px;
    margin: 5px 10px 0 0;
    display: inline-block;
    cursor: pointer;
}

button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
}

</style>