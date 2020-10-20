const settingsGeneralSchema = {
  "appLogo": {
    "component": "FileInput",
    "label": "App Logo",
    "type": "file",
    "validations": {
        "required": {
            "params": null,
            "message": "This field is required"
        },
    }
  },
  "siteTitle": {
      "component": "TextInput",
      "label": "Site Title",
      "type": "text",
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
  "appTitle": {
    "component": "TextInput",
    "label": "App Title",
    "type": "text",
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
  "appEmail": {
    "component": "TextInput",
    "label": "App Email",
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
  "appPhone": {
    "component": "TextInput",
    "label": "App Phone",
    "validations": {
        "required": {
            "params": null,
            "message": "This field is required"
        },
        "minLength": {
          "params": 14,
          "message": "Please type at least 14 characters"
        }
    }
  },
  "welcomeMessage": {
      "component": "TextArea",
      "label": "Welcome Message",
      "validations": {
          "required": {
              "params": null,
              "message": "This field is required"
          },
          "minLength": {
            "params": 20,
            "message": "Please type at least 20 characters"
          }
      }
  },
  "siteDescription": {
    "component": "TextArea",
    "label": "Site Description",
    "validations": {
        "required": {
            "params": null,
            "message": "This field is required"
        },
        "minLength": {
          "params": 20,
          "message": "Please type at least 20 characters"
        }
    }
},
}

export default settingsGeneralSchema;
