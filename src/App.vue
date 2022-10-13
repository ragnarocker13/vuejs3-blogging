<template>
  <div class="headerClass">
    <Button btn-Prop="Donate" @click="handleDonateButton"></Button>
  </div>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> | 
    <router-link :to="{ name: 'blogs' }">Blogs</router-link> |
    <router-link :to="{ name: 'contact' }">Contact</router-link> | 
    <router-link :to="{ name: 'about' }">About Us</router-link> | 
    <router-link :to="{ name: 'create' }">Create Post</router-link>
  </nav>
    <router-view/>
</template>

<script>
import Button from "./components/Button.vue";

export default {
  components: { Button },
  setup() {

    let donation = 100     

    const handleDonateButton = () => {
      donation = donation + 100
      console.log('You Donated', donation)
    }

    return { handleDonateButton }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}

nav a:hover {
  color: #42b983;
  font-weight: bold;
}

</style>
