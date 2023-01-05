<template>
  <div class="row mx-0">
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px; height: 92vh">
      <a class="mb-3 mb-md-0 me-md-auto link-dark text-decoration-none mx-auto">
        <span class="fs-4">Dashboard</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="/panel" class="nav-link active" aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
            Data
          </a>
        </li>
        <li>
          <a href="/opinions" class="nav-link link-dark">
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

    <div class="col-9 mt-3">
      <h1>User Data</h1>
      <div class="mt-5 d-flex justify-content-center align-items-center">
        <form action="" class="col-9">
          <div class="row">
            <div class="col-4">
              <label for="" class="form-label text-dark">Name</label>
              <input type="text" class="form-control" id="" placeholder="Name" />
            </div>
            <div class="col-6">
              <label for="" class="form-label text-dark">Last name</label>
              <input type="text" class="form-control" id="" placeholder="Last name" />
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <label for="" class="form-label text-dark">e-mail</label>
              <input type="text" class="form-control" id="" placeholder="e-mail" />
            </div>
            <div class="col-4">
              <label for="" class="form-label text-dark">City</label>
              <input type="text" class="form-control" id="" placeholder="City" />
            </div>
          </div>
          <div class="row">
            <div class="col-7">
              <label for="" class="form-label text-dark">Address</label>
              <input type="text" class="form-control" id="" placeholder="Address" />
            </div>
            <div class="col-3">
              <label for="" class="form-label text-dark">Zip code</label>
              <input type="text" class="form-control" id="" placeholder="Zip code" />
            </div>
          </div>
          <div class="col-10 mt-4 d-flex justify-content-end">
            <button class="btn btn-primary">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
