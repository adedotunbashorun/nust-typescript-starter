<template>
  <div>
    <about />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  layout: 'app',
  data: () => {
    return {

    }
  },
  components: {
    About: () =>  import('@/components/About.vue'),
  },
  mounted() {
  },
  methods: {

  }
})
</script>

<style>

</style>
