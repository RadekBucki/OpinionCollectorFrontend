<template>
  <div class="container border m-2">
    <div class="row">
      <div class="col-4">
        <img :src="img" class="img-fluid rounded m-3" alt="Responsive image">
        <input v-if="isEditable"
          type="text" 
          class="form-control m-3" 
          placeholder="URL" 
          v-model="profilePictureUrl"
          />
      </div>
      <div class="d-flex col align-items-center">
        <div class="row">
          <div class="group-info">
            <label>First Name:</label>
            <p v-if="!isEditable"> {{ first }}</p>
            <input v-if="isEditable"
              type="text" 
              class="form-control m-2" 
              placeholder="First Name" 
              v-model="firstName"
              />
          </div>
          <div class="group-info">
            <label>Last Name:</label>
            <p v-if="!isEditable">{{ last }}</p>
            <input v-if="isEditable"
              type="text" 
              class="form-control m-2" 
              placeholder="Last Name" 
              v-model="lastName"
              />
          </div>
          <div class="group-info">
            <label>Email:</label>
            <p v-if="!isEditable">{{ email }}</p>
            <input v-if="isEditable"
              type="email" 
              class="form-control m-2" 
              placeholder="Email" 
              v-model="emailNew" 
              />
          </div>
          <div class="group-info">
            <label v-if="isEditable">Password:</label>
            <input v-if="isEditable"
              type="password" 
              class="form-control m-2" 
              placeholder="Password" 
              v-model="password"
              />
          </div>
          <div class="group-info">
            <label>Admin Status:</label>
            <p v-if="!isEditable">{{ admin }}</p>
          </div>
          <div v-if="isEditable">
            <div class="radio m-4">
              <div class="form-check">
                <label class="form-check-label">
                    Admin
                </label>
                <input 
                  class="form-check-input" 
                  type="radio"  
                  value="true" 
                  v-model="adminStatus"
                  />
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    User
                  </label>
                <input 
                  class="form-check-input" 
                  type="radio" 
                  value="false" 
                  v-model="adminStatus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button" 
      class="btn btn-outline-dark m-2" 
      @click="editUser()
      ">
      {{ buttonText }}
    </button>
    <button v-if="isEditable" 
      type="button" 
      class="btn btn-outline-dark m-2" 
      @click="saveUserData()
      ">
      Save Edit
    </button>
  </div>
</template>

<script>
import { PutRequest } from "@/communication/Network.ts";

export default {
  props: ['first', 'last', 'email', 'admin', 'img', 'userId'],
  data() {
    return {
      firstName: '',
      lastName: '',
      emailNew: '',
      profilePictureUrl: '',
      editToggle: false,
      password: '',
      adminStatus: false,
    }
  },
  methods: {
    editUser() {
      this.editToggle = !this.editToggle;
    },
    saveUserData() {
      const userData = {
        email: this.emailNew,
        firstName: this.firstName,
        isAdmin: this.adminStatus,
        lastName: this.lastName,
        password: this.password,
        pictureUrl: this.profilePictureUrl,
      };
      console.log(userData);
      PutRequest.userEdit(this.$props.userId, userData).then(res => {
        console.log(res);
      });
      this.password = '';
      this.editToggle = !this.editToggle;
    }
  },
  computed: {
    isAdmin() {
      return this.user.isAdmin ? 'Active' : 'Disabled';
    },
    isEditable() {
      return this.editToggle;
    },
    buttonText() {
      return this.editToggle ? 'Back' : 'Edit User';
    }
  },
  mounted() {
    this.firstName = this.$props.first;
    this.lastName = this.$props.last;
    this.emailNew = this.$props.email;
    this.adminStatus = this.$props.admin;
    this.profilePictureUrl = this.$props.img;
    this.adminStatus = this.$props.admin;
  }
}
</script>

<style scoped>
.group-info {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.group-info label {
  font-weight: bold;
}

.radio {
  display: flex;
  justify-content: space-around;
}
</style>