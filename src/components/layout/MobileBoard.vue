<template>
  <div class="mobile">
    <ul class="d-xl-none list-group list-group-horizontal justify-content-center">
      <li class="nav-item">
        <RouterLink class="list-group-item" :class="itemClasses('adminprofile')" :to="{ name: 'AdminProfile' }">Admin profile</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="list-group-item" :class="itemClasses('listadmin')" :to="{ name: 'ListAdmin' }">Browse Products</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="list-group-item" :class="itemClasses('categoriespanel')" :to="{ name: 'CategoriesPanel' }">Add Product</RouterLink>
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