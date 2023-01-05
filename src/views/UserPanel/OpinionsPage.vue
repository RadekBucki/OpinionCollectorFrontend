<template>
  <div class="row mx-0">
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px; height: 92vh">
      <a class="mb-3 mb-md-0 me-md-auto link-dark text-decoration-none mx-auto">
        <span class="fs-4">Dashboard</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="/panel" class="nav-link link-dark" aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
            Data
          </a>
        </li>
        <li>
          <a href="/opinions" class="nav-link active">
            <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
            Opinions
          </a>
        </li>
        <li>
          <a href="/suggestions" class="nav-link link-dark">
            <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
            Suggestions
          </a>
        </li>
        <li>
          <a href="/wishlist" class="nav-link link-dark">
            <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
            Wishlist
          </a>
        </li>
      </ul>
      <hr />
    </div>

    <div class="col-8 mt-3">
      <h1>User Opinions</h1>
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
