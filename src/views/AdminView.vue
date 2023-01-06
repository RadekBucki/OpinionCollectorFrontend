<template>
  <div class="row mx-0">
    <div class="sidepanel d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px; height: 92vh">
      <a class="mb-3 mb-md-0 me-md-auto link-dark text-decoration-none mx-auto">
        <h1 class="fs-4">Dashboard</h1>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <RouterLink class="nav-link active" :to="{ name: 'Products' }">Check Products</RouterLink>
        </li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminView',
}
</script>

<style scoped>
.avatarCircle img {
  border-radius: 50%;
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

  .form {
    width: 100%;
  }

  .form-mobile {
    flex-direction: column !important;
  }

  .form-mobile div {
    width: 100%;
  }
}
</style>
