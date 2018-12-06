# CMS 样式走查: 移动端

[[toc]]

## 走查情况统计

::: warning 全局建议

预览移动端效果的时候建议隐藏滚动条，并应该模拟移动端滑动手势操作

:::


|序号| 页面板块 | 走查情况 |
|--| -- | -- |
|1  |W-基础-010-B     | 5 个问题 |
|2  |W-基础-009       | 2 个问题 |
|3  |W-基础-010-A     | 同 W-基础-010-B 略 |
|4  |W-基础-011       | 这个样式没有预览 |
|5  |W-基础-008       | 3 个问题 |
|6  |W-基础-007       | 2 个问题 |
|7  |W-基础-006       | 2 个问题 |
|8  |W-基础-005       | 同  上   |
|9  |W-基础-004       | 3 个问题 |
|10 |W-基础-003-B     | 1 个问题 |
|11 |W-基础-008-A1    | 1 个问题 |
|12 |W-基础-007-B1    | 2 个问题 |
|13 |W-基础-003-A     | 1 个问题 |
|14 |W-基础-002       | 3 个问题 |
|15 |W-通用-011号-A1   | 其它问题 |
|16 |W-通用-010号-A1   | 没问题|
|17 |W-通用-009号-B1   | 1 个问题 |

## [0] 一个全局问题

所有出现了 <img> 标签的位置都产生了多余的间距，应该是 inline-block 属性产生的，建议所有图片都设置成 block（或者别的解决方法也行）

## [1] W-基础-010-B 

#### 1.1 板块内间距不对

板块内间距（padding）数值错误

::: danger 注意

所有的样式代码选择器都省略了 `@media (max-width: 780px)`

:::

```less

.group .section-container .item {
    padding: 30px 20px; // 不是 40px 和 15px
}

```

#### 1.2 相关参数组件的宽度不对

相关参数组件的宽度不可写作 `100px` ，应该是 `1/n * 100%` 以三项为例子:

```less

[ui-type="V5B010B"] .group .section-container .item .parameter {
    width: 33.3%; // 因为是 3 项
}

```

#### 1.3 相关参数灰色小字的字号不对

不应该是 `16px`  应该是 `14px`

```less

[ui-type="V5B010B"] .item .detail .parameter .name {
    font-size: 14px;
}

```

#### 1.4 卡片的高度错误

不是 `414px` 是 `374px`

```less

[ui-type="V5B010B"] .group .section-container .item {
    height: auto; //其实让内容自己撑出来高度也行 or 374px
}

```

#### 1.5 卡片下的 status 组件位置不对

位置不对，具体看代码好了

```less

[ui-type="V5B010B"] .card-status {
    margin: 30px auto 60px; //控制间距
    height: 6px; //控制高度
}

.card-status .dot {
    vertical-align: top; //把点移动进来
}

```

## [2] W-基础-009 

#### 2.1 卡片下的 status 组件位置不对

同问题 1.5

#### 2.2 按钮的样式不对

如图

![img](http://baiduyun-guideline.cdn.bcebos.com/test/9.png)

```less

[ui-type="V5B009"] .section-container .col .item .btn-wrap button {
    border: none;
    padding: 0;
    height: 26px;
    color: #108cee;
}

```

## [5] W-基础-008 

#### 5.1 移动端样式间距不对

均为 20px

```less

[ui-type="V5B008"] .section-container .col .item .title {
    padding: 20px;
}

```

#### 5.2 移动端样式没有 icon

禁用掉 icon 顺便清除文字的 padding-left

#### 5.3 status 问题，同 2.1

## [6] W-基础-007

#### 6.1 status 问题

同 2.1

#### 6.2 标题文字间距错误

```less

[ui-type="V5B007"] [ui-type="v5-tags-content"] article h4 {
    margin: 0 20px 0;
}

```

## [7] W-基础-006 

#### 7.1 tab 宽度错误

tab 下面的横条宽度为 20px

#### 7.2 article 类宽度不对

内边距为 20px 

```less

[ui-type="V5B006"] [ui-type="v5-tags-content"] section article {
    width: auto !important;
    padding: 20px; // 用 padding 来计算宽度就行了
}

```

## [8] W-基础-005

## [9] W-基础-004 

#### 9.1 页面文本区域顶内间距不对

```less

[ui-type="V5B004"] [ui-type="v5-tags-content"] {
    padding-top: 10px;
}

```

#### 9.2 tab 横条宽度

tab 下面的横条宽度为 20px

#### 9.3 没有圆点

不需要小圆点

```less

[ui-type="V5B004"] [ui-type="v5-tags-content"] ul {
    margin-left: 0;
    list-style-type: none; 
}

```

## [10] W-基础-003-B

#### 10.1 tab 问题

tab 小横条宽度为 20px

## [11] W-基础-008-A1

#### 11.1 图片宽度微调

微调下图片宽度

```less

[ui-type="V5G008A"] img {
    max-width: 200px; // 原 206
}

```

## [12] W-基础-007-B1

#### 12.1 内容文本上间距有问题

```less 

[ui-type="V5G007B"] .center .item .desc {
    margin-top: 20px; // 不是 30 px
}

```

#### 12.2 卡片高度不对

按钮已经超出边界了，请保证卡片足够高，按钮到底部有 20px 间距

## [12] W-基础-003-A

#### 12.1 还是 tab

tab 横线宽度 20px

## [13] W-基础-003-A

#### 13.1 tab 下的小横线

tab 横线宽度 20px


## [14] W-基础-002

#### 14.1 tab 下的小横线漏掉了

tab 横线宽度 20px

#### 14.2 容器位置不对

不知道怎么描述，看代码好了

```less

[ui-type="V5B002"] .group .section-container [ui-type="v5-tags-content"] {
    margin-top: 40px; // 不是35px
}

```
#### 14.3 文字的间距不对

不是 `14px` 是 `10px`

```less

[ui-type="V5B002"] [ui-type="v5-tags-content"] article p {
    margin: 10px 0;
}

```

## [15] W-通用-011号-A1

有一个疑问，不同尺寸下的视频封面大小不同，那么资源应该怎么准备？

关于这个视频卡片的问题建议咨询下这个板块的设计师

## [16] W-通用-010号-A1

恭喜，没问题

## [17] W-通用-009号-B1 

这里的问题和 pc 端一样，这里的图片尺寸是 60px

```less

[ui-type="V5G009B"] .svg {
    background-size: 60px 60px;
    width: 60px;
    height: 60px;
}

```