<template>
  <div :class="['nav-controller', 
  isNavHidden? 'controller-hidden':'controller-open']" 
  @click="$emit('toggle-nav')">
    <transition name="humberger" mode="out-in">
      <div v-if="!isNavHidden" 
        class="humberger humberger-open">
          <span class="hum1"></span>
          <span class="hum2"></span>
          <span class="hum3"></span>
        </div>
      <div v-if="isNavHidden" 
        class="humberger humberger-hidden">
          <span class="hum1"></span>
          <span class="hum2"></span>
          <span class="hum3"></span>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'NavController',
  props: ['isNavHidden']
}
</script>


<style lang="stylus">
@import 'styles/config'
.nav-controller
  width 32px
  height 32px
  position fixed
  top 34px
  z-index 101
  &.controller-open
    left 200px
    transition $time-std left $ease-out-std $delay-std 
  &.controller-hidden
    transition $time-std left $ease-out-std $delay-long 
    left 20px
  .humberger
    position absolute
    top 0
    left 0
    width 100%
    height 100% 
    &:hover
      cursor pointer
    .hum1, .hum2, .hum3
      display block
      width 16px
      height 1px
      background-color $action-color
      transition $time-std all $ease-in-out-std
    .hum1
      margin-top 8px
    .hum2,.hum3
      margin-top 4px
    &.humberger-open:hover
      .hum1
        width 12px
        transform translate(-2px,1px) rotate(-45deg)
      .hum2
        transform translateX(0px) rotate(0deg)
      .hum3
        width 12px  
        transform translate(-2px,-1px) rotate(45deg)
    &.humberger-hidden:hover
      .hum1
        //width 12px
        //transform translate(6px,1px) rotate(45deg)
      .hum2
        //transform translateX(0px) rotate(0deg)
      .hum3
        //width 12px  
        //transform translate(6px,-1px) rotate(-45deg)
// 动画
.humberger-enter-active, .humberger-leave-active
  opacity 1
  transition opacity $time-std $time-std 
.humberger-enter, .humberger-leave-to
  opacity 0
</style>

