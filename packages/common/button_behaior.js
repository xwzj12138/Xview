module.exports = Behavior({
  behaviors: [],
  properties: {
    font_size: {
      type: Number,
      value: 15
    },
    form_type: {
      type: String
    },
    size: {
      type: Number,
      value: 96,
    },
    bg_color: {
      type: String,
      value: 'bg-color'
    },
    color: {
      type: String,
      value: 'color14'
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch,navigateToMiniProgram
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    url: {
      type: String,
      value: ''
    },
    margin: {
      type: String,
      value: 'margin'
    },
    openType: String,
    appParameter: String,
    hoverStopPropagation: Boolean,
    lang: {
      type: String,
      value: 'en'
    },
    sessionFrom: {
      type: String,
      value: ''
    },
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appId:{
      type:String,
      value:''
    },
    extraData: {
      type: Object,
      value: {}
    }
  },
  methods: {
    handleTap() {
      if (this.data.disabled) return false;
      //如果用户设置了跳转页面直接跳转
      if (this.data.url && this.data.url !== 'true' && this.data.url !== 'false' ){
        if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) !== -1) {
          return wx[this.data.linkType].call(wx, { url:this.data.url });;
        }else{
          return wx.navigateToMiniProgram({
            appId: this.data.appId,
            path:this.data.url,
            extraData: this.data.extraData,
            success: () => { this.triggerEvent('click',{status:1});},
            fail: () => { this.triggerEvent('click', { status: 0 });}
          });
        }
      }

      this.triggerEvent('click');
    },
    bindgetuserinfo(e) {
      this.triggerEvent('getuserinfo', e.detail);
    },
    bindcontact(e) {
      this.triggerEvent('contact', e.detail);
    },
    bindgetphonenumber(e) {
      this.triggerEvent('getphonenumber', e.detail);
    },
    binderror(e) {
      this.triggerEvent('error', e.detail);
    }
  }
});