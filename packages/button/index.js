var buttonBehavior = require('../common/button_behaior.js');
Component({
  behaviors: [buttonBehavior],
  externalClasses: ['x-class'],

  properties: {
    inline: {
      type: Boolean,
      value: false
    },
    size: {
      type: Number,
      value:96,
    },
    // radius round circle
    shape: {
      type: String,
      value: 'radius'
    },
    disabled: {
      type: String,
      value: '',
    },
    loading: {
      type: Boolean,
      value: false,
    }
  }
});
