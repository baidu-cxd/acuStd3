<template>
  <div class="nav">
    <NavController 
    @toggle-nav="$emit('toggle-nav')"
    :isNavHidden = "isNavHidden"/>
    <div class="nav-content">
      <!--页面logo--> 
      <div class="logo-content">
        <router-link :to="$localePath" class="home-link">
          <img class="logo"
            v-if="$site.themeConfig.logo"
            :src="$withBase($site.themeConfig.logo)">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavController from './NavController.vue'
export default {
  name : 'Nav',
  components: { NavController },
  props: ['isNavHidden']
}
</script>

<style lang="stylus">
@import 'styles/layout'
// 基本样式
.nav .nav-content
  width $sidebarWidth
  position fixed
  left 0
  top 0
  bottom 0
  overflow-y hidden
  background-color $bg-color-light
  z-index 100

// logo
.nav .logo-content// logo
  width 100%
  height 80px
  position relative
  display block
  .logo
    height 18px
    top 60%
    left 20px
    position absolute
    transform translate(0,-50%)
    opacity .85
    transition $transition-std
    &:hover
      opacity 1

// 展开收起控制器
.nav 
  .controller
    width 32px
    height 32px
    position fixed
    top 32px
    left 185px
    z-index 101
    padding 4px 0
    box-sizing border-box
    cursor pointer
    .humberger
      width 16px
      height 1px
      background-color $action-color
      display block
      margin 5px auto 
.nav-hidden .nav .nav-content
  transform translateX(-100%)
  transition transform $time-std $ease-in-std 
.nav-show .nav .nav-content
  transform translateX(0%)
  transition transform $time-std $ease-out-std $delay-std 
</style>
