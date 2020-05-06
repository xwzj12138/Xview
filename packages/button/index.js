var buttonBehavior = require('../common/button_behaior.js');
Component({
  behaviors: [buttonBehavior],
  externalClasses: ['x-class'],

  properties: {
    font_size:{
      type:Number,
      value:15
    },
    // default, primary, ghost, info, success, warning, error
    type: {
      type: String,
      value: '',
    },
    inline: {
      type: Boolean,
      value: false
    },
    size: {
      type: Number,
      value:96,
    },
    // circle, square
    shape: {
      type: String,
      value: 'square'
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    long: {
      type: Boolean,
      value: false
    }
  }
});
