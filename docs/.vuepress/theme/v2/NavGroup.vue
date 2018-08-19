<template>
  <div class="nav-group" :class="resolveClass()">
    <span class="title-text"
    @click="toogleGroup()">
    <div class="group-more">
      <span class="more-1"></span>
      <span class="more-2"></span>
    </div>
    {{groupItem.text}}</span>
    <ul class="item-group" 
      :style="resolveHeight(groupItem.children.length)">
      <li v-for="(item,i) in groupItem.children"
        :style="delay(i,groupItem.children.length)">
        <NavGroupLinks
          :item="resolveLinkItem(item)"/>
      </li>
    </ul>
  </div>
</template>

<script>
import NavGroupLinks from './NavGroupLinks.vue'
import { resolveSubSidebarItem } from './util'
export default {
  name: "NavGroup" ,
  components: {NavGroupLinks},
  data() {
    return {
      isGroupOpen : false
    }
  },
  props: {
    groupItem: {
      required: true
    }
  },
  computed: { 
  },
  // 自动展开编组
  watch:{
    $route(to,from){
      this.openGroup()
    }
  },
  mounted: function (){
    this.openGroup()
  },
  methods: {
    resolveHeight(n) {
      if (this.isGroupOpen)  return "height :" + (n * 28 + 10) + "px" 
      if (!this.isGroupOpen) return "height :0 "
    },
    resolveClass() {
      return this.isGroupOpen ? 'group-open' : 'group-close'
    },
    toogleGroup() {
      this.isGroupOpen = !this.isGroupOpen
    },
    nowPage () {
      return this.$page.path.split('/')[1]
    },
    resolveLinkItem(item) {
      const nowPage = this.nowPage()
      const navObj = this.$site.pages
      const groupPath = this.groupItem.groupUrl
      return resolveSubSidebarItem(item, nowPage, navObj, groupPath)
    },
    delay (i,j) {
      if(this.isGroupOpen) return "transition-delay:" + (50 * i + 50) + "ms;"
      return "transition-delay:" + (50 * (j-i)) + "ms;"
    },
    openGroup() {
      if ( this.$page.path.split('/').length >= 4){
        const nowGroup = this.$page.path.split('/')[2]
        if (nowGroup === this.groupItem.groupUrl){
          this.isGroupOpen = true
        }
      } 
    }
  }
}

</script>

<style lang="stylus">
@import './styles/config'
// 展开
.nav-group
  &.group-open
    .group-more
      transform rotate(0deg)
  .group-more
    width 16px
    height 16px
    position absolute
    top 10px
    left 6px
    transform rotate(-90deg)
    transition $time-std transform $ease-in-out-std
  .more-1, .more-2
    display block
    width 1px
    height 7px
    background-color $text-black-heading
    position absolute
    top 4px
  .more-1
    transform rotate(45deg)
    left 9.5px
  .more-2
    transform rotate(-45deg)
    left 4.5px
.nav-group
  &.group-close
    ul.item-group
      transition $time-std height $ease-in-out-std $delay-long
      li
        opacity 0
        transform translateX(4px)
        transition $time-short all $ease-in-out-std    
  &.group-open
    ul.item-group
      transition $time-std height $ease-in-out-std 
      li
        opacity 1
        transform translateX(0)
        transition $time-short all $ease-in-out-std 
// 基本样式
.nav-group
  position relative
  padding 0 0 0
  .title-text
    margin 0
    padding-left 24px
    font-size 14px
    color $text-black-heading
    cursor pointer
    &:hover
      background-color $bg-color-darken-mask 
  ul.item-group
    overflow hidden
    margin 0
    padding 0 
    li
      margin-left 8px
      &:first-child
        padding-top 5px
      &:last-child
        padding-bottom 5px
      a,span
        line-height 28px
        color $text-black-weak
        &.router-link-exact-active
          span
            color $text-black-heading
</style>


