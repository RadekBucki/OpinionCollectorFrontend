<template>
  <div class="form-group">
    <div class="form-group" :class="{ invalid: !name.isValid }">
      <label v-if="name.isValid" for="name">Product Name:</label>
      <label v-else>Product name must not be empty.</label>
      <input
        type="text"
        name="name"
        class="form-control"
        id="name"
        placeholder="Type new name..."
        v-model.trim="name.val"
        @blur="clearValidity('name')"
        >
    </div>
    <div class="form-group" :class="{ invalid: !sku.isValid }">
      <label v-if="sku.isValid" for="name">Product SKU:</label>
      <label v-else>Product sku must not be empty.</label>
      <input
        type="text"
        name="name"
        class="form-control"
        id="sku"
        placeholder="Type new SKU..."
        v-model.trim="sku.val"
        @blur="clearValidity('sku')"
        >
    </div>
    <div class="form-group" :class="{ invalid: !url.isValid }">
      <label v-if="url.isValid" for="url">URL:</label>
      <label v-else>Product url must not be empty.</label>
      <input
        type="url"
        name="url"
        class="form-control"
        id="url"
        placeholder="https://example.com"
        v-model.trim="url.val"
        @blur="clearValidity('url')"
        >
    </div>
    <div class="form-group" :class="{ invalid: !desc.isValid }">
      <label v-if="desc.isValid" for="desc">Description</label>
      <label v-else>Description must not be empty and should be 8 letters long.</label>
      <textarea
        class="form-control"
        id="desc"
        rows="3"
        v-model.trim="desc.val"
        @blur="clearValidity('desc')"
        >
      </textarea>
    </div>
    <div class="radio m-4">
      <div class="form-check">
        <label class="form-check-label" for="flexRadioDefault1">
          Visible
        </label>
        <input
          class="form-check-input"
          type="radio"
          name="Visible"
          id="radio1"
          value="true"
          v-model="visible"
          >
      </div>
      <div class="form-check">
        <label class="form-check-label" for="flexRadioDefault2">
          Invisible
        </label>
        <input
          class="form-check-input"
          type="radio"
          name="Invisible"
          id="radio2"
          value="false"
          v-model="visible"
          >
      </div>
    </div>
    <div v-if="hasAddedCategories">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Visible</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.categoryName">
            <td>{{ category.categoryName }}</td>
            <td>{{ category.visible }}</td>
            <td class="buttons-control">
              <button
                v-if="category"
                :disabled="hasCategory(category.categoryName)"
                type="button"
                class="btn btn-success"
                @click="addCategory(category)
                ">
                Add category to product
                </button>
              <button
                v-if="category"
                :disabled="!hasCategory(category.categoryName)"
                type="button"
                class="btn btn-danger"
                @click="removeCategory(category)
                ">
                Remove category
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <p v-if="categoriesValid === 0">Product should have at least one category</p>
    </div>
    <button type="button" class="set btn btn-outline-dark" @click="submitForm()">Add product</button>
  </div>
</template>

<script>
import { GetRequest, PostRequest } from "@/communication/Network.ts";
import {SweetAlert} from "@/communication/SweetAlerts.ts";

export default {
  data() {
    return {
      name: {
        val: '',
        isValid: true,
      },
      url: {
        val: '',
        isValid: true,
      },
      desc: {
        val: '',
        isValid: true,
      },
      sku: {
        val: '',
        isValid: true,
      },
      categories: [],
      visible: true,
      checkedCategories: [],
      categoriesValid: 0,
      formIsValid: true,
    }
  },
  methods: {
    loadCategories() {
      GetRequest.getAllCategories().then(res => {
        this.categories = res;
      });
    },
    hasCategory(catName) {
      const owned = this.checkedCategories.filter(cat => {
        return cat.categoryName === catName;
      });
      let flag = false;
      owned.forEach(element => {
        if (element.categoryName === catName) {
          flag = true;
          return;
        }
      });
      return flag;
    },
    addCategory(category) {
      this.checkedCategories.push(category);
      this.categoriesValid++;
    },
    removeCategory(category) {
      this.checkedCategories = this.checkedCategories.filter(cat => {
        return cat.categoryName === category.categoryName ? false : true;
      });
      this.categoriesValid--;
    },
    addProduct() {
      const product = {
        categoryNames: this.checkedCategories.map(element => element.categoryName),
        description: this.desc.val,
        name: this.name.val,
        pictureUrl: this.url.val,
        sku: this.sku.val,
        visible: this.visible,
      };
      console.log(product);
      PostRequest.addProduct(product).then(() => {
        this.$router.push( { name: 'ListAdmin' } ).then(() => { this.$router.go() });
      }).catch(() => {
        SweetAlert.error(this.$swal, "Something went wrong!");
      })
    },
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === '') {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.sku.val === '') {
        this.sku.isValid = false;
        this.formIsValid = false;
      }
      if (this.url.val === '') {
        this.url.isValid = false;
        this.formIsValid = false;
      }
      if (this.desc.val === '') {
        this.desc.isValid = false;
        this.formIsValid = false;
      }
      if (this.checkedCategories.length === 0) {
        this.categoriesValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      this.addProduct();
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
  },
  computed: {
    hasAddedCategories() {
      return this.categories && this.categories.length > 0;
    }
  },
  mounted() {
    this.loadCategories();
  },
}
</script>

<style scoped>
.set {
  margin-top: 2%;
}

.radio {
  display: flex;
  justify-content: space-around;
}
.buttons-control {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.invalid label {
  color: red;
}
.invalid input {
  border: 1px solid red;
}

.invalid textarea {
  border: 1px solid red;
}

p {
  color: red;
}
</style>