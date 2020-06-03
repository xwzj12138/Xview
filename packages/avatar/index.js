Component({
    externalClasses: ['x-class'],

    properties: {
      // x-radius x-round x-circle
      shape: {
        type: String,
        value: 'x-round'
      },
      size: {
          type: Number,
          value: 32
      },
      src: {
          type: String,
          value: ''
      }
    }
});
