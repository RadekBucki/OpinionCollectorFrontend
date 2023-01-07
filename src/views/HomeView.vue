<template>
  <NavbarComponent />
  <router-view />
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";

export default {
  name: "HomeView",
  components: {
    NavbarComponent
  }
}
</script>

<style>
.item {
  height: 300px;
}
.item img {
  object-fit: contain;
  max-width: 55%;
  max-height: 55%;
}
</style>
