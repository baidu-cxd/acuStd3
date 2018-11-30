﻿---
title: 穿梭框（Transfer）
author: hwj
sidebarDepth: 0
---

# 穿梭框 Transfer

穿梭框用直观的方式在两栏中移动信息/数据元素，完成选择行为，根据使用逻辑及场景，分类如下：

[[toc]]

## 一、单向选择穿梭
适用于需选择的数据/信息源较多时，用户可直观的知道自己所选择的数据/信息的场景，一般左侧框为数据/信息源，右侧为已选数据/信息，被选中信息同时存在于2个框内。<mark>选择某一数据/信息时，除特殊场景（如选择的信息需要触发才可进行结果展示）则需要点击“添加”按钮操作外，一般使用直接选择即结果呈现逻辑。</mark>

说明：
1、数据/信息源为选择或取消选择逻辑，已选结果仅可被清除
2、点击选择区域建议为复选框范围，会涉及到不可点击等状态，可详见[复选框控件](/console/widget/CheckBox.html)
2、当未选择数据/信息时，添加按钮为禁用状态，鼠标hover提示不可点击原因“请先选择数据”
3、框内数据/信息一次展示条数建议范围在5～10条之间，数据过多加滚动条下滑展示更多

### 1、基础样式

**1.1直接选择即结果呈现样式**
点击选择全部框中的某一数据/信息，结果直接呈现在已选框内。 再次点击取消选择，已选框结果消失；点击结果“X”，结果清除，复选框恢复为未勾选状态。一般场景都推荐使用该样式

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/transfer/01.png)

**1.2选择后需触发即结果呈现样式**

点击选择全部框的某一数据/信息，需触发“添加”按钮，结果才会呈现在B框内。 其余逻辑和直接选择即结果呈现样式保持一致

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/transfer/02.png)

### 2、内容组合常见样式

除基本的样式外，穿梭框内内容还会涉及搜索、内容多列、多层级选择、全部选择等组合样式，其穿梭操作逻辑与基本样式一致，故不赘述

**2.1内容搜索**：当信息过多需要进行搜索查询的场景，可组合普通搜索框、分类搜索框等，具体可见[搜索框控件](/console/widget/Search.html)，需要全选操作时，可增加全部选择操作，使用样式如下：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/transfer/03.png)

**2.2 内容多列及多列搜索**：当全部信息/数据需要有多个字段的内容展示场景，建议内容为列表样式，且支持表头筛选、搜索等，具体可见列表控件，当需要全选操作时，全选操作建议跟随列表，放置在表头，使用样式如下：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/transfer/04.png)

**2.3 内容多层级**：当信息/数据具有层级关系时，选择后结果呈现与之对应的也具有层级关系，当选择最高层级时，所属它的子层级都为已选态，删除同理。使用样式建议如下：

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/transfer/05.png)

### 示例

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/transfer/06.png)


## 二、双向选择穿梭
数据/信息之间有对比关系的双向选择操作，且信息只允许展示在一个框内。

说明：
1、数据/信息源为选择或取消选择逻辑，已选结果仅可被清除
2、点击选择区域建议为复选框范围，会涉及到不可点击等状态，可详见[复选框控件](/console/widget/CheckBox.html)
2、当未选择数据/信息时，添加按钮为禁用状态，鼠标hover提示不可点击原因“请先选择数据”
3、框内数据/信息一次展示条数建议范围在5～10条之间，数据过多加滚动条下滑展示更多

### 1、基础样式

![图片](http://baiduyun-guideline.bj.bcebos.com/console/widget/transfer/07.png)

### 2、内容组合常见样式

和场景1一样除基本的样式外，内容还会涉及搜索、内容多列、多层级选择等组合样式，具体可参考
[单项选择穿梭的内容组合常见样式](/console/widget/Transfer.html#内容组合常见样式)，故不赘述