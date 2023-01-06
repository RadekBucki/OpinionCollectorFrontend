<template>
  <div class="row mx-0">
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px; height: 92vh">
      <a class="mb-3 mb-md-0 me-md-auto link-dark text-decoration-none mx-auto">
        <h1 class="fs-4">Dashboard</h1>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <RouterLink class="nav-link active" :to="{ name: 'Panel' }">Data</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-link link-dark" :to="{ name: 'Opinions' }">Opinions</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-link link-dark" :to="{ name: 'Suggestions' }">Suggestions</RouterLink>
        </li>
      </ul>
      <hr />
    </div>

    <div class="col-9 mt-3">
      <h1>User Data</h1>

      <div class="avatarCircle col-4 mt-4 mx-auto">
        <label for="" class="form-label text-dark mx-4">Avatar Image</label>
        <img
          src="https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80"
          alt="Avatar Profile"
        />
        <input type="text" v-model="imgUrl" class="form-control mt-3" placeholder="Image url" />
      </div>
      <div class="mt-5 d-flex justify-content-center align-items-center">
        <form class="col-9">
          <div class="row">
            <div class="col-4">
              <label for="firstNameForm" class="form-label text-dark">Name</label>
              <input type="text" v-model="firstName" class="form-control" placeholder="Name" />
            </div>
            <div class="col-6">
              <label for="lastNameForm" class="form-label text-dark">Last name</label>
              <input type="text" v-model="lastName" class="form-control" placeholder="Last name" />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-7">
              <label for="emailForm" class="form-label text-dark">e-mail</label>
              <input type="text" v-model="email" class="form-control" placeholder="e-mail" />
            </div>
            <div class="col-3 mt-4 d-flex justify-content-end">
              <button class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataPage",
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      imgUrl: null,
    };
  },
};
</script>

<style scoped>
.avatarCircle img {
  border-radius: 50%;
}
</style>
