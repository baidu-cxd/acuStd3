# CMS 样式走查

[[toc]]



## 走查情况统计

|序号| 页面板块 | 走查情况 |
|--| -- | -- |
|1  |W-基础-010-B | 共 6 个问题 |
|2  |W-基础-009   | 共 3 个问题|
|3  |W-基础-010-A | 共 3 个问题|
|4  |W-基础-011   | 不能看到效果，无法走查|
|5  |W-基础-008   | 共 4 个问题|
|6  |W-基础-007   | 共 3 个问题|
|7  |W-基础-006   | 共 5 个问题|
|8  |W-基础-005   | 问题同上，不再赘述|
|9  |W-基础-004   | 问题同上，tab，不再赘述|
|10 |W-基础-003-B | 问题同上，tab，不再赘述|
|11 |W-基础-008-A1| 共 2 个问题|
|12 |W-基础-007-B1| 共 1 个问题|
|13 |W-基础-003-A | 共 2 个问题|
|14 |W-基础-002   | 共 2 个问题|
|15 |W-通用-011号-A1   | 共 1 个问题|
|16 |W-通用-010号-A1   | 共 1 个问题|
|17 |W-通用-009号-B1   | 共 2 个问题|

## 1 W-基础-010-B

### 页面样式

**1.1 优化：** 需要添加卡片 hover 的缓动函数

``` less

@ease-in-out-std = cubic-bezier(.645, .045, .355, 1)	
 
transition: .4s box-shadow @ease-in-out-std 

```

