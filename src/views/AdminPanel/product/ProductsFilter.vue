<template>
  <div class="home container mt-3">
    <h1>Filters</h1>
    <form @submit.prevent="submitFilters()">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="name" placeholder="Type name..." v-model="name">
        <label for="name">Product Name</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="sku" placeholder="Sku" v-model="sku" />
        <label for="sku">Product Sku</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="avgMin" placeholder="Average minimum value" v-model="avgMin" />
        <label for="avgMin">Average minimum</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="avgMax" placeholder="Average minimum value" v-model="avgMax" />
        <label for="avgMax">Average minimum</label>
      </div>
      <div class="form-floating">
        <select class="form-select" id="Category" aria-label="Category">
          <option selected>Pick category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="Category">Category</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      sku: '',
      avgMax: '',
      avgMin: '',
    }
  },
  methods: {
    submitFilters() {
      console.log("eo");
    }
  }
}
</script>