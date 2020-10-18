import { required } from 'vuelidate/lib/validators';
<template>
  <div>
    <b-input-group :label="label" :id="name">
      <template v-slot:append>
        <b-input-group-text @click.prevent="hidePassword = !hidePassword"><strong class="text-black"><i class="fa " :class="passwordIcon"></i></strong></b-input-group-text>
      </template>
      <b-form-input
        v-bind="$attrs"
        :class="{
          'is-invalid': hasError,
          'is-valid': !!value && !hasError
        }"
        :value="value"
        :type="passwordType"
        :name="name"
        v-on="{
          ...$listeners,
          input: event => $emit('input', event)
        }"
      ></b-form-input>
    </b-input-group>
    <p :id="`${name}-error`" class="is-invalid" v-if="hasError && error">{{ error }}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number]
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: false
    },
    hasError: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      hidePassword: true,
    }
  },
  computed: {
    passwordType() {
      return this.hidePassword ? 'password' : 'text'
    },
    passwordIcon() {
      return this.hidePassword ? 'fa-eye' : 'fa-eye-slash'
    }
  },
})
</script>
