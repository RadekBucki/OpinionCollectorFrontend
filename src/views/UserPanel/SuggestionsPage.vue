<template>
  <div class="row mx-0">
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px; height: 92vh">
      <a class="mb-3 mb-md-0 me-md-auto link-dark text-decoration-none mx-auto">
        <h1 class="fs-4">Dashboard</h1>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <RouterLink class="nav-link link-dark" :to="{ name: 'Panel' }">Data</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-link link-dark" :to="{ name: 'Opinions' }">Opinions</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-link active" :to="{ name: 'Suggestions' }">Suggestions</RouterLink>
        </li>
      </ul>
      <hr />
    </div>

    <div class="col-8 mt-3">
      <h1>User Suggestions</h1>
    </div>
  </div>
</template>
