<template>
  <div class="nav-group">
    <span class="title-text"
    @click="toogleGroup()">
    {{groupItem.text}}</span>
    <ul class="item-group">
      <li v-for="(item,i) in groupItem.children">
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
  props: {
    groupItem: {
      required: true
    }
  },
  methods: {
    toogleGroup() {
      alert("展开组的逻辑还没写呢")
    },
    nowPage () {
      return this.$page.path.split('/')[1]
    },
    resolveLinkItem(item) {
      const nowPage = this.nowPage()
      const navObj = this.$site.pages
      const groupPath = this.groupItem.groupUrl
      return resolveSubSidebarItem(item, nowPage, navObj, groupPath)
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config'
.nav-group
  border-top 1px solid $border-color
  border-bottom 1px solid $border-color
  padding 0 0 10px
  .title-text
    margin-left 10px
    font-size 14px
    color $text-black-heading
    cursor pointer
  ul
    overflow hidden
    margin 0 
    li
      a,span
        line-height 28px
        color $text-black-weak

</style>


