import { ref } from 'vue'

const useTags = (posts) => {

    const tags = ref([])
    const tagSet = new Set()

    // this will cycle through the posts array with .forEach
    // going through the tag array...
    posts.forEach(item => {
        // then also run another forEach loop inside the tag array
        // grabbing all the elements inside it
        item.tags.forEach(tag => tagSet.add(tag))
            // and since tagSet is a Set(), it will not accept duplicates
            
    })
    // after that, convert the tagSet to an array by spreading it
    // and assigning to the tags.value
    tags.value = [...tagSet]

    return { tags }
}

export default useTags