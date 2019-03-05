Component({
    behaviors: ['wx://form-field'],

    externalClasses: ['i-class'],

    properties: {
      title: {
          type: String
      },
      // text || textarea || password || number
      type: {
          type: String,
          value: 'text'
      },
      disabled: {
          type: Boolean,
          value: false
      },
      placeholder: {
          type: String,
          value: ''
      },
      autofocus: {
          type: Boolean,
          value: false
      },
      mode: {
          type: String,
          value: 'normal'
      },
      right: {
          type: Boolean,
          value: false
      },
      error: {
          type: Boolean,
          value: false
      },
      maxlength: {
          type: Number
      },
      name:{
        type:String,
        value:''
      },
      value: {
        type: String,
        value: ''
      }
    },

    methods: {
        handleInputChange(event) {
          this.setData({ value:event.detail.value });

          this.triggerEvent('change', { value: event.detail.value,name:this.data.name});
          
          return event.detail.value;
        },

        handleInputFocus(event) {
          this.triggerEvent('focus', { value: event.detail.value, name: this.data.name });
        },

        handleInputBlur(event) {
          this.triggerEvent('blur', { value: event.detail.value, name: this.data.name });
        }
    }
});
