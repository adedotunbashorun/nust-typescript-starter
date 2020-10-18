<template>
	<div class="navbar-item">
    <a @click.prevent="show = !show" :class="{ 'nuxt-link-exact-active': showDrowpDown }" v-if="hasDropdown">
      <div class="d-flex w-100 justify-content-start align-items-center">
          <span :class="item.icon"></span>
          <span class="menu-collapsed">{{ item.title }}</span>
          <span :class="{'fa fa-angle-down ml-auto':hasDropdown}"></span>
      </div>
    </a>
    <nuxt-link :to="'/'+item.url"  v-else>
      <div class="d-flex w-100 justify-content-start align-items-center" @click="show = false">
          <span :class="item.icon"></span>
          <span class="menu-collapsed">{{ item.title }}</span>
      </div>
    </nuxt-link>
    <!-- Submenu content -->
    <div v-if="hasDropdown && showDrowpDown">
      <menu-list-item v-for="(child,key) in item.children" :item="child" :key="key"></menu-list-item>
    </div>
	</div>
</template>

<script lang="ts">
import { method } from 'lodash';
import Vue from 'vue';
export default Vue.extend({
    name: 'MenuListItem',
    props: ['item'],
    data() {
      return {
        show: false,
      }
    },
    computed: {
        hasDropdown() {
            return (this as any).item.children.length;
        },
        showDrowpDown() {
          return (this as any).show ? true : false
        }
    },
})
</script>


<style scoped>

.nuxt-link-exact-active {
    text-transform: capitalize;
    display: block;
    /* padding: 10px 50px 10px 50px; */

    margin: 20px 10px;
    background-color: #fefefe;
    color: #363434;
    font-weight: 600;
}
.text-white {
  color: #fefefe;
  padding: 0;
  margin: 0;
}
ul.nav, a {
  text-transform: capitalize;
  display: block;
  margin: 20px 10px;
  color: #fefefe;
  font-weight: 600;
  text-decoration: none;
}
</style>

