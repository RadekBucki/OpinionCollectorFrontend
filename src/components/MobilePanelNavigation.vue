<template>
  <div class="mobile">
    <ul class="d-xl-none list-group list-group-horizontal justify-content-center">
      <li class="nav-item">
        <router-link class="list-group-item" :class="itemClasses('panel')" :to="{ name: 'Panel' }">Data</router-link>
      </li>
      <li>
        <router-link class="list-group-item" :class="itemClasses('opinions')" :to="{ name: 'Opinions' }">
          Opinions
        </router-link>
      </li>
      <li>
        <router-link class="list-group-item" :class="itemClasses('suggestions')" :to="{ name: 'Suggestions' }">
          Suggestions
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    itemClasses(route) {
      const classes = ["nav-item"];
      if (this.currentRoute === route) {
        classes.push("active");
      } else {
        classes.push("link-dark");
      }
      return classes;
    },
  },
  computed: {
    currentRoute() {
      return this.$route.name.toLowerCase();
    },
  },
};
</script>

<style scoped>
.mobile ul {
  list-style: none;
  margin-top: 1.4em;
}
</style>
