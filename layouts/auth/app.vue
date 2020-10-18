<template>
  <div>
    <main-header/>
    <div class="container-fluid">
      <div class="row">
        <main-side-bar v-if="toggle" />
        <main role="main" :class="(toggle) ? 'content col-md-9 ml-sm-auto col-lg-10 px-md-4 overflow-hidden': 'content col-md-12 ml-sm-auto col-lg-12 px-md-4 overflow-hidden'">
          <nuxt/>
        </main>
      </div>
    </div>
    <main-footer/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import sidebarToggle from '~/mixins/sidebarToggle.ts';
export default Vue.extend({
  mixins: [sidebarToggle],
  data: () => {
    return {
      socket: null,
    }
  },
  async fetch() {
    try {
      const data = await this.$store.dispatch(`fetchSettings`);
      console.log(data);
    } catch (error) {
      this.$toast.error(error.message).goAway(2500);
    }
  },
  fetchOnServer: false,
  mounted() {

    // this.socket.emit('create', "Hello World");
  },
  created() {
    this.socket = (this as any).$nuxtSocket({});
    // (this.socket as any).emit('create-user-account', "83a5fc74-035b-4bf1-90a2-90d5a07a633e");
    /* Listen for events: */
    (this.socket as any).on('msgToClient', (msg: any, cb: any) => {
      /* Handle event */
      console.log(msg);
      this.$toast.success((msg.payload) ? msg.payload : msg).goAway(2500);
    });
  },
  components: {
    MainHeader: () => import('@/components/Auth/Layout/Header.vue'),
    MainFooter: () => import('@/components/Auth/Layout/Footer.vue'),
    MainSideBar: () => import('@/components/Auth/Layout/Sidebar.vue'),
  },
})
</script>
