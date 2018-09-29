<template>
  <div class="prev-next">
    <router-link :to="prev.path" class="prev">
      <i class="iconfont icon-youjiantou" 
      style="font-size:12px; 
      transform: rotate(180deg) translateY(1px); 
      display:inline-block;"></i>
      {{prev.text}} {{this.$page.path}} 
    </router-link>
    <router-link :to="next.path" class="next">
      {{next.text}} <i class="iconfont icon-youjiantou" 
      style="font-size:12px;
      transform: translateY(-1px)"></i>
    </router-link>
  </div>
</template>

<script>
import { resolvePrevNext,} from './util'
export default {
  name : 'PrevNext',
  computed: {
    prevNext() {
      const nowPage = this.$page.path
      const themeConfig = this.$site.themeConfig
      return resolvePrevNext(nowPage, themeConfig)
    },
    prev() {
      return this.prevNext['prev'] 
    },
    next() {
      return this.prevNext['next'] 
    }
  }
}
</script>

<style lang="stylus">
@import "styles/config"
.prev-next
  div
    display block
    height 40px
a
  font-size 16px
  line-height 30px
  text-decoration-line none 
  color $link-color
  &:hover 
    text-decoration underline
.prev
  float left
.next
  float right
</style>
