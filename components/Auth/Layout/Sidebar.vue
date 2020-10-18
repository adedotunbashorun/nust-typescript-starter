<template>
  <div class="mt-16">
    <transition name="slide-side">
      <b-sidebar class="b-sidebar1" v-if="toggle" id="sidebar-variant" style="margin-top: 50;" :no-close-on-route-change="true" no-header no-header-close width="250px" :visible="true" bg-variant="dark" text-variant="light" shadow>
        <menu-list />
      </b-sidebar>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import sidebarToggle from '~/mixins/sidebarToggle.ts';
import settings from '~/mixins/settings.ts';
import menuList from '~/components/Menu/MenuList.vue';
export default Vue.extend({
  mixins: [sidebarToggle,settings],
  components: {menuList},
})
</script>
<style scoped>
.b-sidebar1 {
    display: flex;
    flex-direction: column;
    position: fixed !important;
    top: 0;
    height: 100vh;
    width: 320px;
    max-width: 100% !important;
    margin-top: 65px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    outline: 0;
    transform: translateX(0);
}
</style>
