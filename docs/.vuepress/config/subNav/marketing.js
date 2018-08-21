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
        "color",    // 色彩
        "layout",   // 布局
        "font",     // 字体
        "element",  // 元素
      ]
    },
    {
      text : "组件",
      groupUrl : "component",
      children : [
        "/",         // 组件汇总 README.md
        "navigation",  // 导航
        "button",     // 按钮
        "hyperlink",  // 超链接
        "modal",      // 模态弹窗
      ]
    },
    {
      text : "动画",
      groupUrl : "animate",
      children : [
        "/",         // 动画汇总 README.md
        "base",       // 基础动画
        "special",    // 营销页特殊动画
      ]
    },
    "mobile",         // 移动端适配
    "resource",       // 资源
]

module.exports = marketingNavData;