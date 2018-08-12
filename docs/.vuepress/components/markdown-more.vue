<template>
  <div class="page-markdown-more">
    <transition name="more"> 
      <div v-show="isShowMore" class="more-content">
        <slot></slot>
      </div>
    </transition> 
    <div 
      :class="[isShowMore ? 'more':'not-more','control']"
      @click="toggle()">
      {{isShowMore ? '收起内容 ' :'了解更多 '}} <i class="iconfont icon-youjiantou" style="font-size:12px;"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowMore : false
    }
  },
  methods: {
    toggle() {
      this.isShowMore =! this.isShowMore
    }
  }
}
</script>

<style lang="stylus">
@import '../theme/v2/styles/config'
  .page-markdown-more
    .more-content
      padding 0
      margin -10px 0 0 0 
    .control
      margin-top 10px
      width 120px
      height 28px
      font-size 14px
      line-height (28 - 2)px
      transition $longt
      box-sizing border-box
      color $link-color 
      &:hover
        cursor pointer
        color $link-color 
        line-height (28 - 2)px
      i 
        display inline-block
        transition $transition-std $delay-long
      &.not-more
        margin-top 10px
        i 
          transform rotate(0) translateY(-1px)
      &.more
        i 
          transform rotate(-90deg) translateX(1px)

//动画

.more-enter-active, .more-leave-active
  transition $time-long
.more-enter
  opacity 0
  transform translateX(-10px)
.more-leave-to
  transform translateX(10px)
  opacity 0
</style>


