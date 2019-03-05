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
        "wayfinding" ,             
        "simplicity" ,            
        "consistency" ,          
        "proximity" ,            
        "feedback_mechanism"   
      ]
    },
    {
      text : "风格",
      groupUrl : "style",
      children : [
        "color" ,     
        "typography" ,    
        "icons" ,   
        "writing" 
      ]
    },
    {
      text : "组件",
      groupUrl : "widget",
      children : [
        "button",      
        "list",     
        "placeholder",     
        "introduction",      
        "chart",      
        "collection",     
        "pagination",     
        "link",      
        "input",      
        "switch",      
        "time",      
        "stepper",     
        "upload",      
        "select",     
        "radio",      
        "checkbox",     
        "dropdown",     
        "slider",     
        "search",    
        "menu",     
        "tabs",      
        "steps",     
        "loading",      
        "toast",      
        "modal",     
        "drawer",      
        "tips",      
        "badge",
        "transfer"     
      ]
    },
    {
      text : "布局",
      groupUrl : "layout",
      children : [
        "summarize",
        "console",
        "introduction",  
        "overview", 
        "list_page", 
        "details",
        "create",  
        "picture_preview"
      ]
    },
    {
      text : "反馈",
      groupUrl : "feedback",
      children : [
        "feedback_review",      
        "message_prompt",      
        "process_feedback",      
        "result_feedback"
      ]
    },
    'check',
    'external-link-products',
    'download'
]

module.exports = consoleNavData;
