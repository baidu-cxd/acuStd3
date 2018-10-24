<!-- 小型颜色选择器组件 -->
<template>
  <span class="page-c">
    <transition name="tip">
      <div class="tip-text" v-if="isShowTip">{{tipText}}</div>
    </transition>
    <div class="color-content"
    :data-clipboard-text="color"
    @mouseenter="showTip()"
    @mouseleave="hiddenTip()"
    @click="changeTip()">
      <div class="color-block"
        :style="resolveStyle()">
        <p :style="resolveStyleP()">
          {{type === "text" || type === "text-w"  ? "A":" "}}
        </p>
      </div>
        {{color}}
    </div>
  </span>
</template>

<script>
export default {
  name: 'C',
  data() {
    return {
      isShowTip : false,
      tipText : "点击复制颜色"
    }
  },
  props: ['color','type'],
  methods: {
    resolveStyle () {
      let style = ' background-color: ' + this.color + ';'
      if (this.type === "text"){
        style = ' background-color: #fff;'
      } else if (this.type === "text-w"){
        style = ' background-color: #000;'
      }
      return style
    },
    resolveStyleP () {
      let style = ' color: ' + this.color + ';'
      return style
    },
    showTip() {
      this.isShowTip = true
      console.log(this.isShowTip)
    },
    hiddenTip() {
      this.isShowTip = false
      this.tipText = "点击复制颜色"
    },
    changeTip() {
      this.tipText = "已复制到粘贴板"
      if (this.isShowTip === false) {
        this.isShowTip = true
      }
      let t = setTimeout(() => {this.isShowTip = false}, 600);
    }
  },
  mounted() {
    import("clipboard").then(cb => {
      new cb.default(".color-content");
    });
  },
}
</script>

<style lang="stylus">
@import '../theme/v2/styles/tool'
@import '../theme/v2/styles/config'

.page-c
  .tip-text
    min-width 100px
    position absolute
    background-color rgba(0,0,0,1)
    color #fff
    font-size 12px
    text-align center
    left 7.5px
    bottom 100%
    transform translate(-50%,-8px)
    border-radius 2px
    &:after
      content " "
      display block
      width 0
      height 0
      border-width 8px 8px 0
      border-style solid
      border-color rgba(0,0,0,1) transparent transparent
      position absolute
      bottom 0
      left 50%
      transform translate(-50%,75%)
      


.page-c
  margin 0 2px
  position relative
  &:hover
    cursor pointer
  .color-content
    display inline-block
    position relative
    padding-left 1.25em
    .color-block
      @extend .v-middle
      display inline-block
      vertical-align middle
      left 0
      width 1.2em
      height 1.2em
      box-sizing border-box
      border 1px solid $border-color
      line-height 1.2em
      text-align center
      border-radius 2px
      &:active
        transform scale(1.05) translateY(-50%)
      p
        font-size 14px
        line-height 1.2em
        margin 0

//动画
.tip-enter-active.tip-text
  transition $time-std all $ease-in-out-std
.tip-leave-active.tip-text
  transition $time-std all $ease-in-out-std $delay-std
.tip-enter.tip-text
  opacity 0
  transform translate(-50%,-12px)
.tip-leave-to.tip-text
  transform translate(-50%,-12px)
  opacity 0
</style>


