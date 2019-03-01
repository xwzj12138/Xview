import { base } from '../utils/base.js'

export class userinfo extends base {
  constructor() {
    super();
  }
  //获取用户信息接口
  getUserInfo(callback){
    this.request({
      url: 'app/v1/member/myPage',
      type: 'POST',
      data: {},
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
  //设置用户信息
  setUserinfo(param, callback) {
    this.request({
      url: 'app/v1/member/upinfo',
      type: 'POST',
      data: param,
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
  //添加意见反馈
  addFeedback(param, callback) {
    this.request({
      url: 'app/v1/coupleBack/add',
      type: 'POST',
      data: param,
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
  //获取收货地址列表
  getAddressList(callback){
    this.request({
      url: 'app/v1/shippingAddress/get',
      type: 'POST',
      data: {},
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
  //获取地址详情
  getAddresDetail(param,callback){
    this.request({
      url: 'app/v1/shippingAddress/find',
      type: 'POST',
      data: param,
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
  //添加编辑地址
  addAddress(url,param,callback){
    this.request({
      url: url,
      type: 'POST',
      data: param,
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
  //删除地址
  delAddress(param, callback) {
    this.request({
      url: 'app/v1/shippingAddress/del',
      type: 'POST',
      data: param,
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
  //设置默认地址
  setDefaultAddress(param, callback) {
    this.request({
      url: 'app/v1/shippingAddress/setDefault',
      type: 'POST',
      data: param,
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
  //提现申请
  withdrawDeposite(param, callback){
    this.request({
      url: 'app/v1/member/withdrawDeposit',
      type: 'POST',
      data: param,
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
}