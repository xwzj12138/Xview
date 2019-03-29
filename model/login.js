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
    return null;
  }
  authLogin(callback){
    wx.login({
      success:res=>{
        this.request({
          url: 'weapp/v1/login',
          type: 'POST',
          data: { "code": res.code },
          sCallBack: (result) => {
            let cache = { token: result.data.token, add_time: (new Date()).getTime() }
            wx.setStorage({
              key: 'token',
              data: cache,
            })
            callback && callback(res)
          }
        })
      }
    })
  }
}