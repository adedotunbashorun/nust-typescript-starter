<template>
  <b-breadcrumb class="top" :items="pages"></b-breadcrumb>
</template>
<script lang="ts">
import { forEach } from 'lodash';
import Vue from 'vue';
export default Vue.extend({
  name: 'Crumb',
  props: ['currentPage'],
  computed: {
    pages() {
      const items = this.currentPage.split('-');
      const data = [
        {
          text: 'Home',
          href: '#'
        }
      ]
      items.forEach((element: any) => {
        data.push({ text: this.capitalizeFirstLetter(element) , href: '#'});
      });
      return data
    }
  },
  methods: {
    capitalizeFirstLetter(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
})
</script>
<style scoped>
 .top {
    margin-top: 6rem;
  }
 @media only screen and (max-width: 480px) {
    .top { margin-top: 10rem; }
  }

</style>
