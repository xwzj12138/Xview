module.exports = Behavior({
  behaviors: [],
  properties: {
    form_type: {
      type: String
    },
    size: {
      type: Number,
      value: 96,
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    url: {
      type: String,
      value: ''
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
    showMessageCard: Boolean
  },
  methods: {
    handleTap() {
      if (this.data.disabled) return false;
      //如果用户设置了跳转页面直接跳转
      if (this.data.url && this.data.url !== 'true' && this.data.url !== 'false' ){
        if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) !== -1) {
          return wx[this.data.linkType].call(wx, { url:this.data.url });;
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