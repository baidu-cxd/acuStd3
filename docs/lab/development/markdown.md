---
title: Markdown 功能和语法开发
author: dz(wangyihan05@baidu.com)
---
# Markdown 功能和语法开发

有一些自定义的 Markdown 功能：

## 1. 行内颜色创建工具


<c :color="'#108cee'"/>   ,代码：` <c :color="'#108cee'"/> ` ;

<c :color="'rgba(0, 0, 0, .85)'" :type="'text'"/> , 代码： `<c :color="'rgba(0, 0, 0, .85)'" :type="'text'"/>` ;

<c :color="'rgba(255, 255, 255, 1)'" :type="'text-w'"/>, 代码 `<c :color="'rgba(255, 255, 255, 1)'" :type="'text-w'"/>`



## 2. 单色选择器

例子：
<color-copyer color="#108cee" text="标准色" />

代码：

    <color-copyer color="#108cee" text="标准色" />
    
### 1.如果是渐变色，添加一个 `color2` 的参数即可

<color-copyer color="#1EC5E7" color2="#0A65FF" text="主色对应渐变色" />

代码：

    <color-copyer color="#1EC5E7" color2="#0A65FF" text="主色对应渐变色" />

### 2.如果希望文字是深色的，那么添加一个 `dark` 参数即可

<color-copyer color="#f5f5f5" text="板块底色" type="dark"/>

代码：

    <color-copyer color="#f5f5f5" text="板块底色" type="dark"/>


## 3. Tab


<tab> 

### 第一个 tab

第一个 tab 对应的内容

### 第二个 tab

第二个 tab 对应的内容

### 第三个 tab

第三个 tab 对应的内容

</tab>




    
