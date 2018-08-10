/**
 * @file config.js
 * @author wangyihan05@baidu.com
 */

//Markdown 配置文件
const markdownConfig = require('./config/markdownConfig.js')


//页面顶部导航配置文件
const navData = require('./config/navData.json')


//页面侧边导航配置文件
var sidebarData = require('./config/sidebarData.json')


module.exports = {
    title: '百度云设计规范',
    description: '百度云设计规范',
    base:'/',
    themeConfig: {
      edition: 'v2',
      nav: navData,
      sidebar: sidebarData,
      logo: 'http://baiduyun-guideline.bj.bcebos.com/public%2Fcxd.svg', 
      logoWhite: 'http://baiduyun-guideline.bj.bcebos.com/public%2Fcxdw.svg', // logo 反白稿
      favicon: '',
    },
    markdown: markdownConfig,
    /* head: [
      ['script', {}, `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:927245,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`]
    ] */
}
