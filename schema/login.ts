const loginSchema = {
  "username": {
      "component": "TextInput",
      "label": "Email",
      "type": "email",
      "validations": {
          "required": {
              "params": null,
              "message": "This field is required"
          },
          "email": {
              "params": null,
              "message": "This field needs to be a valid email"
          }
      }
  },
  "password": {
      "component": "SecretInput",
      "label": "Password",
      "type": "password",
      "validations": {
          "required": {
              "params": null,
              "message": "This field is required"
          },
          "minLength": {
            "params": 6,
            "message": "Please type at least 6 characters"
          }
      }
  },
  // "favoritePet": {
  //     "component": "SelectInput",
  //     "label": "What's your favorite pet?",
  //     "options": [
  //         { "text": "Cat", "value": "cat" },
  //         { "text": "Dog", "value": "dog" },
  //         { "text": "Sea Otter", "value": "otter" }
  //     ],
  //     "validations": {
  //         "required": {
  //             "params": null,
  //             "message": "This field is required"
  //         }
  //     }
  // }
}

export default loginSchema;
