<template>
	<div>
    <li @click.prevent="(hasDropdown) ? show = !show : ''" :class="{'nav-item nav-dropdown': hasDropdown, 'nav-item': !hasDropdown}">
      <nuxt-link :to="(hasDropdown) ? '#' : '/'+item.url"
        :class="{
          'nav-link  nav-dropdown-toggle': hasDropdown,
          'nav-link': !hasDropdown,
        }">
        <div class="d-flex justify-content-start align-items-center">
            <span :class="item.icon"></span>
            <span class="menu-collapsed">{{ item.title }}</span>
            <span
              :class="{
                'fa fa-angle-left ml-auto': hasDropdown && !showDrowpDown,
                'fa fa-angle-down ml-auto': showDrowpDown && hasDropdown,
                '': !hasDropdown
              }">
            </span>
        </div>
      </nuxt-link>
    </li>
      <!-- Submenu content -->
    <ul v-if="hasDropdown && showDrowpDown">
      <menu-list-item v-for="(child,key) in item.children" :item="child" :key="key"></menu-list-item>
    </ul>
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
<style lang="scss" scoped>

.nuxt-link-exact-active {
    text-transform: capitalize;
    display: block;
    margin: 5px 0px;
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
  color: #fefefe;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    background-color: #fefefe;
    color: #363434;
    display: block;
    margin: 5px 0px;
    font-weight: 600;
  }
}
</style>

