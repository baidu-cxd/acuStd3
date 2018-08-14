<template>
  <div class="sub-nav-links">
    <NavLink :item="item" v-if="item.kind = 'single'"/>
    <NavGroup :item="item" v-if="item.kind = 'group'"/>
  </div>
</template>

<script>
import NavGroup from './NavGroup.vue'
import NavLink from './NavLink.vue'
export default {
  name: 'SubNavLinks',
  props: {
    item: {
      required: true
    }
  },
  components: {NavLink, NavGroup},
  computed: {
  },
  methods: {
  }
}
</script>

</script>

