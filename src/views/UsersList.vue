<template>
  <div v-if="hasUsers">
    <h1>Filter</h1>
    <UserItem v-for="user in users"
      :key="user.id"
      :first="user.firstName"
      :last="user.lastName"
      :email="user.email"
      :admin="user.isAdmin"
      :img="user.profilePictureUrl"
      :userId="user.id"
    />
  </div>
</template>

<script>
import { GetRequest } from "@/communication/Network.ts";

import UserItem from '@/components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      users: [],
    }
  },
  methods: {
    loadUsers() {
      GetRequest.getAllUsers().then(res => {
        this.users = res;
      })
    }
  },
  computed: {
    hasUsers() {
      return this.users && this.users.length;
    }
  },
  mounted() {
    this.loadUsers();
  }
}
</script>