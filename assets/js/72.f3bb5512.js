(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{366:function(t,a,r){"use strict";r.r(a);var e=r(1),i=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"content"},[t._m(0),r("p",[t._v("色彩实验室用于探究各种不同颜色和 UI 组件之间的关系。")]),t._m(1),r("p",[t._v("我们假设一个颜色的 hover/active 颜色的创建是有规律的，如果找到这个规律，就可以简单地创建某个颜色对应的 hover 和 active 样式")]),t._m(2),r("p",[t._v("基于 HSV 色彩空间，提亮颜色主要对色彩向量 V（Value／明度）进行控制，佐以微调 S（ Saturation 饱和度）")]),r("markdown-more",[r("div",{staticClass:"p-raw"},[r("div",{staticClass:"p-col col-1-in-2 "},[r("h4",{attrs:{id:"减淡颜色："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#减淡颜色：","aria-hidden":"true"}},[t._v("#")]),t._v(" 减淡颜色：")]),r("ol",[r("li",[r("p",[t._v("提高 20% 明度")])]),r("li",[r("p",[t._v("如果明度溢出，溢出的部分乘以 0.5 然后用于降低饱和度")])]),r("li",[r("p",[t._v("额外降低 1% 饱和度")])])])]),r("div",{staticClass:"p-col col-1-in-2 "},[r("h4",{attrs:{id:"加深颜色："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#加深颜色：","aria-hidden":"true"}},[t._v("#")]),t._v(" 加深颜色：")]),r("ol",[r("li",[r("p",[t._v("降低 15% 明度")])]),r("li",[r("p",[t._v("如果明度溢出，溢出的部分乘以 0.5 然后用于提高饱和度")])]),r("li",[r("p",[t._v("额外提高 1% 饱和度")])])])])]),r("p",[t._v("如果对算法是怎么产生的有疑问，请移步文章底部的 "),r("a",{attrs:{href:"#%E7%AE%97%E6%B3%95%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98%E8%A7%A3%E9%87%8A"}},[t._v("算法相关问题解释")])])]),r("color-maker"),t._m(3),r("p",[t._v("下面是一些关于算法细节的推导和说明，如果只是使用者，不需要了解这些。但是如果你想要了解更多，或者有什么疑问，可以参考：")]),r("markdown-more",[r("h4",{attrs:{id:"_1-为什么要修改饱和度："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么要修改饱和度：","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 为什么要修改饱和度：")]),r("p",[t._v("颜色的鲜艳度其实是受到明度和饱和度双方影响的，仅仅增加明度会让颜色看起来显得过鲜艳，仅仅降低明度会让颜色看起来显得不够鲜艳,因此对它进行了一些反向的修正。")]),r("blockquote",[r("p",[t._v("这是因为 HSV 中 V 的定义是从黑色到选择颜色的色彩范围，也就是说 V 变大，颜色会更接近选择的颜色，也就是饱和度越高,相反，V 越小则颜色越接近黑色，饱和度越低")])]),r("h4",{attrs:{id:"_2-为什么加深和减淡的比例是不同的："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么加深和减淡的比例是不同的：","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 为什么加深和减淡的比例是不同的：")]),r("p",[t._v("有两个原因:")]),r("ol",[r("li",[r("p",[t._v("在 HSV 色彩空间中，V = 1 的时候颜色依然是选取的颜色，而不是纯白色，必须要降低饱和度 S 才能让颜色变成白色，换句话说，V 对于让颜色变得更接近白色的能力有限，（但是降低 V\n能让颜色达到全黑）我们应该通过强化减淡以应对这种情况")])]),r("li",[r("p",[t._v("我们主要在 hover / active 状态使用这两个颜色，当 hover 时，颜色变亮了一定的比例，如果 active 时颜色再变暗相同数值，就相当于在 hover 时的颜色上降低两倍的明度，对比度会更大")])])]),r("h4",{attrs:{id:"_3-为什么把溢出的数值用来修改饱和度："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么把溢出的数值用来修改饱和度：","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 为什么把溢出的数值用来修改饱和度：")]),r("p",[t._v("上面已经说到，在 HSV 色彩空间中，S 和 V 都具有调节颜色明亮程度的能力，而且 V 能控制的范围其实是有限的，如果我们想让颜色看起来更亮一点，而又达到了 V 所能控制的极限，让 S 来承担溢出的部分是合理的")]),r("p",[t._v("但是为什么 S 承接的溢出的数值的比例是 0.5 就是通过视觉检查的方式实验出来的。如果你对这里的算法有更好的建议，可以告诉我")]),r("h4",{attrs:{id:"_4-为什么不使用-hsl-色彩空间："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-为什么不使用-hsl-色彩空间：","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 为什么不使用 HSL 色彩空间：")]),r("p",[t._v("我们知道 W3C 在 CSS3 规定中声称：HSL 的优点是它对称于亮与暗，也就是在 HSL 色彩空间中，L 能够独立控制颜色从黑色到白色的完整色彩范围，那么似乎我们就只用控制 L 就可以让颜色看起来更暗或者更亮了。")]),r("p",[t._v("但是其实从视觉的角度上说，并非如此。如果我们说 ： 我们想让颜色看起来亮一点，那么其实我们是希望颜色尽可能保持其鲜艳程度，而不是变得更白。")]),r("p",[t._v("所以如果我们要用 HSL 色彩空间来控制颜色，我们依然需要对 S（饱和度） 向量进行修正，这样的话，其实公式会和现在的情况一样复杂。")]),r("p",[t._v("另一个原因是大多数的设计软件都是优先推荐使用 HSV 色彩空间的，我认为这种色彩空间还是更佳符合人的直觉，和设计师的工作习惯。")])])],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"色彩实验室"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#色彩实验室","aria-hidden":"true"}},[this._v("#")]),this._v(" 色彩实验室")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"自动-hover／active-风格实验室"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动-hover／active-风格实验室","aria-hidden":"true"}},[this._v("#")]),this._v(" 自动 hover／active 风格实验室")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"算法规定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法规定","aria-hidden":"true"}},[this._v("#")]),this._v(" 算法规定")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"算法相关问题解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法相关问题解释","aria-hidden":"true"}},[this._v("#")]),this._v(" 算法相关问题解释")])}],!1,null,null,null);i.options.__file="color_maker.md";a.default=i.exports}}]);