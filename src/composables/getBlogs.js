import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getBLogs = () => {

    const posts = ref([])
    const error = ref(null)

    // declare another (async) function to load (or access) the json server
    const load = async () => {
        
        try {

            // implement .onSnaphot instead of the normal .get to update
            // the data from firestore to browser realtime
            const res = await projectFirestore
              .collection("posts")
              .orderBy("createdAd", "desc")
              .onSnapshot((snap) => {
                let docs = snap.docs.map((doc) => {
                  return { ...doc.data(), id: doc.id }
                })
                posts.value = docs
              })            
            
            // const res = await projectFirestore.collection('posts')
            //         .orderBy('createdAd', 'desc')
            //         .get()
            // posts.value = res.docs.map(doc => {
            //     // breakdown the doc.data object, and add it to a new arraym
            //     // with the id assigned from doc.id
            //     // so that we can use it in v-for loop
            //     return { ...doc.data(), id: doc.id }
            // })
            
            return { posts }

            }
        catch(err) {            
            error.value = err.message
            console.log(error.value)
            }
         }    

    return { posts, error, load }
}

export default getBLogs