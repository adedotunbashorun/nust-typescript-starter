<template>
  <div class="breadcrumbs overlay">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="bread-inner">
            <!-- Bread Menu -->
            <div class="bread-menu">
              <ul>
                <li><nuxt-link :to="'/'">Home</nuxt-link></li>
                <li><nuxt-link  :to="link">{{ name }}</nuxt-link ></li>
              </ul>
            </div>
            <!-- Bread Title -->
            <div class="bread-title"><h2>{{ title }}</h2></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ["name","link","title"]
})
</script>
