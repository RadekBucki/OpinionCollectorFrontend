<template>
  <div v-if="hasUsers" class="mt-3">
    <div>
      <button type="button" class="btn btn-outline-dark" @click="addUserButton()">{{ buttonText }}</button>
    </div>
    <div v-if="addUserToggle">
      <AddUser v-model="addUserToggle"/>
    </div>
    <div v-if="!addUserToggle">
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
  </div>
</template>

<script>
import { GetRequest } from "@/communication/Network.ts";

import UserItem from '@/components/users/UserItem.vue';
import AddUser from "@/components/users/AddUser.vue";

export default {
  components: {
    UserItem,
    AddUser,
  },
  data() {
    return {
      users: [],
      addUserToggle: false,
    }
  },
  methods: {
    loadUsers() {
      GetRequest.getAllUsers().then(res => {
        this.users = res;
      })
    },
    addUserButton() {
      this.addUserToggle = !this.addUserToggle;
    }
  },
  computed: {
    hasUsers() {
      return this.users && this.users.length;
    },
    buttonText() {
      return this.addUserToggle ? 'Back' : 'Add New User';
    }
  },
  mounted() {
    this.loadUsers();
  }
}
</script>