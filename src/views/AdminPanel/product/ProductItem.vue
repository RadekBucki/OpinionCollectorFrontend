<template>
  <div class="p-1 mt-3 border rounded item row">
    <div class="fw-semibold fs-5 col text-start">{{ name }}</div>
    <div class="row">
      <img :src="url" class="img-fluid" alt="productImage" />
      <div class="col-3">{{ sku }}</div>
    </div>
    <div class="row">
      <!-- <div class="btn-group" role="group" aria-label="Basic example">
        <RouterLink :to="{ name: 'EditProduct', params: { sku: `${this.sku}` } }" class="btn btn-outline-dark">
          Edit
        </RouterLink>
        <button type="button" class="btn btn-outline-danger">Delete</button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'url', 'sku'],
}
</script>
