<template>
  <h1>Filter</h1>
  <user-item></user-item>
  <user-item></user-item>
</template>

<script>
import UserItem from '@/components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      users: [
        {
          "firstName": "Uzytkownik",
          "lastName": "Nr1",
          "email": "123@123.pl",
          "isAdmin": true,
          "profilePictureUrl": "www.zdjecie.pl",
          "id": 1
        },
        {
          "firstName": "Uzytkownik2",
          "lastName": "Nr2",
          "email": "321@321.com",
          "isAdmin": false,
          "profilePictureUrl": "www.test.pl",
          "id": 2
        },
        {
          "firstName": "User",
          "lastName": "Testowy",
          "email": "test@test.gg",
          "isAdmin": false,
          "profilePictureUrl": "www.www.pl",
          "id": 3
        },
        {
          "firstName": "John",
          "lastName": "Smith",
          "email": "example@gmail.com",
          "isAdmin": true,
          "profilePictureUrl": "https://pl.pinterest.com/pin/327848047887112192/",
          "id": 4
        },
        {
          "firstName": "rafal",
          "lastName": "kom",
          "email": "elo@320.com",
          "isAdmin": false,
          "profilePictureUrl": "ww.image.jpg",
          "id": 5
        }
      ]
    }
  }
}
</script>