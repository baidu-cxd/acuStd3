<template>
  <div class="footer">
    <p>Copyright ©2018 Cxd-Design</p>
  </div>
</template>

<script>
export default {
  name : 'Footer'
}
</script>

<style lang="stylus">
@import './styles/config'
.footer
  background-color $bg-color-dark 
  color $text-white-weak
  margin-top 40px
  height 40px
  p
    line-height 40px
    @extend .p-size-std
    text-align center
</style>
