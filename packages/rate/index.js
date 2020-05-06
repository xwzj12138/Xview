Component({
    externalClasses: ['x-class'],
    properties : {
      count : {
          type : Number,
          value : 5
      },
      value : {
          type : Number,
          value : 0
      },
      disabled : {
          type : Boolean,
          value : false
      },
      size : {
          type : Number,
          value : 36
      },
      icon_name : {
          type : String,
        value: 'favorfill'
      },
      name: {
        type: String,
        value: 'score'
      }
    },
    data : {
        touchesStart : {
            pageX : 0
        }
    },
    methods : {
        handleClick(e){
            const data = this.data;
            if( data.disabled ){
                return;
            }
            const index = e.currentTarget.dataset.index;
            this.triggerEvent('change',{
              value : index + 1,
                name:this.data.name
            })
        },
        handleTouchMove(e){
            const data = this.data;
            if( data.disabled ){
                return;
            }
            if( !e.changedTouches[0] ){
                return;
            }
            const movePageX =  e.changedTouches[0].pageX;
            const space = movePageX - data.touchesStart.pageX;

            if( space <= 0 ){
                return;
            }
            let setIndex = Math.ceil( space/data.size );
            setIndex = setIndex  > data.count ? data.count : setIndex ;
            this.triggerEvent('change',{
                value : setIndex ,
              name: this.data.name
            })
        }
    },
    ready(){
       const className = '.x-rate';
        var query = wx.createSelectorQuery().in(this)
        query.select( className ).boundingClientRect((res)=>{
            this.data.touchesStart.pageX = res.left || 0;
        }).exec()
    }
});
