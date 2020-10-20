<template>
  <div class="col-lg-10 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2">
    <form @submit.prevent="login">
      <img class="rounded mx-auto d-block mb-3 mt-5" :src="(settings||{}).appLogo" alt="Logo" width="72" height="72">
      <center>
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      </center>
      <DynamicForm
        :schema="schema"
        v-model="form"
        @status="saveStatus"
        ref="dynamicForm"
      />
      <div class="checkbox mb-3 mt-2">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-base btn-block mb-5" type="submit" :class="{'is-loading':isLoading}">Sign in</button>
    </form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { isEmpty } from 'lodash';
import schema from '@/schema/login.ts';
import settings from '~/mixins/settings.ts';
export default Vue.extend({
  mixins: [settings],
  data: () => {
    return {
      schema,
      form: {},
      title: "Login",
      link: "login",
      isLoading: false,
      toastCount: 0,
      status: null
    }
  },
  components : {
    DynamicForm: () => import('@/components/Forms/DynamicForm.vue')
  },
  methods: {
    async login() {
      this.isLoading = true;
      (this as any).$refs.dynamicForm.validate()
      if ((this as any).status.invalid) {
        return
        this.isLoading = false;
      }
      try {
        await  (this as any).$auth.loginWith('local', {
          data: this.form
        });

        this.isLoading = false;
        this.$toast.success('Successfully authenticated').goAway(2500);
        this.$router.push('/admin/dashboard');
      } catch (e) {
        this.isLoading = false;
        let message = !isEmpty(e.response) ? e.response.data.msg : 'An error occurred';
      }
    },
    saveStatus (status: any) {
      this.status = status
    }
  }
})
</script>
