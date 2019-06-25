import {base} from '../utils/base.js'
export class login extends base{
  constructor(){
    super();
  }
  isLogin(callback){
    let token = wx.getStorageSync('token')
    if(token){
      return token
    }
    return callback();
  }
  authLogin(params,callback){
    wx.login({
      success:res=>{
        params['code'] = res.code
        this.request({
          url: 'weapp/v2/login',
          type: 'POST',
          data: params,
          sCallBack: (result) => {
            let cache = { token: result.data.token}
            wx.setStorageSync('token', cache)
            callback && callback(result)
          }
        })
      }
    })
  }
}