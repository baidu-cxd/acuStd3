/**
 * @file marketing.js
 * @author wangyihan05@baidu.com
 */

marketingNavData = [
    "/" ,         // 概述 README.md
    "Page",        // 页面
    {
      text : "风格",
      groupUrl : "styles",
      children : [
        "Color",    // 色彩
        "Layout",   // 布局
        "Font",     // 字体
        "Element",  // 元素
      ]
    },
    {
      text : "组件",
      groupUrl : "component",
      children : [
        "/",         // 组件汇总 README.md
        "Navgation",  // 导航
        "Button",     // 按钮
        "Hyperlink",  // 超链接
        "Modal",      // 模态弹窗
      ]
    },
    {
      text : "动画",
      groupUrl : "animate",
      children : [
        "/",         // 动画汇总 README.md
        "Base",       // 基础动画
        "Special",    // 营销页特殊动画
      ]
    },
    "Mobile",         // 移动端适配
    "Resource",       // 资源
]

module.exports = marketingNavData;