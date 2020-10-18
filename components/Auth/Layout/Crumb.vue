<template>
  <nav class="top" aria-label="breadcrumb">
    <ol class="breadcrumb container-fluid">
      <li class="breadcrumb-item"><nuxt-link to="/admin/dashboard" class="not-active">Home</nuxt-link></li>
      <li class="breadcrumb-item active" aria-current="page"><nuxt-link to="#">{{ currentPage }}</nuxt-link></li>
    </ol>
  </nav>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Crumb',
  props: ['currentPage'],
})
</script>
<style scoped>
 .top {
   margin-top: 100px;
 }
 .nuxt-link-exact-active {
    text-transform: capitalize;
    display: inline;
    padding: 0;
    /* padding: 10px 50px 10px 50px; */

    margin: 0px 0px;
    background-color: transparent;
    color: #363434;
    font-weight: 0;
}
.not-active {
    text-transform: capitalize;
    display: inline;
    padding: 0;
    /* padding: 10px 50px 10px 50px; */

    margin: 0px 0px;
    background-color: transparent;
    color: #363434;
    font-weight: 600;
}
</style>
