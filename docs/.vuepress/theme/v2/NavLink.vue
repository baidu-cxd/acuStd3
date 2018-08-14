<template>
  <router-link
    class="nav-link"
    :to="link"
    v-if="!isExternal(link)"
    :exact="link === '/'">
    <img v-if="hasIcon === true && item.icon" :src="item.icon" alt="" class=""/>
    <span class="text">{{ text }}</span>
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link"
    :target="isMailto(link) ? null : '_blank'"
    :rel="isMailto(link) ? null : 'noopener noreferrer'">
    {{ item.text }}
  </a>
</template>

<script>
import { isExternal, isMailto, ensureExt,} from './util'

export default {
  props: {
    item: {
      required: true
    },
    hasIcon: {
      default: false
    }
  },
  computed: {
    link() {
      return ensureExt(this.item.link)
      //return this.item.link
    },
    text() {
      return this.item.text || this.link
    }
  },
  methods: {
    isExternal,
    isMailto
  }
}
</script>
