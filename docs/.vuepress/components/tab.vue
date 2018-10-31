<template>
  <div class ="tab">
    <div class="tab-head">
      切换头
    </div>
    <div class="tab-item" ref="tab">
    <slot>
    </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        tabHtml : ''
      }
  },
  mounted() {
    this.tabHtml = resolveH3ToTab(this.$refs.tab) 
  },
}
function resolveH3ToTab(html){
  const titleHtml = html.querySelectorAll("h3")
  const contentHtml = html.querySelectorAll("p")
  console.log(html)
  console.log(html.querySelectorAll("h3"))
}
</script>


<style lang="stylus">
.tab
  margin 10px 0
  .tab-head
    width 100%
    padding-bottom 8px
    border-bottom 1px solid #ebebeb
</style>

