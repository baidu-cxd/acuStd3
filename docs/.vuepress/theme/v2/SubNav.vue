<template>
  <div class="sub-nav">
    <div class="sub-nav-content">
      <!-- 动画文档的导航栏 -->
      <transition name="fade-nav">
      <ul :key="nowPage">
        <li v-for="(item,i) in navData()">
          <NavLink :item="resolveLinkItem(item)" :hasIcon="false"/>
        </li>
      </ul>
      </transition>
    </div>
  </div>
</template>
<style lang="stylus">
.fade-nav-enter-active
  transition: all $time-std $ease-in-out-std $delay-std
.fade-nav-leave-active 
  transition: all $time-std $ease-in-out-std
.fade-nav-enter
  opacity: 0
  transform translateX(-20px)
.fade-nav-leave-active 
  opacity: 0
  transform translateX(20px)
</style>

<script>
import NavLink from './NavLink.vue'
import { resolveSubSidebarItem } from './util'
export default {
  name: 'SubNav',
  components: {NavLink},
  computed: {
    nowPage : function () {
      return this.$page.path.split('/')[1]
    }
  },
  methods: {
    navData () { 
      return this.$site.themeConfig[this.nowPage+"Nav"]
    },
    resolveLinkItem(item) {
      const nowPage = this.nowPage
      const navObj = this.$site.pages
      return resolveSubSidebarItem(item, nowPage, navObj)
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config'
.hiddenTop .sub-nav
  transition $time-std $ease-in-out-std $delay-long
.showTop .sub-nav
  top 330px 
.sub-nav
  transition $time-std $ease-in-out-std 
  position absolute 
  top 130px 
  bottom 0
  width 100%
  .sub-nav-content
    padding 0 10px
  ul
    padding 0
  li
    list-style none
    display block
    height 36px
    padding 0 10px
    transition $transition-std
    &:hover
      background-color $bg-color-darken-mask 
    a 
      display block
      width 100%
      @extend .p-size-std
      text-decoration-line none
      color $text-black-heading
      line-height 36px
      &.router-link-exact-active
        font-weight 600
</style>


