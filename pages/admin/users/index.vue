<template>
  <div>
    <users />
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
    Users: () =>  import('@/components/Auth/Users/index.vue'),
  },
})
</script>

<style>

</style>
