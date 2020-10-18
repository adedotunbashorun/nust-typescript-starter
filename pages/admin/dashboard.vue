<template>
  <div>
    <dashboard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  middleware: 'isAuthenticated',
  layout: 'auth/app',
  data: () => {
    return {

    }
  },
  components: {
    Dashboard: () =>  import('@/components/Auth/Dashboard/index.vue'),
  },
})
</script>

<style>

</style>
