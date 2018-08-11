<template>
  <div class="sub-nav-v2">
    <div class="sub-nav-content">
      <!-- 动画文档的导航栏 -->
      <transition name="fade-nav">
      <ul :key="nowPage">
        <li v-for="(item,i) in resolveItem()">
          <NavLink :item="item" :hasIcon="false"/>
        </li>
      </ul>
      </transition>
    </div>
  </div>
</template>
<style lang="stylus">
.fade-nav-enter-active
  transition: all .4s $easeInOutStd 50ms
.fade-nav-leave-active 
  transition: all .4s $easeInOutStd
.fade-nav-enter
  opacity: 0
  transform translateX(-20px)
.fade-nav-leave-active 
  opacity: 0
  transform translateX(20px)
</style>

<script>
import NavLink from './NavLink.vue'
export default {
  components: {NavLink},
  computed: {
    nowPage : function () {
      return this.$page.path.split('/')[1]
    }
  },
  methods: {
    resolveItem () { 
      return this.$site.themeConfig[this.nowPage+"Nav"]
    }
  }
}
</script>

