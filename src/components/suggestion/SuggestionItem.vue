<template>
  <div class="container border m-2">
    <div class="row">
      <div class="col-4">
        <label>From User: </label>
        <p>{{ user.firstName }}</p>
        <p>{{ user.lastName }}</p>
      </div>
      <div class="col">
        <label>User Suggestion:</label>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="row">
      <div class="button-control">
        <RouterLink :to="{ name: 'EditProduct', params: { sku: `${this.sku}` } }" class="btn btn-outline-dark">
          Edit Product
        </RouterLink>
        <button type="button" class="btn btn-outline-dark" @click="reply">{{ buttonText }}</button>
      </div>
      <div v-if="getToggle" class="row mt-3">
        <div class="form-group">
          <label for="desc">Reply message</label>
          <textarea class="form-control" id="desc" rows="3" v-model="suggestionReply"></textarea>
        </div>
        <div class="form-group">
          <label for="select">Status</label>
          <select class="form-control" id="select" v-model="pickedStatus">
            <option v-for="status in suggestionStatus" :key="status" :value="status">{{ status }}
            </option>
          </select>
        </div>
        <button type="button" class="mt-3 btn btn-success" @click="sendReply()">Send Reply</button>
      </div>
    </div>
  </div>
</template>

<script>
import { PutRequest } from "@/communication/Network.ts";

export default {
  props: ['id', 'sku', 'description', 'user'],
  data() {
    return {
      suggestionReply: '',
      suggestionStatus: ['DECLINED', 'test'],  //nie wiem jakie sa statusy 
      replyToggle: false,
      pickedStatus: null,
    };
  },
  methods: {
    reply() {
      this.replyToggle = !this.replyToggle;
    },
    sendReply() {
      const data = {
        suggestionId: this.id,
        suggestionReply: this.suggestionReply,
        suggestionStatus: this.pickedStatus,
      };
      PutRequest.replySuggestion(data).then(() => {
        alert("Reply send");
        this.$router.push( { name: 'SuggestionsPanel' } ).then(() => { this.$router.go() });
      }).catch(() => {
        alert('Something went wrong');
      })
      this.replyToggle = !this.replyToggle;
    }
  },
  computed: {
    getToggle() {
      return this.replyToggle;
    },
    buttonText() {
      return this.replyToggle ? 'Back' : 'Reply';
    }
  },
}
</script>

<style scoped>
.button-control {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

label {
  font-weight: bold;
}
</style>