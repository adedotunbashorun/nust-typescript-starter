<template>
  <div>
    <crumb currentPage="Settings" />
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <div class="container">
        <b-card no-body>
          <b-tabs
            card
            active-nav-item-class="nav nav-pills text-dark"
            active-tab-class="font-weight-bold text-dark"
            content-class="mt-3"
          >
            <b-form class="user" @submit.stop.prevent="onSubmit">
              <b-tab title="General" active>
                <b-img thumbnail width="100" height="100" :src="(generalForm||{}).appLogo" alt="App Logo"></b-img>
                <DynamicForm
                  :schema="generalSchema"
                  v-model="generalForm"
                  @status="saveStatus"
                  ref="dynamicForm"
                />
              </b-tab>
              <b-tab title="Contact Information"><p>I'm the second tab</p></b-tab>
              <b-tab title="Mail Settings"><p>I'm the tab with the very, very long title</p></b-tab>
              <b-tab title="Sms Settings"><p>I'm the tab with the very, very long title</p></b-tab>
              <b-tab title="Payment Settings"><p>I'm a disabled tab!</p></b-tab>
              <b-tab title="Other Settings"><p>I'm a disabled tab!</p></b-tab>
              <div class="row">
                <div class="col-6 offset-6">
                    <button type="submit" :disabled="loading"
                        class="float-right btn btn-primary btn-lg mb-2 mt-4 mr-4">
                        Save Setting
                    </button>
                </div>
              </div>
            </b-form>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import generalSchema from '@/schema/settings.general';
export default Vue.extend({
  data: () => {
    return {
      loading: false,
      generalSchema,
      generalForm: {},
      status: null
    }
  },
  mounted() {
    this.getSettings();
  },
  methods: {
    async onSubmit() {
      const formData: any = {...this.generalForm}
        if (!formData) {
            return;
        }
        this.loading = true;
        try {
          const data = await this.$store.dispatch('storeSettings', formData);
          this.$toast.success('Settings Saved').goAway(2500);
        } catch (error) {
          this.$toast.error(error.message).goAway(2500);
        }
        this.loading = false;
    },
    saveStatus (status: any) {
      this.status = status
    },
    async getSettings() {
      try {
        const data = await this.$store.dispatch(`fetchSettings`);
        if(data.appTitle){
         this.generalForm = data;
        }
      } catch (error) {
        this.$toast.error(error.message).goAway(2500);
      }
    },

  },
  components: {
    Crumb: () => import('@/components/Auth/Layout/Crumb.vue'),
    DynamicForm: () => import('@/components/Forms/DynamicForm.vue')
  }
})
</script>
