<template>
  <div class="row">
    <div class="p-2 mt-3 border rounded item row">
      <div class="row">
        <div class="col">
          <img :src="url" alt="productImage" />
        </div>
        <div class="col">
          <span>{{ name }}</span>
        </div>
        <div class="col">
          <span>{{ sku }}</span>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="btn-group" role="group" aria-label="Basic example">
            <RouterLink :to=linkToProduct class="btn btn-outline-dark">Edit</RouterLink>
            <button type="button" class="btn btn-outline-danger">Delate</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['name', 'url', 'sku'],
  computed: {
    linkToProduct() {
      return "/editProduct/" + this.sku;
    }
  }
}
</script>
