<template>
  <div>
    <div class="mt-5">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">First Name</span>
        </div>
        <input 
          type="text" 
          class="form-control" 
          placeholder="FirstName" 
          v-model="newUser.firstName"
          >
      </div>
    </div>
    <div class="mt-5">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Last Name</span>
        </div>
        <input 
          type="text" 
          class="form-control" 
          placeholder="LastName" 
          v-model="newUser.lastName"
          >
      </div>
    </div>
    <div class="mt-5">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Email</span>
        </div>
        <input 
          type="text" 
          class="form-control" 
          placeholder="Email" 
          v-model="newUser.email"
          >
      </div>
    </div>
    <div class="mt-5">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Password</span>
        </div>
        <input 
          type="password" 
          class="form-control" 
          placeholder="Password" 
          v-model="newUser.password"
          >
      </div>
    </div>
    <div class="mt-5">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">PictureUrl</span>
        </div>
        <input 
          type="text" 
          class="form-control" 
          placeholder="PictureUrl" 
          v-model="newUser.pictureUrl"
          >
      </div>
    </div>
    <div class="radio m-4">
      <div class="form-check">
        <label class="form-check-label" for="flexRadioDefault1">
          Admin
        </label>
        <input 
          class="form-check-input" 
          type="radio" 
          name="Visible" 
          value="true" 
          v-model="newUser.isAdmin"
          >
      </div>
      <div class="form-check">
        <label class="form-check-label" for="flexRadioDefault2">
          User
        </label>
        <input 
          class="form-check-input" 
          type="radio" 
          name="Invisible" 
          value="false" 
          v-model="newUser.isAdmin"
          >
      </div>
    </div>
    <button type="button" class="btn btn-dark" @click="addNewUser()">Add New User</button>
  </div>
</template>

<script>
import { PostRequest } from "@/communication/Network.ts";

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      newUser: {
        email: '',
        firstName: '',
        isAdmin: null,
        lastName: '',
        password: '',
        pictureUrl: '',
      }
    }
  },
  methods: {
    addNewUser() {
      PostRequest.userRegister(this.newUser).then(res => {
        console.log(res);
        const bool = this.modelValue;
        this.$emit('update:modelValue', !bool);
        this.$router.push( { name: 'UsersPanel' } );
      });
    },
  }
}
</script>

<style scoped>
.radio {
  display: flex;
  justify-content: space-around;
}
</style>