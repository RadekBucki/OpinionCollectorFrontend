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
      <div class="col">
        <h1 class="fs-6 fw-bold">Review:</h1>
        <div v-if="this.$props.review != null">
          <div>
            <b>Status: </b><span style="color:forestgreen;">{{ review?.status }}</span>
          </div>
          <div>
            <b>Reply: </b><span>{{ review?.reply }}</span>
          </div>
        </div>
        <div v-else>
          <b>Status: </b><span style="color:red;"> PENDING </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="button-control">
        <RouterLink :to="{ name: 'EditProduct', params: { sku: `${this.sku}` } }" class="btn btn-outline-dark">
          Edit Product
        </RouterLink>
        <button v-if="this.$props.review === null" type="button" class="btn btn-outline-dark" @click="reply">
          {{ buttonText }}</button>
      </div>
      <div>
        <div v-if="getToggle" class="row mt-3">
          <div class="form-group" :class="{ invalid: !suggestionReply.isValid }">
            <label v-if="suggestionReply.isValid" for="desc">Reply message</label>
            <label v-else>Reply must not be empty.</label>
            <textarea class="form-control" id="desc" rows="3" v-model="suggestionReply.val" @blur="clearValidity('suggestionReply')"></textarea>
          </div>
          <div class="form-group">
            <label for="select">Status</label>
            <select class="form-control" id="select" v-model="pickedStatus">
              <option v-for="status in suggestionStatus" :key="status" :value="status">{{ status }}
              </option>
            </select>
          </div>
          <button type="button" class="mt-3 btn btn-success" @click="submitForm()">Send Reply</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PutRequest } from "@/communication/Network.ts";
import {SweetAlert} from "@/communication/SweetAlerts.ts";

export default {
  props: ['id', 'sku', 'description', 'user', 'review'],
  data() {
    return {
      suggestionReply: {
        val: '',
        isValid: true,
      },
      suggestionStatus: ['DECLINED', 'DONE'],
      replyToggle: false,
      pickedStatus: 'DECLINED',
      formIsValid: true,
    };
  },
  methods: {
    reply() {
      this.replyToggle = !this.replyToggle;
    },
    sendReply() {
      const data = {
        suggestionId: this.id,
        suggestionReply: this.suggestionReply.val,
        suggestionStatus: this.pickedStatus.toLocaleUpperCase(),
      };
      PutRequest.replySuggestion(data).then(() => {
        SweetAlert.success(this.$swal, "Successfully replied to the suggestion").then(() => {
          this.$router.push({ name: 'SuggestionsPanel' }).then(() => { this.$router.go() });
          this.replyToggle = !this.replyToggle;
        });
      }).catch(() => {
        SweetAlert.error(this.$swal, "Something went wrong!").then(() => {
          this.replyToggle = !this.replyToggle;
        });
      })
    },
    validateForm() {
      this.formIsValid = true;
      if (this.suggestionReply.val === '') {
        this.suggestionReply.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      this.sendReply();
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
  },
  computed: {
    getToggle() {
      return this.replyToggle;
    },
    buttonText() {
      return this.replyToggle ? 'Back' : 'Reply';
    },
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

.invalid label {
  color: red;
}

.invalid textarea {
  border: 1px solid red;
}
</style>