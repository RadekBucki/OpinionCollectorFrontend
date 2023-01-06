<template>
  <div class="mobile">
    <ul class="list-group list-group-horizontal justify-content-center">
      <li class="nav-item">
        <RouterLink class="list-group-item" :class="itemClasses('panel')" :to="{ name: 'Panel' }">Data</RouterLink>
      </li>
      <li>
        <RouterLink class="list-group-item" :class="itemClasses('opinions')" :to="{ name: 'Opinions' }"
          >Opinions</RouterLink
        >
      </li>
      <li>
        <RouterLink class="list-group-item" :class="itemClasses('suggestions')" :to="{ name: 'Suggestions' }"
          >Suggestions</RouterLink
        >
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

@media (min-width: 1150px) {
  .mobile ul {
    display: none;
  }
}
</style>
