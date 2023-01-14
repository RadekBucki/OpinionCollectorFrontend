<template>
  <div>
    <div class="mt-5">
      <div class="input-group mb-3" :class="{ invalid: !newUser.firstName.isValid }">
        <div class="input-group-prepend">
          <span class="input-group-text">First Name</span>
        </div>
        <label v-if="!newUser.firstName.isValid">First Name must not be empty.</label>
        <input 
          type="text" 
          class="form-control" 
          placeholder="FirstName" 
          v-model.trim="newUser.firstName.val"
          @blur="clearValidity('firstName')"
          >
      </div>
    </div>
    <div class="mt-5">
      <div class="input-group mb-3" :class="{ invalid: !newUser.lastName.isValid }">
        <div class="input-group-prepend">
          <span class="input-group-text">Last Name</span>
        </div>
        <label v-if="!newUser.lastName.isValid">Last Name must not be empty.</label>
        <input 
          type="text" 
          class="form-control" 
          placeholder="LastName" 
          v-model.trim="newUser.lastName.val"
          @blur="clearValidity('lastName')"
          >
      </div>
    </div>
    <div class="mt-5">
      <div class="input-group mb-3" :class="{ invalid: !newUser.email.isValid }">
        <div class="input-group-prepend">
          <span class="input-group-text">Email</span>
        </div>
        <label v-if="!newUser.email.isValid">Email must not be empty and be format of email.</label>
        <input 
          type="text" 
          class="form-control" 
          placeholder="Email" 
          v-model.trim="newUser.email.val"
          @blur="clearValidity('email')"
          >
      </div>
    </div>
    <div class="mt-5">
      <div class="input-group mb-3" :class="{ invalid: !newUser.password.isValid }">
        <div class="input-group-prepend">
          <span class="input-group-text">Password</span>
        </div>
        <label v-if="!newUser.password.isValid">Password must not be empty and contains minimum 6 letters.</label>
        <input 
          type="password" 
          class="form-control" 
          placeholder="Password" 
          v-model.trim="newUser.password.val"
          @blur="clearValidity('password')"
          >
      </div>
    </div>
    <div class="mt-5">
      <div class="input-group mb-3" :class="{ invalid: !newUser.pictureUrl.isValid }">
        <div class="input-group-prepend">
          <span class="input-group-text">PictureUrl</span>
        </div>
        <label v-if="!newUser.pictureUrl.isValid">URL must not be empty.</label>
        <input 
          type="text" 
          class="form-control" 
          placeholder="PictureUrl" 
          v-model.trim="newUser.pictureUrl.val"
          @blur="clearValidity('pictureUrl')"
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
          value=true 
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
          value=false
          v-model="newUser.isAdmin"
          >
      </div>
    </div>
    <button type="button" class="btn btn-dark" @click="submitForm()">Add New User</button>
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
        email: {
          val: '',
          isValid: true,
        },
        firstName: {
          val: '',
          isValid: true,
        },
        isAdmin: false,
        lastName: {
          val: '',
          isValid: true,
        },
        password: {
          val: '',
          isValid: true,
        },
        pictureUrl: {
          val: '',
          isValid: true,
        },
        formIsValid: true,
      }
    }
  },
  methods: {
    addNewUser() {
      const toBool = this.convertToBool();
      console.log(toBool);
      const userData = {
        email: this.newUser.email.val,
        firstName: this.newUser.firstName.val,
        isAdmin: toBool,
        lastName: this.newUser.lastName.val,
        password: this.newUser.password.val,
        pictureUrl: this.newUser.pictureUrl.val,
      };
      PostRequest.userRegister(userData).then(() => {
        alert('You added new user');
        const bool = this.modelValue;
        this.$emit('update:modelValue', !bool);
        this.$router.push( { name: 'UsersPanel' } ).then(() => { this.$router.go() });
      }).catch(() => {
        alert('Something went wrong');
      });
    },
    clearValidity(input) {
      this.newUser[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.newUser.firstName.val === '') {
        this.newUser.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.newUser.lastName.val === '') {
        this.newUser.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.newUser.email.val === '' || !this.newUser.email.val.includes('@')) {
        this.newUser.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.newUser.password.val === '' || this.newUser.password.val < 6) {
        this.newUser.password.isValid = false;
        this.formIsValid = false;
      }
      if (this.newUser.pictureUrl.val === '') {
        this.newUser.pictureUrl.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      } 

      this.addNewUser();
    },
    convertToBool() {
      return this.newUser.isAdmin === 'true' ? true : false;
    }
  },
}
</script>

<style scoped>
.radio {
  display: flex;
  justify-content: space-around;
}

.invalid label {
  color: red;
}

.invalid input {
  border: 1px solid red;
}
</style>