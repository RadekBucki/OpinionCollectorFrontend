<template>
  <div v-if="!isLoggedIn">
    <login-modal @change-modal="changeModal" v-if="!isRegisterSelected" />
    <register-modal @change-modal="changeModal" v-if="isRegisterSelected" />
  </div>

  <div v-if="isLoggedIn">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";
import LoginModal from "@/components/modals/LoginModal.vue";
import RegisterModal from "@/components/modals/RegisterModal";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    LoginModal,
    RegisterModal,
  },
  data: () => ({
    isLoggedIn: false,
    isRegisterSelected: false,
  }),
  methods: {
    changeModal(isRegisterSelected) {
      this.isRegisterSelected = isRegisterSelected;
    },
  },
  mounted() {
    // token management
    this.isLoggedIn = true;
  },
};
</script>

<style>
.item {
  height: 300px;
}
.item img {
  object-fit: contain;
  max-width: 55%;
  max-height: 55%;
}
</style>
