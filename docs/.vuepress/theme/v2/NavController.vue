<template>
  <div :class="['nav-controller', 
  isNavHidden? 'controller-hidden':'controller-open']" 
  @click="$emit('toggle-nav')">
      <div v-show="!isNavHidden" 
        class="humberger humberger-open"></div>
      <div v-show="isNavHidden" 
        class="humberger humberger-hidden"></div>
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
    left 185px
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
    &.humberger-open
      background-color #108cee
    &.humberger-hidden
      background-color #000
</style>

