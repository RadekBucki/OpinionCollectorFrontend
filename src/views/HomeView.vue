<template>
  <div>
    <div v-if="!isLoggedIn">
      <login-view @change-modal="changeModal" v-if="!isRegisterSelected" />
      <register-view @change-modal="changeModal" v-if="isRegisterSelected" />
    </div>

    <div v-if="isLoggedIn">
      <NavbarComponent />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    LoginView,
    RegisterView
  },
  data: () => ({
    isLoggedIn: false,
    isRegisterSelected: false
  }),
  methods: {
    changeModal(isRegisterSelected) {
      console.log(isRegisterSelected)
      this.isRegisterSelected = isRegisterSelected
    }
  },
  mounted() {
    // token management
    this.isLoggedIn = true
  }
};
</script>

<style scoped>
.item {
  height: 300px;
}

.item img {
  object-fit: contain;
  max-width: 55%;
  max-height: 55%;
}
</style>
