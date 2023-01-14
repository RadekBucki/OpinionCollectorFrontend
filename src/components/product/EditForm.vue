<template>
  <div class="form-group" v-if="hasAddedCategories && this.$props.loaded">
    <div class="form-group">
      <label for="name">Product Name:</label>
      <input 
        type="text" 
        name="name" 
        class="form-control"  
        placeholder="Type new name..." 
        v-model.trim="name">
    </div>
    <div class="form-group">
      <label for="name">Product SKU:</label>
      <p>{{ sku }}</p>
    </div>
    <div class="form-group">
      <label for="url">URL:</label>
      <input 
        type="url" 
        name="url" 
        class="form-control" 
        placeholder="https://example.com" 
        pattern="https://.*"
        v-model.trim="url">
    </div>
    <div class="form-group">
      <label for="desc">Description</label>
      <textarea 
        class="form-control"  
        rows="3" 
        v-model.trim="desc"></textarea>
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
          value="false" 
          v-model="visible"
          >
      </div>
    </div>
    <div>
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
                v-if="hasAddedCategories"
                :disabled="hasCategory(category.categoryName)" 
                type="button" 
                class="btn btn-success" 
                @click="addCategory(category)
                ">
                Add category to product
                </button>
              <button
                v-if="hasAddedCategories"
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
    <button type="button" class="set btn btn-outline-dark" @click="setProductDisplay">Set product edit</button>
  </div>
</template>

<script>
import { GetRequest } from "@/communication/Network.ts";

export default {
  emits: ['edit-data'],
  props: ['categoriesOwned', 'info', 'loaded'],
  data() {
    return {
      name: '',
      url: '',
      desc: '',
      sku: '',
      visible: true,
      categories: [],
      categoryName: '',
      emitsCategories: [],
    }
  },
  methods: {
    addCategory(category) {
      this.emitsCategories.push(category);
    },
    removeCategory(category) {
      this.emitsCategories = this.emitsCategories.filter(cat => {
        if (cat.categoryName === category.categoryName) {
          return false;
        } else {
          return true;
        }
      }); 
    },
    setProductDisplay() {
      this.$emit('edit-data', {
        sku: this.sku,
        name: this.name,
        pictureUrl: this.url,
        description: this.desc,
        categories: this.emitsCategories,
        visible: this.visible,
      });
    },
    loadCategories() {
      GetRequest.getAllCategories().then(res => {
        this.emitsCategories = [...this.$props.categoriesOwned];
        this.categories = res;
        this.prepareProductValues();
      });
    },
    hasCategory(catName) {
      const owned = this.emitsCategories.filter(cat => {
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
    prepareProductValues() {
      this.sku = this.$props.info.sku;
      this.name = this.$props.info.name;
      this.url = this.$props.info.pictureUrl;
      this.desc = this.$props.info.description;
    }
  },
  computed: {
    hasAddedCategories() {
      return this.categories && this.categories.length > 0;
    },
  },
  mounted() {
    this.loadCategories();
  }
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
</style>