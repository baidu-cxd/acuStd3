/**
 * @file lab.js
 * @author wangyihan05@baidu.com
 */

labNavData = [
    "/" ,                   // 概述 README.
    "line_height" ,         // 行高生成器
    "color_maker" ,         // 临近颜色生成器
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
