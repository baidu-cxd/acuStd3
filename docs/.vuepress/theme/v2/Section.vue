<template>
  <div class="custom-layout section">
    <div class="header">
        这是页面头部
    </div>
    <div class="body"> 
        这是板块浏览器
        <ul>
          <li v-for="(item,i) in this.$page.frontmatter.cmsSection">
            <cms :name="'通用板块 001 号'"/>
          </li>
        </ul>
    </div>
    <div class=""></div>
  </div>
</template>

<script>
export default {
  name: "Section",
  computed: {

  }
}
</script>
