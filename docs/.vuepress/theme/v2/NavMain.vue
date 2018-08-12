<template>
  <div class="nav-main">
    <!--页面级别导航-->  
    <div  class="guide-link-content"  @click="$emit('toggle-main-list')">
      <!--当前页面--> 
      <div v-for="(item,i) in userLinks"
        v-if="item.link.split('/')[1] == nowPage"
        class="nav-guide-link, nav-now">
        <span class="text">{{item.text}}</span>
        <div class="arr">
          <span class="point1 point"></span>
          <span class="point2 point"></span>
          <span class="point3 point"></span>
        </div>
      </div>
      <!--全部页面-->  
      <div
        v-for="(item,i) in userLinks"
        :class="['nav-guide-link','nav-other']"
        :key="item.link"
        :style="delay(i)">
        <NavLink :item="item"/>
      </div>
    </div>
  </div>
</template>
<script>
import NavLink from './NavLink.vue'
import { resolveNavLinkItem } from './util'
export default {
  name: 'NavMain',
  components: {NavLink},
  data() {
    return {
      
    }
  },  
  prop: ['topNavShow'],
  computed: {
    navMain() {
      return this.$site.themeConfig.mainNav
    },
    userLinks () {
      return (this.navMain || []).map((link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      }))
    },
    nowPage : function () {
      return this.$page.path.split('/')[1]
    }
  },
  methods: {
    delay (i) {
      return "transition-delay:" + (50 * i + 50) + "ms;"
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config'

$navNumber = 6

//顶部的三个点
.showTop .nav-now:hover .arr
  span.point
    opacity .8
    width 10px
    height 1px
    border-radius 0
    &.point1
      top 9px
      transform rotateZ(45deg) 
      left 9px 
    &.point2
      transform scale(0)
      width 2px
    &.point3
      top 9px
      transform rotateZ(-45deg) 
      left 2px     
.nav-now:hover .arr
  span.point
    opacity .8
    width 10px
    height 1px
    border-radius 0
    &.point1
      top 9px
      transform rotateZ(45deg) 
    &.point2
      transform scale(0)
      width 2px
    &.point3
      top 9px
      transform rotateZ(-45deg) 
      left 9px    
.nav-now .arr
  width 20px
  height 20px
  position absolute
  right 4px
  top 10px
  overflow hidden
  span.point 
    display block
    width 2px
    height 2px
    border-radius 100px
    background-color #000
    padding 0
    position absolute
    top 8px
    opacity .5
    transition $transition-std
    &.point1
      left 2px
    &.point2
      left 9px
    &.point3
      left 16px
.nav-now
  position relative

.nav-main
  position absolute
  top 80px
  left 0
  width 100%
  overflow-y hidden
  .nav-now, .nav-other a 
    font-size 14px
    line-height 40px
    font-weight 600
    color $text-black-heading
    text-decoration none
    display block
  .nav-other a
    color $text-black-heading
    opacity .6 
    transition $transition-std
    &:hover
      opacity 1
  .guide-link-content
    height 40px
    padding-bottom 10px
    border-bottom 1px solid $border-color
    padding 0 20px 10px
    .nav-guide-link
      transition $time-std all $ease-in-out-std
    &:hover
      cursor pointer

.showTop .guide-link-content
  height (40 * $navNumber)px
  transition $time-short height $ease-in-out-std
  .nav-guide-link
    opacity 1
    transform translateX(0)
.hiddenTop .guide-link-content
  transition $time-short height $ease-in-out-std $delay-long 
  .nav-guide-link
    opacity 0
    transform translateX(-40px)

</style>

