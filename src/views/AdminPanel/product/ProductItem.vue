<template>
  <div class="row products">
    <div class="col-lg-10">
      <div class="p-2 mt-3 border rounded item row">
        <div class="fw-semibold fs-5 col-2">{{ name }}</div>
        <img :src="url" alt="productImage" />
        <div class="col-3">{{ description }}</div>
        <div class="col-2">{{ sku }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'url', 'description', 'sku'],
}
</script>