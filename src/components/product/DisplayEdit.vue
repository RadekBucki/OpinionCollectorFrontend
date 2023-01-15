<template>
  <div class="p-2 mt-3 border rounded item row">
    <div class="col">
      <div class="row m-3">
        <span>{{ name }}</span>
      </div>
      <div class="row m-3">
        <label>Product SKU</label>
        <span>{{ sku }}</span>
      </div>
      <div class="row m-3">
        <label>Description</label>
        <span>{{ description }}</span>
      </div>
      <div class="row m-3">
        <label>Categories</label>
        <span v-for="category in displayVisibleCategories" :key="category.categoryName">{{ category.categoryName }}</span>
      </div>
    </div>
    <div class="col">
      <img :src="url" class="img-fluid" alt="productImage" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['url', 'name', 'sku', 'description', 'categories'],
  computed: {
    displayVisibleCategories() {
      return this.categories.filter(cat => {
        return cat.visible === true;
      });
    },
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
}
</style>