<template>
  <div class="p-2 mt-3 border rounded item row">
    <img :src="url" class="img-fluid" alt="productImage" />
  </div>
</template>

<script>
export default {
  props: ['url'],
}
</script>