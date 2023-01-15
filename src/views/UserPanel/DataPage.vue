<<<<<<< HEAD
<template>
  <MobilePanelNavigation />

  <div class="row mx-0">
    <PanelNavigation />

    <div class="form col-9 mt-3">
      <h1>User Data</h1>

      <div class="avatarCircle col-4 mt-4 mx-auto">
        <label class="form-label text-dark mx-4">Avatar Image</label>
        <img :src="userData.pictureUrl" alt="Avatar Profile" />
      </div>
      <div class="mt-5 d-flex justify-content-center align-items-center">
        <form class="col-7">
          <div class="row form-mobile">
            <div class="col-4 mb-2">
              <label class="form-label text-dark">Name</label>
              <input type="text" v-model="userData.firstName" class="form-control" disabled />
            </div>
            <div class="col-6 mb-2">
              <label class="form-label text-dark">Last name</label>
              <input type="text" v-model="userData.lastName" class="form-control" disabled />
            </div>
          </div>
          <div class="row form-mobile mt-2">
            <div class="col-7">
              <label class="form-label text-dark">Address e-mail</label>
              <input type="text" v-model="userData.email" class="form-control" disabled />
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
import { MethodRequest } from "@/communication/Network.ts";

export default {
  name: "DataPage",
  components: {
    MobilePanelNavigation,
    PanelNavigation,
  },
  data() {
    return {
      userData: {
        firstName: MethodRequest.getUser().firstName,
        lastName: MethodRequest.getUser().lastName,
        email: MethodRequest.getUser().email,
        pictureUrl: MethodRequest.getUser().profilePictureUrl,
        isAdmin: MethodRequest.getUser().isAdmin,
        id: MethodRequest.getUser().id,
        password: MethodRequest.getUser().password,
      },
    };
  },
};
</script>

<style scoped>
.avatarCircle img {
  border-radius: 50%;
}

.form-mobile div {
  width: 100%;
}

@media (max-width: 1200px) {
  .form {
    width: 100%;
  }
  .form-mobile {
    flex-direction: column !important;
  }
}
</style>
=======
<template>
  <MobilePanelNavigation />

  <div class="row mx-0">
    <PanelNavigation />

    <div class="form col-9 mt-3">
      <h1>User Data</h1>

      <div class="avatarCircle col-4 mt-4 mx-auto">
        <label class="form-label text-dark mx-4">Avatar Image</label>
        <img :src="userData.profilePictureUrl" alt="Avatar Profile" />
      </div>
      <div class="mt-5 d-flex justify-content-center align-items-center">
        <form class="col-7">
          <div class="row form-mobile">
            <div class="col-4 mb-2">
              <label class="form-label text-dark">Name</label>
              <input type="text" v-model="userData.firstName" class="form-control" disabled />
            </div>
            <div class="col-6 mb-2">
              <label class="form-label text-dark">Last name</label>
              <input type="text" v-model="userData.lastName" class="form-control" disabled />
            </div>
          </div>
          <div class="row form-mobile mt-2">
            <div class="col-7">
              <label class="form-label text-dark">Address e-mail</label>
              <input type="text" v-model="userData.email" class="form-control" disabled />
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
import { MethodRequest } from "@/communication/Network.ts";
import { SweetAlert } from "@/communication/SweetAlerts.ts";

export default {
  name: "DataPage",
  components: {
    MobilePanelNavigation,
    PanelNavigation,
  },
  data() {
    return {
      userData: {},
    };
  },
  mounted() {
    this.userData = MethodRequest.getUser();
    if (this.userData === null) {
      SweetAlert.error(this.$swal, "Please login again to see content").then(
        async function () {
          MethodRequest.userLogout();
          await this.$router.push({ name: "Products" });
          window.location.reload();
        }.bind(this)
      );
    }
  },
};
</script>

<style scoped>
.avatarCircle img {
  border-radius: 50%;
}

.form-mobile div {
  width: 100%;
}

@media (max-width: 1200px) {
  .form {
    width: 100%;
  }
  .form-mobile {
    flex-direction: column !important;
  }
}
</style>
>>>>>>> master
