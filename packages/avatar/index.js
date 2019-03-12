Component({
    externalClasses: ['x-class'],

    properties: {
        // circle || square
        shape: {
            type: String,
            value: 'circle'
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
