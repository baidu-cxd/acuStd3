<template>
  <div class="theme-container v2"
    v-else-if="edition === 'v2'"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd">
    <Nav v-if="shouldShowNav"
    @toggle-nav="toggleNav"
    :isNavHidden = "isNavHidden"/>
    <component :is="$page.frontmatter.layout"/>
    <Home v-if="$page.frontmatter.home"/>
    <div class="main-wrp"
      v-if="!$page.frontmatter.layout">
      <div class="page-wrp">
        <Page/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// v2 版本
import Vue from 'vue'
import nprogress from 'nprogress'
import Home from './v2/Home.vue'
import Section from './v2/Section.vue'
import Nav from './v2/Nav.vue'
import Page from './v2/Page.vue'
import Footer from './v2/Footer.vue'
import { pathToComponentName, resolveSubSidebarItems } from './v2/util'  

export default {
  components: { Home, Page,  Nav, Footer, Section },
  data () {
    return {
      isNavHidden: false
    }
  },

  computed: {
    edition () {
      const { frontmatter } = this.$page
      const { themeConfig } = this.$site
      if (frontmatter.edition === 'v2') return frontmatter.edition
      if (themeConfig.edition === 'v2') return themeConfig.edition
      return 'v1'
    },
    shouldShowNav () {
      if (this.$page.frontmatter.home || this.$page.frontmatter.nav === false ) return false
      return true
    },
    subSidebarItems () {
      return resolveSubSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      )
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass 
                            || this.$page.frontmatter.layout
      return [
        this.isNavHidden? 'nav-hidden' : 'nav-show',
        userPageClass,
        this.$page.frontmatter.home ||
        this.$page.frontmatter.nav === false ? 'no-nav' : ' '
      ]
    }
  },

  created () {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    }

  },

  mounted () {
    // update title / meta tags
    this.currentMetaTags = []
    const updateMeta = () => {
      document.title = this.$title
      document.documentElement.lang = this.$lang
      const meta = [
        {
          name: 'description',
          content: this.$description
        },
        ...(this.$page.frontmatter.meta || [])
      ]
      this.currentMetaTags = updateMetaTags(meta, this.currentMetaTags)
    }
    this.$watch('$page', updateMeta)
    updateMeta()

    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(pathToComponentName(to.path))) {
      nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
      this.isSidebarOpen = false
    })
  },

  //beforeDestroy () {
  //  updateMetaTags(null, this.currentMetaTags)
  //},

  methods: {
    toggleNav (to) {
      this.isNavHidden = typeof to === 'boolean' ? to : !this.isNavHidden
    },
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleNav(true)
        } else {
          this.toggleNav(false)
        }
      }
    }
  }
}

function updateMetaTags (meta, current) {
  if (current) {
    current.forEach(c => {
      document.head.removeChild(c)
    })
  }
  if (meta) {
    return meta.map(m => {
      const tag = document.createElement('meta')
      Object.keys(m).forEach(key => {
        tag.setAttribute(key, m[key])
      })
      document.head.appendChild(tag)
      return tag
    })
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./v2/styles/theme.styl" lang="stylus"></style>
<style src="./v2/styles/util/iconfont.css"></style>
