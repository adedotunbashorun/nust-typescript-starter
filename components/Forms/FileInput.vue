import { required } from 'vuelidate/lib/validators';
<template>
    <b-form-group :label="label" id="input-group-5">
        <b-form-file
          :class="{
            'is-invalid': hasError,
            'is-valid': !!value && !hasError
          }"
          :aria-describedby="`${name}-error`"
          :name="name"
          :id="name"
          @change="onFileChange('input', $event)"
        ></b-form-file>
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
  },
  methods: {
    onFileChange(input: any, e: any) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0], input);
    },
    createImage(file: any, input: any) {
      var image = new Image();
      var reader = new FileReader();
      const vm = this;
      reader.onload = (e: any) => {
        this.$emit(input, e.target.result);
      };
      reader.readAsDataURL(file);
    },
  }
})
</script>
