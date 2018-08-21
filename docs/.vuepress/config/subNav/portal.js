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
        "unified",   // 统一性
        "artistic",   // 美观性
        "intuitive",   // 直观性
      ]
    }, 
    {
      text : "风格",
      groupUrl : "styles",
      children: [
        "gridLayout", 
        "img",    
        "font",     
        "color",    
        "space",     
        "icon",      
        "shadow"
      ]
    },   
    {
      text : "页面",
      groupUrl : "pages",
      children : [
        "product",     // 产品页
        "solution"     // 解决方案页
      ]
    },
    {
      text : "其它",
      groupUrl : "others",
      children : [
        "designToken", // designToken
        "cms",         // CMS 管理
        "iconfont",    // Iconfont
      ] 
    }
]

module.exports = portalNavData;