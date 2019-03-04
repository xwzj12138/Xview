// pages/icon/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      'appreciate', 'check', 'close', 'edit', 'emoji', 'favorfill', 'favor', 'loading', 'locationfill', 'location', 'phone',
      'roundcheckfill', 'roundcheck', 'roundclosefill', 'roundclose', 'roundrightfill', 'roundright', 'search', 'taxi', 'timefill',
      'time', 'unfold', 'warnfill', 'warn', 'camerafill', 'camera', 'commentfill', 'comment', 'likefill', 'like', 'notificationfill',
      'notification', 'order', 'samefill', 'same', 'deliver', 'evaluate', 'pay', 'send', 'shop', 'shopfill', 'ticket', 'cascades',
      'discover', 'list', 'more', 'scan', 'settings', 'questionfill', 'question', 'back', 'form', 'pic', 'filter', 'footprint', 'top',
      'pulldown', 'pullup', 'right', 'refresh', 'moreandroid', 'deletefill', 'refound', 'cart', 'qrcode', 'remind', 'delete', 'profile',
      'home', 'cartfill', 'discoverfill', 'homefill', 'message', 'addressbook', 'link', 'lock', 'unlock', 'vip', 'weibo', 'activity',
      'friendaddfill', 'friendadd', 'friendfamous', 'friend', 'goods', 'selection', 'explore', 'present', 'squarecheckfill', 'square',
      'squarecheck', 'round', 'roundaddfill', 'roundadd', 'add', 'notificationforbidfill', 'explorefill', 'fold', 'game', 'redpacket',
      'selectionfill', 'similar', 'appreciatefill', 'infofill', 'info', 'forwardfill', 'forward', 'rechargefill', 'recharge', 'vipcard',
      'voice', 'voicefill', 'friendfavor', 'wifi', 'share', 'wefill', 'we', 'lightauto', 'lightforbid', 'lightfill', 'camerarotate',
      'light', 'barcode', 'flashlightclose', 'flashlightopen', 'searchlist', 'service', 'sort', 'down', 'mobile', 'mobilefill', 'copy',
      'countdownfill', 'countdown', 'noticefill', 'notice', 'upstagefill', 'upstage', 'babyfill', 'baby', 'brandfill', 'brand',
      'choicenessfill', 'choiceness', 'clothesfill', 'clothes', 'creativefill', 'creative', 'female', 'keyboard', 'male', 'newfill', 'new',
      'pullleft', 'pullright', 'rankfill', 'rank', 'bad', 'cameraadd', 'focus', 'friendfill', 'cameraaddfill', 'apps', 'paintfill', 'paint',
      'picfill', 'refresharrow', 'colorlens', 'markfill', 'mark', 'presentfill', 'repeal', 'album', 'peoplefill', 'people', 'servicefill',
      'repair', 'file', 'repairfill', 'taoxiaopu', 'weixin', 'attentionfill', 'attention', 'commandfill', 'command', 'communityfill',
      'community', 'read', 'calendar', 'cut', 'magic', 'backwardfill', 'playfill', 'stop', 'tagfill', 'tag', 'group', 'all', 'backdelete',
      'hotfill', 'hot', 'post', 'radiobox', 'rounddown', 'upload', 'writefill', 'write', 'radioboxfill', 'punch', 'shake', 'move', 'safe',
      'activityfill', 'crownfill', 'crown', 'goodsfill', 'messagefill', 'profilefill', 'sound', 'sponsorfill', 'sponsor', 'upblock', 
      'weblock', 'weunblock', 'my', 'myfill', 'emojifill', 'emojiflashfill', 'flashbuyfill', 'text', 'goodsfavor', 'musicfill', 'card',
      'musicforbidfill', 'triangledownfill', 'triangleupfill', 'roundleftfill-copy', 'font', 'title', 'recordfill', 'record', 
      'cardboardfill', 'cardboard', 'formfill', 'coin', 'cardboardforbid', 'circlefill', 'circle', 'btn', 'attentionfavorfill',
      'loading2', 'attentionfavor', 'titles', 'icloading', 'full', 'mail', 'peoplelist', 'goodsnewfill', 'goodsnew', 'medalfill',
      'medal', 'newsfill', 'newshotfill', 'newshot', 'news', 'videofill', 'video', 'exit', 'skinfill', 'skin', 'moneybagfill', 'usefullfill',
      'usefull', 'moneybag', 'redpacket_fill', 'subscription', 'loading1', 'github', 'global', 'settingsfill', 'back_android', 'expressman',
      'evaluate_fill', 'play_forward_fill', 'group_fill', 'deliver_fill', 'notice_forbid_fill', 'fork', 'pick', 'wenzi', 'ellipse', 
      'qr_code', 'attentionforbid', 'dianhua', 'attentionforbidfill', 'icon'
    ],
    iconList: [
    ]
  },
  //页面初始化
  onLoad: function (options) {
    this.getIconList()
  },
  //监听页面上拉刷新
  onReachBottom: function () {
    this.getIconList()
  },
  //获取数据
  getIconList:function(){
    let length = this.data.list.length
    let iconLength = this.data.iconList.length
    if (length == iconLength) {
      return;
    }
    let array = this.data.list.slice(0, iconLength + 40)
    this.setData({ iconList: array })
  }
})