关于缓动函数的详情，可以查询设计文档：[设计规范/缓动函数](https://v3.yunshe.design/animate/time.html#%E7%BC%93%E5%8A%A8%E5%87%BD%E6%95%B0)

所有常见设计样式的集合：[设计规范/Design Token](https://v3.yunshe.design/portal/others/designtoken.html)



**1.2 优化：** 按钮需要添加 hover 样式和缓动函数

``` less

& {
    @ease-in-out-std = cubic-bezier(.645, .045, .355, 1)	
    transition: .4s background @ease-in-out-std 
    &:hover { 
        background: #209BFD;
    }
}

```

**1.3 BUG：** 相关参数应该是 `14px` 而不是 `16px`

``` less

[ui-type="V5B010B"] .item .detail .parameter {
    font-size: 14px;
}

```

**1.4 BUG** 卡片内 `.parameter` 类间距错误

<div class= "nowpage-r">

![img](http://baiduyun-guideline.cdn.bcebos.com/test/Snip20181205_40.png)

</div>

**1.5 BUG** 如果有 5 项相关参数，卡片的高度不正确

 `[ui-type="V5B010B"] .col-4` 的 `height` 参数不应该写定值，应该根据当前板块下相关参数最多的卡片计算得到，计算公式：

 ``` 

  height = 293 + 相关参数个数 * 80

 ```

注意，需要保证同一个板块内所有的卡片高度一致
同时，无论有几个相关参数，按钮和价格的位置都必须对齐到卡片底部（到底部距离恒定为 40px）

``` less

[ui-type="V5B010B"] .item .btnWrap {
    position: absolute;
    bottom: 40px;
    // 省略横向剧中代码参考
    // 省略价格组件的代码参考，同理即可
}

```

**1.5 BUG** 价格高度不对 

```less
   
    [ui-type="V5B010B"] .item .price {
        height: 58px;
    }

```

### CMS 系统内

**1.6 优化：** 默认文本删除 “起” 字，容易误导，渲染出的实际页面会有 2 个 起字

<div class= "nowpage-r">

![img](http://baiduyun-guideline.cdn.bcebos.com/test/Snip20181205_39.png)

</div>


## 2 W-基础-009

**2.1 BUG :** 切换列数无效

CMS 系统内切换样式到 5/6 列无效

**2.2 优化** 添加切换动画

``` less

    [ui-type="V5B009"] .col-4 .current {
        margin-top: 20px;
        transform: translateY(-20px); //大卡片位移 20px
    }

    @ease-out-std: cubic-bezier(.215, .61, .355, 1)

    [ui-type="V5B009"] .col-4 .item {
        transform: translateY(0); //小卡片反向位移 20px
        transition: .4s transform @ease-out-std;
    }

```

**2.3 优化** 按钮添加 hover 效果

``` less 
    &:hover {
        background: #108cee;
        color: #fff;
        border: #108cee;
    }
    // 省略缓动函数，需要添加缓动函数，同前
```

## 3 W-基础-010-A 

**3.1 bug** 切换列数无效

**3.2 优化** 添加卡片阴影缓动函数，同 1.1

**3.2 优化** 添加按钮 hover 样式，同 1.2

**3.3 BUG** 价格高度不对

``` less

[ui-type="V5B010A"] .item .price {
    height: 56px;
}

```

## 4 W-基础-011

看不到效果，无法走查

## 5 W-基础-008 

**5.1 BUG** 切换项数无效

**5.2 优化** 添加卡片切换动画，类似 2.2

**5.3 BUG** 选中状态投影位置 bug

``` less
    [ui-type="V5B008"] .col-4 .current {
        position: relative;
        z-index: 10; //投影被盖住了给它前移下
    }
```

**5.4 设计稿问题** 所有左侧 padding 设计稿失误

``` less
    [ui-type="V5B008"] .current .title {
        padding: 20px 30px; //并不是 34px 这里是设计稿的问题
    }
    [ui-type="V5B008"] .current .content {
        // 同上
    }

```

## 6 W-基础-007

**6.1 BUG** tab 小横线长度为 20px

``` less 
    [ui-type="v5-tags-box"] .current .border {
        width: 20px;
    }

```

**6.2 优化** tab 需要添加文字 hover 颜色

hover 颜色 #209BFD

也需要添加缓动函数，同上

**6.3 BUG** 内间距分布错误

``` less
    [ui-type="V5B007"] [ui-type="v5-tags-content"] {
        padding: 20px; //这里不是 30px
    }
    [ui-type="V5B007"] [ui-type="v5-tags-content"] article {
        margin-top: 20px; // 这里不是 10px
    }
```

## 7 W-基础-006

**7.1 优化** tab 需要添加 hover 样式，同 6.2

**7.2 BUG** tab 横线长度不争取，同 6.1，为 20px

**7.3 BUG** tab 到内容的间距是 40px

``` less
    [ui-type="V5B006"] [ui-type="v5-tags-content"] section {
        padding-top: 40px; //[ui-type="V5B005"] [ui-type="v5-tags-content"] section, [ui-type="V5B006"] [ui-type="v5-tags-content"] section 都一样
    }

```

**7.4 优化** hover shadow 需要添加缓动函数，同 1.1

**7.5 BUG** 文字没有底 margin

```less
    [ui-type="V5B006"] [ui-type="v5-tags-content"] article p {
        margin-bottom: 0px;
    }
```

## 8 W-基础-005

问题同上

## 9 W-基础-004

同上 tab

## 10 W-基础-003-B 

tab ，同上

## 11 W-基础-008-A1

**11.1 BUG** 图片宽度不对

```less
    [ui-type="V5G008A"] img {
        max-width: 200px; // 不是 206px
    }
```
**11.2** 统一一下 shadow 缓动函数
同 1.1

## 12 W-基础-007-B1

**12.1 BUG** 详细文案的左右宽度不对

```less
    [ui-type="V5G007B"] .center .item .desc {
        margin: 30px 30px 10px; // 左右增加 30px间距
    }
```

## 13 W-基础-003号-A

**13.1** tab hover 添加缓动函数，同前

**13.2** 文本链接样式不对

```less
    [ui-type="V5B003A"] .tags-content section a button {
        border: none;
        width: auto;
        color: #108cee;
        height: 26px;
        &:hover {
            text-decoration: underline;
        }
    }
```

## 14 W-基础-002号

**14.1 优化** tab hover 缓动函数，同上

**14.2 BUG** p 标签间距错误

```less

    [ui-type="V5B002"] .tags-content article p {
        margin: 10px 0;
    }

```

## 15 W-通用-011号-A1

**15.1** 统一缓动函数即可

## 16 W-通用-010号-A1 

**16.1** 统一缓动函数即可

## 17 W-通用-009号-B1

**17.1** 统一缓动函数

**17.2 BUG** 图片尺寸问题

这里的图片是 60px 而不是 32px + 间距

```less

[ui-type="V5G009B"] .svg {
    background-size: 64px 64px;
    width: 64px;
    height: 64px;
    margin: 0;
}

```

<style>
  .article  .nowpage-r img {
     width:300px;
  }
</style>