import * as Validators from 'vuelidate/lib/validators'

export const validationRules = (schema: any) => {
  return Object.keys(schema).reduce((rules, elementName) => {
    const item = schema[elementName]
    if (!item.hasOwnProperty('validations')) return rules

    const validations = {}
    for (let rule in item.validations) {
      const params = item.validations[rule].params

      if (params) {
        (validations as any)[rule] = (Validators as any)[rule](params)
      } else {
        (validations as any)[rule] = (Validators as any)[rule]
      }
    }

    (rules as any)[elementName] = validations
    return rules
  }, {})
}
