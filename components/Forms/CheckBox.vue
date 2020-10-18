<template>
    <b-form-group :label="label" id="input-group-1">
        <b-form-checkbox-group
            :class="{
              'error': hasError,
              'green': !!value && !hasError
            }"
            :aria-describedby="`${name}-error`"
            :name="name"
            :id="name"
            @change="$emit('input', $event.target.value)"
            :options="options"
            disabled-field="notEnabled"
        ></b-form-checkbox-group>
        <p :id="`${name}-error`" class="error" v-if="hasError && error">{{ error }}</p>
    </b-form-group>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
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
    options: {
      type: Array,
      required: true,
      validator (opts) {
        return (
          opts.find((opt: any) => {
            return !opt.hasOwnProperty('text') || !opt.hasOwnProperty('value')
          }) === undefined
        )
      }
    },
    hasError: { type: Boolean, default: false },
    error: { type: String, required: false }
  },
  data () {
    return {
      val: null
    }
  }
})
</script>
