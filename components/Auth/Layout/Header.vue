<template>
  <div>
    <b-navbar type="dark" variant="dark" :fixed="'top'" class="navbar fixed-top navbar-light bg-light">
      <b-navbar-brand class="col-md-3 col-lg-2 mr-0 px-3 ml-3"><b-avatar variant="light" :src="(settings||{}).appLogo" class="mr-3"></b-avatar>{{ (settings||{}).appTitle }}</b-navbar-brand>

      <i class="fa fa-bars text-white" target="sidebar-variant" @click="$store.dispatch('toggleSidebar')"></i>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template v-slot:button-content v-if="authUserName">
              {{authUserName.split(" ").map((n)=>n[0]).join(".")}}<i class="fa fa-user"></i>
            </template>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
            <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import auth from '~/mixins/auth.ts';
import settings from '~/mixins/settings.ts';
export default Vue.extend({
  mixins: [auth, settings],
  data: () => {
    return {

    }
  },
  methods: {
    async logout() {
      await  (this as any).$auth.logout();
    },
  }
})
</script>
