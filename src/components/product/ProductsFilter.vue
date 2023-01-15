<template>
  <div class="home container mt-3">
    <div class="form-floating mb-3">
      <input 
        type="text" 
        class="form-control" 
        id="name" placeholder="Type name..." 
        :value="phrase"
        @input="$emit('update:phrase', $event.target.value)">
      <label for="name">Product Name</label>
    </div>
    <div class="form-floating mb-3">
      <input 
        type="number" 
        class="form-control" 
        id="avgMin" 
        placeholder="Average minimum value" 
        :value="min"
        @input="$emit('update:min', $event.target.value)">
      <label for="avgMin">Average minimum</label>
    </div>
    <div class="form-floating mb-3">
      <input 
        type="number" 
        class="form-control" 
        id="avgMax" 
        placeholder="Average minimum value" 
        :value="max"
        @input="$emit('update:max', $event.target.value)"
        />
      <label for="avgMax">Average maximum</label>
    </div>
    <div class="form-floating">
      <select 
        class="form-select" 
        id="Category" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        >
        <option value="">Select category</option>
        <option v-for="category in getCategories" 
          :key="category.categoryName" 
          :value="category.categoryName"
          >
          {{ category.categoryName }}
        </option>
      </select>
      <label for="Category">Category</label>
    </div>
  </div>
</template>

<script>
import { GetRequest } from "@/communication/Network.ts";

export default {
  props: ['phrase', 'min', 'max', 'modelValue'],
  emits: ['update:phrase', 'update:min', 'update:max', 'update:modelValue'],
  data() {
    return {
      categories: [],
    }
  },
  methods: {
    fetchCategories() {
      GetRequest.getCategories().then((res) => {
        this.categories = res;
      })
    },
  },
  computed: {
    getCategories() {
      return this.categories;
    }
  },
  mounted() {
    this.fetchCategories();
  }
}
</script>