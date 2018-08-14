/**
 * @file marketing.js
 * @author wangyihan05@baidu.com
 */

marketingNavData = [
    "./" ,         // 概述
    "Page",        // 页面
    {
      text : "风格",
      children : [
        "Color",    // 色彩
        "Layout",   // 布局
        "Font",     // 字体
        "Element",  // 元素
      ]
    },
    {
      text : "组件",
      children : [
        "./",         // 组件汇总
        "Navgation",  // 导航
        "Button",     // 按钮
        "Hyperlink",  // 超链接
        "Modal",      // 模态弹窗
      ]
    },
    {
      text : "动画",
      children : [
        "./",         // 概述和基础动画
        "Navgation",  // 营销专用动画
      ]
    },
    "Mobile",         // 移动端适配
    "Resource",       // 资源下载
]

module.exports = portalNavData;