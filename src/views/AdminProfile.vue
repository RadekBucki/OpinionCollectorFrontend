<template>
  <div class="container">
    <h1 class="mt-3">Admin Profile</h1>
    <div class="row mt-5">
      <div class="col-4">
        <img :src="user.pictureUrl" class="img-fluid rounded-circle" alt="Responsive image">
      </div>
      <div class="col">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: 'basic@gmail.com',
        firstName: 'Rafal',
        id: '5',
        isAdmin: true,
        lastName: 'Komorowski',
        pictureUrl: 'https://i.kym-cdn.com/photos/images/newsfeed/001/471/100/0e5.jpg',
      }
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