/**
 * @file marketing.js
 * @author wangyihan05@baidu.com
 */

marketingNavData = [
    "/" ,         // 概述 README.md
    "layout",     // 布局
    "font",       // 字体
    "style",      // 风格
    {
      text : "组件",
      groupUrl : "component",
      children : [
        "/",         // 组件汇总 README.md
        "navigation",  // 导航
        "button",     // 按钮
        "hyperlink",  // 超链接
        "modal",      // 弹窗
        "tag",        // 角标
      ]
    },
    {
      text : "动画",
      groupUrl : "animate",
      children : [
        "/",         // 动画汇总 README.md
        "special",    // 营销页特殊动画
      ]
    },
    "mobile",                // 移动端适配
    "cloud-market-banner",   // 云市场 banner
    "resource",              // 资源
]

module.exports = marketingNavData;