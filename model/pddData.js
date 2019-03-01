import {base} from '../utils/base.js'

export class pddData extends base{
  constructor(){
    super();
  }
  //获取分类列表
  getHome(param,callback){
    this.request({
      url: 'app/v1/pdd/getHomeInfo',
      type: 'POST',
      data: param,
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
  //获取平多多商品数据,参数page页码值，sort_type:排序方式,opt_id标签id，keyword搜索关键字
  getGoodsList(param,callback){
    this.request({
      url: 'app/v1/pdd/getPddData',
      type: 'POST',
      data: param,
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
  //获取商品详情
  getDeTail(param,callback){
    this.request({
      url: 'app/v1/pdd/getPddShareInfo',
      type: 'POST',
      data: param,
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
  //获取订单列表
  getOrderList(param,callback){
    this.request({
      url: 'app/v1/order/getPdd',
      type: 'POST',
      data: param,
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
  //获取订单详情
  getOrderDetail(param,callback){
    this.request({
      url: 'app/v1/order/getPddDetail',
      type: 'POST',
      data: param,
      sCallBack: (res) => {
        callback(res)
      }
    });
  }
}