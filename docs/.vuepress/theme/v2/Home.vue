<template>
  <div class="home">
    <h1>百度云设计规范网站 V3</h1>
    <p>页面从代码仓库自动构建</p>
    <a target="blank"
    style="font-size:24px;"
    href="https://github.com/dingzu/acuStd3/">
    打开代码仓库</a>
    <hr style="margin:40px 0 40px;">
    <router-link :to="'/portal/'" class="home-link">
    portal 门户规范
    </router-link>
    <router-link :to="'/marketing/'" class="home-link">
    marketing 营销规范
    </router-link>
    <router-link :to="'/console/'" class="home-link">
    console 交互规范
    </router-link>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style lang="stylus">
.home
  min-height 800px
  h1
    text-align center
    margin-top 80px
  a
    text-align center
    color #000
    margin-top 40px
    display block
  p
    text-align center
    color red
</style>


