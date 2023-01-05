<template>
  <div>
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark justify-content-md-center justify-content-start">
      <a class="navbar-brand d-md-none d-inline" href="">Opinion Collector</a>
      <button class="navbar-toggler ml-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar2">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
        <ul class="navbar-nav mx-auto text-md-center text-left">
          <li class="nav-item">
            <RouterLink v-if="!token" class="nav-link mx-3" to="/panel">Panel </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink v-if="!token" class="nav-link mx-3" to="/admin">Admin </RouterLink>
          </li>
          <li class="nav-item my-auto">
            <!-- <a class="nav-link navbar-brand mx-0 d-none d-md-inline" href="">Opinion Collector</a> -->
            <RouterLink v-if="!token" class="nav-link navbar-brand fs-3 fw-bold mx-0 d-none d-md-inline" to="/"
              >Opinion Collector</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink v-if="!token" class="nav-link mx-3" to="/panel">Panel</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink v-if="!token" class="nav-link mx-3" to="/">Link</RouterLink>
          </li>
        </ul>
        <ul
          class="nav navbar-nav flex-row justify-content-md-center align-items-center justify-content-start flex-nowrap"
        >
          <li class="nav-item dropdown">
            <div class="nav-item" @click="toggleDropdown()">
              <img src="../assets/avatarprofile.svg" alt="Dropdown trigger" />
            </div>
            <div class="dropdown-menu" v-bind:class="{ show: isDropdownVisible }">
              <RouterLink v-if="!token" class="dropdown-item" to="/panel">Panel</RouterLink>
              <RouterLink v-if="!token" class="dropdown-item" to="/login">Sign in </RouterLink>
              <a class="dropdown-item" v-if="token" @click.prevent="signOut">Sign out </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownVisible: false,
      token: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    signOut() {
      console.log("signed out");
      localStorage.removeItem("token");
      this.token = null;
      window.location.reload();
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
  },
};
</script>

<style>
img {
  width: 60px;
}

.dropdown {
  margin-right: 4em;
}

.dropdown-menu {
  position: fixed;
  transform: translate(-30%, 0%);
}
</style>
