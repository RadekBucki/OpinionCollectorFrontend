<template>
  <div class="sidepanel d-flex flex-column flex-shrink-0 p-3 bg-light">
    <a class="mb-3 mb-md-0 me-md-auto link-dark text-decoration-none mx-auto">
      <h1 class="fs-4">Dashboard</h1>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <RouterLink class="nav-link" :class="itemClasses('userspanel')" :to="{ name: 'UsersPanel' }">Manage users</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" :class="itemClasses('listadmin')" :to="{ name: 'ListAdmin' }">Browse Products</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" :class="itemClasses('categoriespanel')" :to="{ name: 'CategoriesPanel' }">Categories Panel</RouterLink>
      </li>
    </ul>
    <hr />
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
ul {
  display: flex;
  gap: 20px;
}

@media (max-width: 1200px) {
  .sidepanel {
    display: none !important;
  }
}
</style>
