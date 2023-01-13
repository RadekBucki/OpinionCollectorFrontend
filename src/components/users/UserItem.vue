<template>
  <div class="container border m-2">
    <div class="row">
      <div class="col-4">
        <img :src="img" class="img-fluid rounded m-3" alt="Responsive image">
        <input v-if="isEditable"
          type="text" 
          class="form-control m-3" 
          placeholder="URL" 
          aria-label="URL" 
          aria-describedby="basic-addon1" 
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
              aria-label="First Name" 
              aria-describedby="basic-addon1" 
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
              aria-label="Last Name" 
              aria-describedby="basic-addon1" 
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
              aria-label="Email" 
              aria-describedby="basic-addon1"
              v-model="emailNew" 
              />
          </div>
          <div class="group-info">
            <label>Admin Status:</label>
            <p>{{ admin }}</p>
          </div>
        </div>
      </div>
    </div>
    <button v-if="!this.$props.admin"
      type="button" 
      class="btn btn-outline-dark m-2" 
      @click="editUser()
      ">
      Edit User
    </button>
    <span v-else class="status">AdminUser</span>
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
export default {
  props: ['first', 'last', 'email', 'admin', 'img', 'userId'],
  data() {
    return {
      firstName: '',
      lastName: '',
      emailNew: '',
      profilePictureUrl: '',
      editToggle: false,
    }
  },
  methods: {
    editUser() {
      this.editToggle = !this.editToggle;
    },
    saveUserData() {
      //put
      console.log('elo');
    }
  },
  computed: {
    isAdmin() {
      return this.user.isAdmin ? 'Active' : 'Disabled';
    },
    isEditable() {
      return this.editToggle;
    }
  },
  mounted() {
    this.firstName = this.$props.first;
    this.lastName = this.$props.last;
    this.emailNew = this.$props.email;
    this.adminStatus = this.$props.admin;
    this.profilePictureUrl = this.$props.img;
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

.status {
  color: white; 
  font-size: 16px; 
  background-color: Crimson; 
  border: 4px solid Crimson; 
  border-radius: 18px;  
}
</style>