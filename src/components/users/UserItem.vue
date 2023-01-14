<template>
  <div class="container border m-2">
    <div class="row">
      <div class="col-4">
        <img :src="img" class="img-fluid rounded m-3" alt="Responsive image">
        <input v-if="isEditable"
          type="text" 
          class="form-control m-3" 
          placeholder="URL" 
          v-model.trim="profilePictureUrl.val"
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
              v-model.trim="firstName.val"
              />
          </div>
          <div class="group-info">
            <label>Last Name:</label>
            <p v-if="!isEditable">{{ last }}</p>
            <input v-if="isEditable"
              type="text" 
              class="form-control m-2" 
              placeholder="Last Name" 
              v-model.trim="lastName.val"
              />
          </div>
          <div class="group-info">
            <label>Email:</label>
            <p v-if="!isEditable">{{ email }}</p>
            <input v-if="isEditable"
              type="email" 
              class="form-control m-2" 
              placeholder="Email" 
              v-model.trim="emailNew.val" 
              />
          </div>
          <div class="group-info">
            <label v-if="isEditable && editPassword">Password:</label>
            <input v-if="isEditable && editPassword"
              type="password" 
              class="form-control m-2" 
              placeholder="Password" 
              v-model.trim="password.val"
              />
              <button
              v-if="editToggle"
              type="button" 
              class="btn btn-outline-dark m-2" 
              @click="passwordEdit()"
              >
              Change Password
            </button>
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
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      emailNew: {
        val: '',
        isValid: true,
      },
      profilePictureUrl: {
        val: '',
        isValid: true,
      },
      editToggle: false,
      password: {
        val: '',
        isValid: true,
      },
      adminStatus: false,
      editPassword: false,
    }
  },
  methods: {
    editUser() {
      this.editToggle = !this.editToggle;
    },
    passwordEdit() {
      this.editPassword = !this.editPassword;
    },
    saveUserData() {
      const userData = {
        email: this.emailNew.val,
        firstName: this.firstName.val,
        isAdmin: this.adminStatus,
        lastName: this.lastName.val,
        password: this.password.val,
        pictureUrl: this.profilePictureUrl.val,
      };
      if (userData.password.val.length === 0) {
        delete userData.password;
      }
      PutRequest.userEdit(this.$props.userId, userData).then(() => {
        alert('Succes');
        this.$router.push( { name: 'usersPanel' } )
      });
      this.editToggle = !this.editToggle;
    },
    validateForm() {
    },
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
    this.firstName.val = this.$props.first;
    this.lastName.val = this.$props.last;
    this.emailNew.val = this.$props.email;
    this.profilePictureUrl.val = this.$props.img;
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