<template>
  <div class="p-1 mt-3 border rounded item row">
    <div class="py-2 fw-semibold fs-5 col text-start">{{ name }}</div>
    <div class="row">
      <div class="col">
        <img :src="url" class="img-fluid" alt="productImage" />
      </div>
      <div class="col">{{ sku }}</div>
    </div>
    <div class="row">
      <div class="mt-3 btn-group" role="group" aria-label="Basic example">
        <RouterLink :to="{ name: 'EditProduct', params: { sku: `${this.sku}` } }" class="btn btn-outline-dark">
          Edit
        </RouterLink>
        <button type="button" class="btn btn-outline-danger" @click="removeProduct()">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { DeleteRequest } from "@/communication/Network.ts";

export default {
  props: ['name', 'url', 'sku'],
  methods: {
    removeProduct() {
      DeleteRequest.deleteProduct(this.$props.sku).then(res => {
        console.log(res);
      });
      this.$router.push({ name: 'ListAdmin' }).then(() => { this.$router.go() });
    },
  }
}
</script>
