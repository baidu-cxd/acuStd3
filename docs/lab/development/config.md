---
title: 导航的基本配置
author: dz(wangyihan05@baidu.com)
---
# 导航基本配置

规范网站的导航按不同的模块进行了分割，也就是 console 端设计规范和 portal 设计规范以及动画等规范的网站导航都在不同的文件中，这样便于后续的管理（原始的 vuepress 导航中，所有的导航都在一个文件里面，会让整个文件变得非常臃肿，很难找到）。

如果现在要创建一个新的规范，需要新建一个规范目录和完成相关的配置，请按下面的流程进行(<mark>以 portal 设计规范的创建为例</mark>)：

## 1. 在文件 `/docs/.vurpress/config/mainNavData.js` 中添加一个数据：

```js
  { 
    "text": "Portal 设计规范",   //新规范的名称
    "link": "/portal/" ,   //新规范的 url 链接，假如官网是 yunshe.design,那么这一篇规范的位置在 yunshe.design/portal/ 下
  },
```

## 2. 在文件在文件目录 `/docs/.vurpress/config/subNav` 下新建一个新规范的导航文件

导航的基本形式：

```js
const portalNavData = [ ]
module.exports = portalNavData;
```

一个完整的导航文件例子如下，基本的文章以字符串形式添加，如果文档是 README.md 只需要简写作 `"/"` 即可，存在子目录时候需要创建一个对象,并把子导航的内容写到 `children:[]` 中：

```js
labNavData = [
    "/" ,         // 概述 README.md
    {
      text : "开发者文档",
      groupUrl : "development", //子导航的目录
      children : [
        "config",   // 基本配置
        "markdown", // Markdown 插件和语法开发
      ]
    }
module.exports = labNavData;
```

## 3. 在文件在文件目录 `/docs` 下按照导航中设定的 url 建立文件结构和存放 markdown 文件

举例说，如果之前注册了一个目录在 `/portal/` 下的导航，那么就在 `/docs` 下建议一个文件夹叫 `portal`

## 4. 注册导航

（1）在文件 `/docs/.vurpress/config.js` 中添加刚才增加的导航 js 文件：

```js
const portalNavData = require('./config/subNav/portal.js')
```

（2）在文件 `/docs/.vurpress/config.js` 中添加 themeconfig 信息：

```js
module.exports = {
    themeConfig: {
        portalNav: portalNavData,
    }
}
```
