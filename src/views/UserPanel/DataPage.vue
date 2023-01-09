<template>
  <MobilePanelNavigation />

  <div class="row mx-0">
    <PanelNavigation />

    <div class="form col-9 mt-3">
      <h1>User Data</h1>

      <div class="avatarCircle col-4 mt-4 mx-auto">
        <label class="form-label text-dark mx-4">Avatar Image</label>
        <img
          src="https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80"
          alt="Avatar Profile"
        />
        <input type="text" v-model="imgUrl" class="form-control mt-3" placeholder="Image url" />
      </div>
      <div class="mt-5 d-flex justify-content-center align-items-center">
        <form class="col-9">
          <div class="row form-mobile">
            <div class="col-4">
              <label class="form-label text-dark">Name</label>
              <input type="text" v-model="firstName" class="form-control" placeholder="Name" />
            </div>
            <div class="col-6">
              <label class="form-label text-dark">Last name</label>
              <input type="text" v-model="lastName" class="form-control" placeholder="Last name" />
            </div>
          </div>
          <div class="row form-mobile mt-2">
            <div class="col-7">
              <label class="form-label text-dark">Address e-mail</label>
              <input type="text" v-model="email" class="form-control" placeholder="e-mail" />
            </div>
            <div class="mt-2 d-flex justify-content-end">
              <button class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PanelNavigation from "@/components/PanelNavigation.vue";
import MobilePanelNavigation from "@/components/MobilePanelNavigation.vue";

export default {
  name: "DataPage",
  components: {
    MobilePanelNavigation,
    PanelNavigation,
  },
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

@media (max-width: 1200px) {
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
