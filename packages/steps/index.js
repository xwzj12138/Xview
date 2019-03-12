Component({
    externalClasses: ['x-class'],
    relations : {
        '../step/index' : {
            type : 'child',
            linked(){
                this._updateDataChange();
            },
            linkChanged () {
                this._updateDataChange();
            },
            unlinked () {
                this._updateDataChange();
            }
        }
    },
  properties:{
    direction:{
      type:String,
      value:'horizontal'
    }
  },
    methods: {
        _updateDataChange() {
            let steps = this.getRelationNodes('../step/index');
            const len = steps.length;
            if (len > 0) {
                steps.forEach((step, index) => {
                    step.updateDataChange({
                        len : len,
                        index : index,
                        direction : this.data.direction
                    });
                });
            }
        }
    }
})