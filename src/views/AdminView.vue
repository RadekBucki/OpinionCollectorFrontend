<template>
  <div class="admin">
    <h1>This is an admin page</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App view" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'AdminView',
  components: {
    HelloWorld
  }
}
</script>
