<template>
<div>
  <div class="topbar">
    <div class="container">
      <div class="row flex">
        <div class="col-lg-8 col-12">
          <!-- Top Contact -->
          <div class="top-contact">
            <div class="single-contact"><i class="fa fa-phone"></i>Phone: +(234) 903-4268-873</div>
            <div class="single-contact"><i class="fa fa-envelope-open"></i>Email: info@coinbase.com</div>
            <div class="single-contact"><i class="fa fa-clock-o"></i>Opening: 08AM - 09PM</div>
          </div>
          <!-- End Top Contact -->
        </div>
        <div class="col-lg-4 col-12">
          <div class="topbar-right">
            <!-- Social Icons -->
            <ul class="social-icons">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
            </ul>
            <nuxt-link to="login" class="a">Login</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <b-navbar toggleable="lg" type="white" variant="white">
    <b-navbar-brand href="#"><b-avatar variant="light" :src="(settings||{}).appLogo" class="mr-3"></b-avatar>{{ (settings||{}).appTitle }}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <i class="fa fa-bars"></i>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class=""><nuxt-link :to="'/'">Home</nuxt-link></b-nav-item>
        <b-nav-item><nuxt-link :to="'/about'">About</nuxt-link></b-nav-item>
        <b-nav-item>Our Service</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
import settings from '~/mixins/settings.ts';
export default Vue.extend({
  mixins: [settings],
  data: () => {
    return {

    }
  },
})
</script>
<style scoped>
.nuxt-link-exact-active, .nuxt-link-active {
    text-transform: capitalize;
    background-color: #fefefe;
    position: relative;
    display: inline;
    padding: 10px;
    color: #2180da;
    font-weight: 600;
}
.a {
    text-transform: capitalize;
    background-color: #fefefe;
    position: relative;
    display: inline;
    padding: 10px;
    color: #2180da;
    font-weight: 600;
}
</style>
