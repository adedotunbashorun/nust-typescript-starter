<template>
  <div>
    <settings />
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
    Settings: () =>  import('@/components/Auth/Settings/index.vue'),
  },
})
</script>

<style>

</style>
