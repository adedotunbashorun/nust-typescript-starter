import { required } from 'vuelidate/lib/validators';
<template>
    <b-form-group :label="label" :id="name">
        <b-form-input
          v-bind="$attrs"
          :class="{
            'is-invalid': hasError,
            'is-valid': !!value && !hasError
          }"
          :aria-describedby="`${name}-error`"
          :value="value"
          :name="name"
          v-on="{
            ...$listeners,
            input: event => $emit('input', event)
          }"
        ></b-form-input>
    <p :id="`${name}-error`" class="is-invalid" v-if="hasError && error">{{ error }}</p>
    </b-form-group>
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
  }
})
</script>
