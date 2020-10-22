<template>
  <div class="sidebar-sticky pt-3">
    <nav class="mb-3">
	     <menu-list-item v-for="(item,key) in items" :item="item" :key="key"></menu-list-item>
    </nav>
    <h6
      class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      v-if="configurationLinks.length > 0"
    >
      <span>Configuration</span>
      <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
        <span data-feather="plus-circle"></span>
      </a>
    </h6>
    <nav class="mb-3">
	    <menu-list-item v-for="(item,key) in configurationLinks" :item="item" :key="key"></menu-list-item>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MenuListItem from '~/components/Menu/MenuListItem.vue';
import baseLinks from "~/utils/menu/base.ts";
import configurationLinks from "~/utils/menu/configuration.ts";
import auth from '~/mixins/auth';
export default Vue.extend({
  mixins: [auth],
  props:{
      isMobile:{
          type: Boolean,
        default: false
      }
  },
  data() {
      return {
        configurationLinks
      }
  },
  computed: {
    items(){
      return baseLinks;
    }
  },
  components: {
    MenuListItem,
  }
});
</script>
