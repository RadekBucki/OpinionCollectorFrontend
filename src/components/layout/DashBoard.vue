<template>
  <div class="mobile mt-3">
    <ul class="list-group list-group-horizontal justify-content-center">
      <li class="nav-item">
        <RouterLink class="list-group-item active" :to="{ name: 'ListAdmin' }">Browse Products</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="list-group-item active" :to="{ name: 'AddProduct' }">Add Product</RouterLink>
      </li>
    </ul>
  </div>
  <div class="row mx-0">
    <div class="sidepanel d-flex flex-column flex-shrink-0 p-3 bg-light">
      <a class="mb-3 mb-md-0 me-md-auto link-dark text-decoration-none mx-auto">
        <h1 class="fs-4">Dashboard</h1>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <RouterLink class="nav-link active" :to="{ name: 'AdminProfile' }">Admin profile</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" :to="{ name: 'ListAdmin' }">Browse Products</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" :to="{ name: 'AddProduct' }">Add Product</RouterLink>
        </li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  gap: 20px;
}
.mobile ul {
  list-style: none;
}

@media (min-width: 1150px) {
  .mobile ul {
    display: none;
  }
}

@media (max-width: 1150px) {
  .sidepanel {
    display: none !important;
  }
}
</style>
