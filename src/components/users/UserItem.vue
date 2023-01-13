<template>
  <div class="container border">
    <div class="row">
      <div class="col-4">
        <img :src="img" class="img-fluid rounded m-3" alt="Responsive image">
        <input v-if="isEditable"
          type="text" 
          class="form-control m-3" 
          placeholder="URL" 
          aria-label="URL" 
          aria-describedby="basic-addon1" 
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
              />
          </div>
          <div class="group-info">
            <label>Admin Status:</label>
            <p>{{ admin }}</p>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-outline-dark m-2" @click="editUser()">Edit User</button>
  </div>
</template>

<script>
export default {
  props: ['first', 'last', 'email', 'admin', 'img', 'userId'],
  data() {
    return {
      firstName: "Uzytkownik",
      lastName: "Nr1",
      emailNew: "123@123.pl",
      adminStatus: true,
      profilePictureUrl: "https://images.gram.pl/news/cokj20221214120429192wnjw.jpg",
      editToggle: false,
    }
  },
  methods: {
    editUser() {
      this.editToggle = !this.editToggle;
    }
  },
  computed: {
    isAdmin() {
      return this.user.isAdmin ? 'Active' : 'Disabled';
    },
    isEditable() {
      return this.editToggle;
    }
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
</style>