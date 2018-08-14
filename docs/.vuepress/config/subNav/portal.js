/**
 * @file portal.js
 * @author wangyihan05@baidu.com
 */

portalNavData = [
    "/" ,          // 概述
    "DesignToken", // designToken
    "CMS",         // CMS 管理
    "IconFont",    // Iconfont
    {
      text : "风格",
      groupUrl : "Style",
      children : [
        "Color",   // 色彩
        "Text"    // 文字
      ]
    }
]

module.exports = portalNavData;