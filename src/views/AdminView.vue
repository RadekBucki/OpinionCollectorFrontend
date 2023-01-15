<template>
  <div>
    <div class="text-center">
      <MobileBoard />
      <div class="row">
        <div class="d-none d-lg-block col-4">
          <DashBoard />
        </div>
        <div class="col-12 col-lg-8">
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
  },
  beforeRouteEnter(_, _2, next) {
    const admin = JSON.parse(localStorage.getItem("user"))
    if (admin != null && admin.isAdmin) {
      next(true);
    }
    else {
      next('/');
    }
  }
}
</script>
