<template>
  <div class="nav-group">
    <span class="title-text"
    @click="toogleGroup()">
    {{this.item.text}}</span>
  </div>
</template>

<script>
export default {
  name: "NavGroup" ,
  props: {
    item: {
      required: true
    }
  },
  methods: {
    toogleGroup() {
      alert("展开组的逻辑还没写呢")
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config'
.nav-group
  .title-text
    font-size 14px
    cursor pointer
</style>


