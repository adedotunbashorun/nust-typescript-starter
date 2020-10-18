<template>
<div>
  <breadcrumb :name="name" :title="title" :link="link"/>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => {
    return {
      title: "About Us",
      name: "About",
      link: "about",
    }
  },
  components : {
    BreadCrumb: () => import('@/components/breadcrumb.vue')
  }
})
</script>
