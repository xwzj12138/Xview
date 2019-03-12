XView小程序组件库
===============

XView小程序组件库本着简单易用的原则封装组件，使用时只需要在json配置文件中引用即可

 + 基于微信小程序自定义组件封装
 + 核心功能组件化
 + 简化使用

详细文档:http://xview.weapp.xwzj88.cn
大家可以直接下载demo查看,内有各个组件的使用案列

##  体验
使用微信扫一扫体验小程序组件示例
![小程序体验二维码](https://raw.githubusercontent.com/xwzj12138/Xview/master/static/weapp_qr_code.jpg)

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

## 使用案列

#### 单元格cell使用

*   添加需要的组件。在页面的json中配置：
~~~
{
  "usingComponents": {
    "x-cell":"/packages/cell/index",
    "x-cell-group": "/packages/cell-group/index",
    "x-icon": "/packages/icon/index",
    "x-switch": "/packages/switch/index"
  }
}
~~~
*   在 wxml 中使用组件：
~~~
<x-cell-group>
  <x-cell menuArrow='{{true}}' title='测试1' value='ceshi1' linkType='switchTab' url='/pages/pdd/home/index'></x-cell>
  <x-cell menuArrow='{{true}}' title='测试2' value='ceshi2'><x-icon slot="icon"></x-icon></x-cell>
  <x-cell menuArrow='{{true}}' title='测试3' label='测试cell描述信息' value='ceshi3'><x-icon slot="icon" color='#39b54a' name='phone'></x-icon></x-cell>
  <x-cell menuArrow='{{true}}' title='测试3' label='测试cell描述信息'>
    <x-icon slot="icon" name='emoji' color='#e03997'></x-icon>
    <x-switch value='{{switch1}}' slot="footer" bindchange='setSwitch'>
      <x-icon slot="open" name='check' color='#fff' size='36'></x-icon>
      <x-icon slot="close" name='close' color='#fff' size='36'></x-icon>
    </x-switch>
  </x-cell>
</x-cell-group>
~~~
*   属性说明

| 参数        | 说明   |  可选值  |
| --------    | -----:  | :----:  |
| menuArrow   | 是否已卡片形式展现 |   true，false    |
| title       | 左侧标题   |   任意值   |
| value       | 右侧说明    |  任意值  |
| linkType    | 链接类型    |  navigateTo，redirectTo，switchTab，reLaunch  |
| label       | 标题下方的描述信息    |  任意值  |
| url         | 跳转链接    |  必须在app.json文件中配置  |

*   可传入组件

| 组件名        | 说明   |  可选值  |
| --------    | -----:  | :----:  |
| icon        | 设置头部图标 |   可参考icon组件    |
| footer       | 设置尾部内容 |   其他组件   |


更多细节参阅 [LICENSE.txt](LICENSE.txt)
