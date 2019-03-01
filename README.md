XView小程序组件库
===============

XView小程序组件库本着简单易用的原则封装组件，使用时只需要在json配置文件中引用即可

 + 基于微信小程序自定义组件封装
 + 核心功能组件化
 + 简化使用

详细开发文档正在编写中

## 目录结构

初始的目录结构如下：

~~~
XView  项目目录
├─model           模型层
│  ├─login.js       登录案例
│
├─packages        组件层
│  ├─avatar         头像组件
│  ├─button         按钮组件
│  └─cell           单元格组件
│  └─cell-group     单元格父组件
│  └─count-down     倒计时组件
│  └─grid-group     九宫格父组件
│  └─grid-item      九宫格组件
│  └─icon           图标组件
│  └─index          索引选择器
│  └─input          输入框组件
│  └─input-number   数字组件
│  └─loading        加载提示
│  └─nav            标签栏组件
│  └─notice-bar     通告栏组件
│  └─rate           评分组件
│  └─search         搜索组件
│  └─steps          步骤条组件
│  └─switch         开关组件
│  └─upload         上传图片组件
│
├─pages           视图层
│
├─static          资源文件
├─utils           请求封装
│  └─base.js         请求基类
│  └─config.js       配置文件
├─app.js          应用入口
├─app.json        全局配置文件
├─app.wxss        全局css文件
~~~

> 部分组件在安卓机上会有所差异，为了适配安卓，请在app.wxss中加入如下代码
~~~
::-webkit-scrollbar {
  display: none;
}
~~~
更多细节参阅 [LICENSE.txt](LICENSE.txt)
