<template>
<b-form-group :label="label" id="input-group-4">
  <b-form-textarea
    v-bind="$attrs"
    :class="{
      'is-invalid': hasError,
      'is-valid': !!value && !hasError
    }"
    :aria-describedby="`${name}-error`"
    :value="value"
    :name="name"
    :id="name"
    v-on="{
      ...$listeners,
      input: event => $emit('input', event)
    }"
    rows="10"
    max-rows="10"
  ></b-form-textarea>
  <p :id="`${name}-error`" class="error" v-if="hasError && error">{{ error }}</p>
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
