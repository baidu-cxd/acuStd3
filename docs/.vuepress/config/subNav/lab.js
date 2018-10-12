/**
 * @file lab.js
 * @author wangyihan05@baidu.com
 */

labNavData = [
    "/" ,         // 概述 README.md
    {
      text : "开发者文档",
      groupUrl : "development",
      children : [
        "config",   // 基本配置
        "markdown", // Markdown 插件和语法开发
      ]
    }
]

module.exports = labNavData;
