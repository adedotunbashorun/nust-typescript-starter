<template>
  <div class="contain">
    <div class="row">
        <div class="col-lg-7 col-sm-12 login-base d-none d-lg-block">
          <div class="pt-5 pl-5 m-auto">
            <h4 class="text-white">Welcome Back!</h4>
          </div>
        </div>
        <div class="col-lg-5 col-sm-12 col-xs-12 mt-5 px-3">
          <Nuxt />
        </div>
    </div>
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
})
</script>
