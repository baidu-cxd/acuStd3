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
        <transition name="modal-left-in">
          <div class="close" 
            v-if = "this.isSectionModalOpen"
            @click="toggleModal()">
            <span class="close-item close-1"></span>
            <span class="close-item close-2"></span>
          </div>
        </transition>
        <transition name="modal-in">
          <div class="front-bg" v-if = "this.isSectionModalOpen">
            <h4>{{cms.name || this.$site.pages}}</h4>
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
      const cmsPath = '/portal/cms/section.html'
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
  h4
    @extend .h4-size-std
    color $text-black-weak
    margin-top 10px
    padding-top 0
    padding-left 40px
    padding-bottom 10px
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
      left 30px
      right 30px
      top 30px
      bottom 30px
      background-color #fff
      z-index 1001  
      overflow hidden
      overflow-y auto

.front-bg 
  .img-content
    width 1920px
    overflow hidden
    @extend .w-middle
    overflow-x hidden
    overflow-y auto
  img
    width 100%

.page-cms
  .close
    width 40px
    height 40px
    border-radius 100px
    border 1px solid $border-color
    position fixed
    z-index 1005
    top 60px
    right 80px
    background-color #fff
    transition $time-std all $ease-in-out-std
    &:hover
      cursor pointer
      border 1px solid $link-color
      .close-item
        background-color $link-color
    .close-item
      transition $time-std all $ease-in-out-std
      width 16px
      height 1px
      background-color $text-black-weak
      display block
      position absolute
      left 50%
      top 50%
    .close-1
      transform translate(-50%,-50%) rotate(45deg)
    .close-2
      transform translate(-50%,-50%) rotate(-45deg)



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

.modal-left-in-enter-active 
  transition all $time-short $ease-in-out-std $delay-std
.modal-left-in-leave-active 
  transition all $time-short $ease-in-out-std 
.modal-left-in-enter 
  transform translateX(40px)
.modal-left-in-leave-to 
  transform translateX(40px)
</style>


