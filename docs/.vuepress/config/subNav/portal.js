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
        "intuitive",   // 直观性
        "artistic",   // 美观性
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
      text : "组件",
      groupUrl : "component",
      children: [
        "base", 
        "form",  
        "button",    
        "hyperlink",
        "table"
      ]
    },  
    {
      text : "导航",
      groupUrl : "navgation",
      children: [
        "tag",  
        "sidebar",   
        "fastguid"  
      ]
    },  
    {
      text : "页面",
      groupUrl : "page",
      children : [
        "home",        // 首页
        "product",     // 产品页
        "solution"     // 解决方案页
      ]
    },
    "marketing",        // 风格
    "download",         // 下载
    {
      text : "其它",
      groupUrl : "others",
      children : [
        "dictionaries", // 设计字典
        "designtoken", // designToken
        "cms",         // CMS 管理
        "iconfont",    // Iconfont
      ] 
    }
]

module.exports = portalNavData;