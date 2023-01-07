<template>
  <div class="container text-center">
  <div class="row">
    <div class="col-4">
      <DashBoard />
    </div>
    <div class="col-8">
      <router-view />
    </div>
  </div>
</div>
</template>

<script>
import DashBoard from '@/components/layout/DashBoard.vue';

export default {
  name: 'AdminView',
  components: {
    DashBoard,
  }
}
</script>
