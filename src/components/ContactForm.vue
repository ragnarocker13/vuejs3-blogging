<template>
  <h2>Let Us Know What You Think...</h2>
<div class="contactFormWrapper">
    <form action="submit">
      <label>Name</label><input type="text" v-model="name">
      <label>Company</label><input type="text" v-model="company">
      <label>Contact Number</label><input type="text" v-model="contactNumber">

      <br>
      <div class="buttonContainer">
          <button>Submit</button>
      </div>
    </form>    
  
    <p>Hi {{ name }} from {{ company }}</p>
    <p>(Contact # {{ contactNumber }})</p>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const name = ref(null)
        const company = ref()
        const contactNumber = ref('')

        return { name, company, contactNumber }
    }
}
</script>

<style scoped>

.contactFormWrapper {
    width: 300px;
    margin: auto 30%;
}

input, label {
    margin-bottom: 0px;
}

label {
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: rgb(39, 39, 39);
}

form {
    text-align: left;
    margin: auto;
}

form input {
    width: 380px;
    border-radius: 5px;
    border: 1px solid gray;
}

.buttonContainer {
    align-content: center;
    margin: auto 45%;
}

button {
    padding: 5px;
    border-radius: 10px;
    border: 1px solid gray;
    width: 100px;
    margin: auto;
}

</style>