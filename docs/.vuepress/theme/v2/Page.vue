<template>
  <div class="page">
    <Content :custom="false" class="article"/>
    <div class="git-link">
      <a target="blank"
        :href="resolveGitLink()">
        完善这个页面
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Page',
  methods: {
    resolveGitLink () {
      const gitLink = this.$site.themeConfig.gitHub
      const path = this.$page.path
      const mdPath = resolvePathToMd(path)
      return gitLink + mdPath
    },
  }
}
function resolvePathToMd(path) {
  const laststr = path.charAt(path.length-1);
  if (laststr === '/') {
    path = path + "README.md"
  } else {
    path = path.replace('.html', '.md')
  }
  return path
}
</script>

<style lang="stylus">
@import "styles/config"
.page
  position relative
.git-link
  margin 80px 0 20px
  padding-top 40px
  border-top 1px solid $border-color
  a
    font-size 14px
    width 120px
    height 32px
    line-height 30px
    box-sizing border-box
    color $text-black-std
    display block
    text-align center
    border 1px solid $border-color
    text-decoration none
    transition $time-short all $ease-in-out-std
    &:hover
      color $link-color
      border 1px solid $link-color
</style>
