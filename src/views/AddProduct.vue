<template>
  <div class="form-group">
    <div class="form-group">
      <label for="name">Product Name:</label>
      <input type="text" name="name" class="form-control" id="name" placeholder="Type new name..." v-model.trim="name">
    </div>
    <div class="form-group">
      <label for="name">Product SKU:</label>
      <input type="text" name="name" class="form-control" id="sku" placeholder="Type new SKU..." v-model.trim="sku">
    </div>
    <div class="form-group">
      <label for="url">URL:</label>
      <input type="url" name="url" class="form-control" id="url" placeholder="https://example.com" pattern="https://.*"
        v-model.trim="url">
    </div>
    <div class="form-group">
      <label for="desc">Description</label>
      <textarea class="form-control" id="desc" rows="3" v-model.trim="desc"></textarea>
    </div>
    <div class="input-group mt-4">
      <div class="input-group-prepend">
        <span class="input-group-text" id="">Category and visibility</span>
      </div>
      <input type="text" class="form-control" v-model.trim="categoryName">
      <select v-model="visible">
        <option value=true>True</option>
        <option value=false>False</option>
      </select>
      <button type="button" class="btn btn-outline-dark" @click="addCategory()">Add category</button>
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
          <tr v-for="category, index in categories" :key="category.categoryName">
            <td>{{ category.categoryName }}</td>
            <td>{{ category.visible }}</td>
            <td><button type="button" class="btn btn-danger" @click="removeCategory(index)">Remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <button type="button" class="set btn btn-outline-dark" @click="addProduct">Add product</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      url: '',
      desc: '',
      sku: '',
      categories: [],
      visible: null,
      categoryName: '',
    }
  },
  methods: {
    addCategory() {
      const toBool = (this.visible === 'true');
      this.categories.push({
        categoryName: this.categoryName,
        visible: toBool,
      });
      this.categoryName = '';
      this.visible = null;
    },
    removeCategory(index) {
      this.categories.splice(index, 1);
    },
    addProduct() {
      //POST
    }
  },
  computed: {
    hasAddedCategories() {
      return this.categories && this.categories.length > 0;
    }
  },
}
</script>

<style scoped>
.set {
  margin-top: 2%;
}
</style>