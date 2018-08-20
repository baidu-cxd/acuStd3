/**
 * @file portal.js
 * @author wangyihan05@baidu.com
 */

portalNavData = [
    "/" ,          // 概述
    {
      text : "原则",
      groupUrl : "principle",
      children : [
        "/",          // 概述
        "Unified",   // 统一性
        "Artistic",   // 美观性
        "Intuitive",   // 直观性
      ]
    }, 
    {
      text : "风格",
      groupUrl : "styles",
      children: [
        "GridLayout", 
        "Img",    
        "Font",     
        "Color",    
        "Space",     
        "Icon",      
        "Shadow"
      ]
    },   
    {
      text : "页面",
      groupUrl : "pages",
      children : [
        "Product",     // 产品页
        "Solution"     // 解决方案页
      ]
    },
    {
      text : "其它",
      groupUrl : "others",
      children : [
        "DesignToken", // designToken
        "CMS",         // CMS 管理
        "IconFont",    // Iconfont
      ] 
    }
]

module.exports = portalNavData;