---
title: 外链产品设计规范
sidebarDepth: 0
---

# 外链产品设计规范

[[toc]]

## 适用范围

本规范适用范围：百度云控制台主导航点击跳转到外部的产品，或不上云但对云部分公共功能进行复用型产品。（统一简称：外链产品）

本规范约束内容：外链产品在界面层面的设计规范。

## 规则

<div id="img-wrp">

![图片](https://baiduyun-guideline.bj.bcebos.com/console/external-link-products/1_2x.png)

</div>


## 产品不上云，但使用云的账号体系及公共功能

#### ⒈使用云公共功能首先需要账号打通，可采用百度云标准登录页或项目登录页样式登录：

百度云标准登录页面示意（需前端同学将登录后页面指向回原项目网站）：

![图片](https://baiduyun-guideline.bj.bcebos.com/console/external-link-products/2_2x.png)

百度云独立项目登录页面示意：

![图片](https://baiduyun-guideline.bj.bcebos.com/console/external-link-products/3_2x.png)

#### 2.复用百度云的公共功能，需要保持名称一致:

![图片](https://baiduyun-guideline.bj.bcebos.com/console/external-link-products/4_2x.png)

## 产品上云，点击跳转到外部

（目前：备案、物联网系列产品属于此类）

因产品入口位于百度云产品导航，整体风格建议与百度云相近，具体要求如下：

1. 点击控制台导航内产品名称，<mark>新开浏览器页签</mark>，展示产品内容。
2. <mark>支持跳转回百度云</mark>（详见下方说明图）。
3. 产品框架要采用与百度云相同的左右结构。内容风格参考[百度云console规范](http://yunshe.design/console/)
4. 产品logo/名称位置：（详见说明图）提供AB方案，由产品方自主选择。

#### 参考方案A：产品名在百度云logo右侧

![图片](https://baiduyun-guideline.bj.bcebos.com/console/external-link-products/5_2x.png)

#### 参考方案B：产品名在百度云logo下方

侧边栏收起后因宽度限制，需缩减内容不多于2个字符，或1个logo图形。

![图片](https://baiduyun-guideline.bj.bcebos.com/console/external-link-products/6_2x.png)

## 产品上云，点击在云控制台内展示

因在百度云内部，需保证主框架的高度统一性。

![图片](https://baiduyun-guideline.bj.bcebos.com/console/external-link-products/7_2x.png)

#### 反面案例

<mark>问题1：产品界面风格与百度云控制台规范不符</mark>

![图片](https://baiduyun-guideline.bj.bcebos.com/console/external-link-products/8_2x.png)

<mark>问题2：导航内容与百度云控制台其他产品不一致</mark>

![图片](https://baiduyun-guideline.bj.bcebos.com/console/external-link-products/9_2x.png)


<style>
  #img-wrp img {
      max-width: 608px;
  }
</style>