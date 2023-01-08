<template>
  <div class="mobile">
    <ul class="d-xl-none list-group list-group-horizontal justify-content-center">
      <li class="nav-item">
        <RouterLink class="list-group-item active" :to="{ name: 'AdminProfile' }">Admin profile</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="list-group-item active" :to="{ name: 'ListAdmin' }">Browse Products</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="list-group-item active" :to="{ name: 'AddProduct' }">Add Product</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.mobile ul {
  list-style: none;
  margin-top: 1.4em;
}
</style>