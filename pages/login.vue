<template>
  <div>
    <login />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  layout: 'login',
  middleware: 'guest',
  data: () => {
    return {

    }
  },
  components: {
    Login: () =>  import('@/components/Login.vue'),
  },
  mounted() {
  },
  methods: {

  }
})
</script>

<style>

</style>
