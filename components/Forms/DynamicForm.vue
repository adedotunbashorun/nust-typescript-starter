<template>
    <div>
       <component
            v-for="(field, key) in schema"
            :key="key"
            :name="key"
            :is="field.component"
            v-bind="{ ...field }"
            :value="value[key]"
            @input="update(key, $event)"
            :hasError="$v.form[key].$error"
            :error="errorMessages[key]"
        >
        </component>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { validationMixin } from 'vuelidate'
import { validationRules } from '@/validations/ValidationsParser';
export default Vue.extend({
  props: {
    schema: { type: Object, required: true },
    value: { type: Object, required: true }
  },
  data () {
    return {
      form: {}
    }
  },
  computed: {
    errorMessages () {
      const validations = (this as any).$v.form;
      return Object.keys(this.schema).reduce((messages, key) => {
        const rules = (this as any).schema[key].validations;
        const rulesKeys = Object.keys((this as any).schema[key].validations);
        const validator = validations[key];

        if (!validator) return messages;

        for (let rule of rulesKeys) {
          if (validator[rule] !== false) continue;

          (messages as any)[key] = rules[rule].message;
          return messages;
        }

        return messages;
      }, {})
    }
  },
  methods: {
    update (key: any, value: any) {
      (this as any).form[key] = value;
      (this as any).$v.form[key].$touch();
      (this as any).$emit('input', {
        ...(this as any).value,
        [key]: value
      });

      (this as any).validate();
    },
    validate () {
      (this as any).$v.$touch();
      (this as any).announceStatus();
    },
    announceStatus () {
      this.$emit('status', {
        invalid: (this as any).$v.$invalid
      });
    }
  },
  created () {
    for (let name in (this as any).schema) {
      (this as any).$set((this as any).form, name, null);
    }
  },
  validations () {
    return { form: validationRules(this.schema) }
  },
  components: {
      TextInput: () => import('./TextInput.vue'),
      SecretInput: () => import('./SecretInput.vue'),
      CheckBox: () => import('./CheckBox.vue'),
      SelectInput: () => import('./SelectInput.vue'),
      TextArea: () => import('./TextArea.vue'),
      FileInput: () => import('./FileInput.vue')
  }
})
</script>
