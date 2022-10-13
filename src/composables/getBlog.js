import { projectFirestore } from '@/firebase/config'
import { ref } from 'vue'

const getBLog = (id) => {

    const post = ref([])
    const error = ref(null)

    // declare another (async) function to load (or access) the json server
    const load = async () => {
        
        try {
            // retrieve json posts from server
            // let data = await fetch('http://localhost:3333/posts/' + id)
            
            // assign data to posts.value property
            // post.value = await data.json()

            let res = await projectFirestore.collection('posts').doc(id).get()
            console.log(res)

            if(!res.exists) {
                throw Error('This post does not exist')
            }

            post.value = { ...res.data(), id: res.id }           

            }
        catch(err) {
            
            error.value = err.message
            console.log(error.value)
            }
         }    

    return { post, error, load }
}

export default getBLog