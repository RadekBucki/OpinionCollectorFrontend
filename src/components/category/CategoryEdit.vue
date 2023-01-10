<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-lg">Category</span>
    </div>
    <input 
      type="text" 
      class="form-control" 
      aria-label="Large" 
      aria-describedby="inputGroup-sizing-sm"
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  created() {
    console.log(this.category);
  }
}
</script>

<style scoped>

</style>