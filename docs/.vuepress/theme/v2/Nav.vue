<template>
  <div class="nav">
    这是导航栏
  </div>
</template>

<script>
export default {
  name : 'Nav'
}
</script>

<style lang="stylus">
@import 'styles/layout'
.nav
  width $sidebarWidth
  position fixed
  left 0
  top 0
  bottom 0
  background-color $bg-color-light
</style>
