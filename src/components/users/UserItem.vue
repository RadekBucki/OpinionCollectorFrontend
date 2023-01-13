<template>
  <div class="container border">
    <div class="row">
      <div class="col-4">
        <img :src="user.profilePictureUrl" class="img-fluid rounded m-3" alt="Responsive image">
      </div>
      <div class="d-flex col align-items-center">
        <div class="row">
          <div class="group-info">
            <label>First Name:</label>
            <p>{{ user.firstName }}</p>
          </div>
          <div class="group-info">
            <label>Last Name:</label>
            <p>{{ user.lastName }}</p>
          </div>
          <div class="group-info">
            <label>Email:</label>
            <p>{{ user.email }}</p>
          </div>
          <div class="group-info">
            <label>Admin Status:</label>
            <p>{{ isAdmin }}</p>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-outline-dark">Edit User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        "firstName": "Uzytkownik",
        "lastName": "Nr1",
        "email": "123@123.pl",
        "isAdmin": true,
        "profilePictureUrl": "https://images.gram.pl/news/cokj20221214120429192wnjw.jpg",
        "id": 1
      },
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