<template>
  <div>
    <main-header/>
    <main role="main">
      <nuxt/>
    </main>
    <main-footer/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  async fetch() {
    try {
      const data = await this.$store.dispatch(`fetchSettings`, '/settings/public');
    } catch (error) {
      this.$toast.error(error.message).goAway(2500);
    }
  },
  fetchOnServer: false,
  components: {
    MainHeader: () => import('@/components/Header.vue'),
    MainFooter: () => import('@/components/Footer.vue'),
  },
})
</script>
