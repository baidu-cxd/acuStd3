<template>
  <div class="sub-nav">
    <div class="sub-nav-content">
      <!-- 动画文档的导航栏 -->
      <transition name="fade-nav">
      <ul :key="nowPage()">
        <li v-for="(item,i) in navData()">
          <SubNavLinks 
          :item="resolveLinkItem(item)"/>
        </li>
      </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import SubNavLinks from './SubNavLinks.vue'
import { resolveSubSidebarItem } from './util'
export default {
  name: 'SubNav',
  components: {SubNavLinks},
  computed: {
  },
  methods: {
    nowPage () {
      return this.$page.path.split('/')[1]
    },
    navData () { 
      const nowPage = this.nowPage()
      return this.$site.themeConfig[nowPage+"Nav"]
    },
    resolveLinkItem(item) {
      const nowPage = this.nowPage()
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
    a,span
      display block
      width 100%
      @extend .p-size-std
      text-decoration-line none
      color $text-black-heading
      line-height 36px
      &.router-link-exact-active
        font-weight 600

.fade-nav-enter-active
  transition: all $time-std $ease-in-out-std $time-std
.fade-nav-leave-active 
  transition: all $time-std $ease-in-out-std
.fade-nav-enter
  opacity: 0
  transform translateX(-20px)
.fade-nav-leave-active 
  opacity: 0
  transform translateX(20px)

</style>


