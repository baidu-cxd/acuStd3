/**
 * @file console.js
 * @author wangyihan05@baidu.com
 */

consoleNavData = [
    "/" ,         // 概述 README.md
    {
      text : "设计原则",
      groupUrl : "principle",
      children : [
        "Layout",   // 布局
        "Color",    // 色彩
        "Font",     // 字体
        "Element",  // 元素
      ]
    },
]

module.exports = consoleNavData;
