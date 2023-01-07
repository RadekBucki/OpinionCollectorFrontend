<template>
  <form>
    <div class="form-group">
      <label for="name">Product Name:</label>
      <input type="text" name="name" class="form-control" id="name" placeholder="Type new name..." v-model="name">
    </div>
    <div class="form-group">
      <label for="url">URL:</label>
      <input type="url" name="url" class="form-control" id="url" placeholder="https://example.com" pattern="https://.*"
        v-model="url">
    </div>
    <div class="form-group">
      <label for="desc">Example textarea</label>
      <textarea class="form-control" id="desc" rows="3" v-model="desc"></textarea>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      url: '',
      desc: '',
    }
  }
}
</script>