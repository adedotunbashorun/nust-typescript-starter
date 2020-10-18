<template>
  <div>
    <home></home>
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
    Home: () =>  import('@/components/Home.vue'),
  },
  mounted() {
  },
  methods: {

  }
})
</script>

<style>

</style>
