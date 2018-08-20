<template>
  <span class="page-cms">
    <!-- cms 标题 -->
    <p @click="toggleModal()">
      {{cms.name}}
    </p>
    <!-- cms 详细展开 -->
    <transition name="modal">
      <div class="modal-section" 
        v-show = "this.isSectionModalOpen">
        <transition name="modal-in">
          <div class="front-bg" v-if = "this.isSectionModalOpen">
            <h1>{{cms.name || this.$site.pages}}</h1>
            <div class="img-content">
              <img :src="cms.img" alt="">
            </div>
          </div>
        </transition>
        <div class="bg" @click="toggleModal()"></div>
      </div>
    </transition>
  </span>
</template>

<script>
export default {
  name: 'cms',
  props: ["name","id"],
  data() {
    return {
      isSectionModalOpen : false
    }
  },
  computed: {
    cms() {
      const cmsPath = '/portal/CMS/Section.html'
      const pageObj = this.$site.pages
      const resolvedPageObj = resolvePageObj(pageObj)
      const cmses = resolvedPageObj[cmsPath].frontmatter.cmsSection
      let cms = {}
      let str
      if (this.id) {
        str = 'id'
      } else if (this.name) {
        str = 'name'
      }
      const resolvedCmses = resolveCms(cmses,str) 
      cms = resolvedCmses[this[str]]
      return cms
    }
  },
  methods: {
    toggleModal() {
      this.isSectionModalOpen = !this.isSectionModalOpen
    }   
  }
}
function resolvePageObj(pageObj){
  let obj = {};
  pageObj.forEach(function (v) {
      obj[v.path] = v
  })
  return obj
}
function resolveCms(cmses,str){
  let obj = {};
  cmses.forEach(function (v) {
      obj[v[str]] = v
  })
  return obj 
}
</script>

<style lang="stylus">
@import '../theme/v2/styles/config'
@import '../theme/v2/styles/tool'
// 展开
table
  .page-cms
    p
      margin 0
.page-cms
  display inline-block
  margin-right 10px
  h1
    @extend .h1-size-small
    margin-top 40px
    padding-top 0
    padding-bottom 40px
    border-bottom 1px solid $border-color
    &:after
      display none
  p
    color $link-color
    &:hover
      cursor pointer
      text-decoration-line underline
  .modal-section
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 1000
    .bg //背景
      width 100%
      height 100%
      background-color #000
      opacity .4
      position relative
      z-index 1000
    .front-bg //前景
      position absolute
      left 20px
      right 20px
      top 20px
      bottom 20px
      background-color #fff
      z-index 1001  
      overflow-x hidden
      overflow-y auto

.front-bg 
  h1
    text-align center
  .img-content
    width 1920px
    overflow hidden
    @extend .w-middle
  img
    width 100%

.modal-enter-active 
  transition opacity $time-short $ease-in-out-std
.modal-leave-active 
  transition opacity $time-short $ease-in-out-std $delay-std
.modal-enter 
  opacity 0
.modal-leave-to 
  opacity 0

.modal-in-enter-active 
  transition all $time-short $ease-in-out-std $delay-std
.modal-in-leave-active 
  transition all $time-short $ease-in-out-std 
.modal-in-enter 
  transform translateY(20px)
.modal-in-leave-to 
  transform translateY(20px)
</style>


