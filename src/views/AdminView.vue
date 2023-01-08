<template>
  <div>
    <div class="container text-center">
      <MobileBoard />
      <div class="row">
        <div class="col-4">
          <DashBoard />
        </div>
        <div class="col-8">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashBoard from '@/components/layout/DashBoard.vue';
import MobileBoard from '@/components/layout/MobileBoard.vue';

export default {
  name: 'AdminView',
  components: {
    DashBoard,
    MobileBoard,
  }
}
</script>
