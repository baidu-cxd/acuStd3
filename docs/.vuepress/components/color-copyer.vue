<template>
    <div class="color-box color-box-in color-box-solo" 
    v-if="color2 == null"
    @click="showAlert()"
    :data-clipboard-text="color"
    :style="{backgroundColor: color}">
        <p class="color-name" :class="this.type === 'dark'? 'dark':'white'">
          {{color}}
        </p>
        <p class="color-text" :class="this.type === 'dark'? 'dark':'white'">
          {{text}}
        </p>
    </div>
    <div :class="['color-box','gra',type]" 
    v-else-if="color2 !== null"
    :style="gradients">
        <p class="color-box-color color-name"
          :class="this.type === 'dark'? 'dark':'white'"
          >{{color}} → {{color2}}</p>
        <p class="color-box-text color-text"
          :class="this.type === 'dark'? 'dark':'white'"
          >{{text}}</p>
        <div class="color-1 color-box-in" 
        :data-clipboard-text="color"
        :style="{backgroundColor: color}">
        <p @click="showAlert()"
          :class="this.type === 'dark'? 'dark':'white'"
          >{{color}}</p>
        </div>
        <div class="color-2 color-box-in"  
        :data-clipboard-text="color2"
        :style="{backgroundColor: color2}">
        <p :class="this.type === 'dark'? 'dark':'white'"
          @click="showAlert()">{{color2}}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    color: {
      default: null
    },
    color2: {
      default: null
    },
    text: {
      default: null
    },
    type: {
      default: 'white'
    },
  },
  methods: {
    showAlert: function(){
      alert('复制到粘贴板')
    },
  },
  mounted() {
    import("clipboard").then(cb => {
      new cb.default(".color-box-in");
    });
  },
  computed: {
    gradients(){
      let a = this.color
      let b = this.color2
      let c = 'background: linear-gradient(90deg,'+ a+','+ b+')'
      return c
    }
  }
};
</script>

<style lang="stylus">
@import '../theme/v2/styles/config.styl' 
.content  .color-box
    transition $time-std transform $ease-in-out-std
    margin 10px 0
    &:hover
      cursor pointer
    &.color-box-solo:hover
      transform scale(1.01,1.01)
    height 20px
    overflow hidden
    padding 15px
    p
      margin 0
    p.white
      color #fff
      opacity .85
    p.dark
      color #000
      opacity .85
    p.color-name
      margin 0
      float left
      line-height 20px
    p.color-text
      margin 0
      float right 
      line-height 20px
  .color-box.gra
    transition .8s all $ease-in-out-std
    position relative
    .color-1,.color-2
      height 100%
      width 50%
      position absolute
      background-color #000
      top 0
      transition $time-long transform $ease-in-out-std
      &:hover
        cursor pointer
      p,p:first-child
        position absolute
        left 50%
        top 50%
        width 100%
        text-align center
        line-height 100px
        transform translate(-50%,-50%)
        display block
        transition $time-std all $ease-in-out-std
        &:hover
          background-color #000
    .color-1
      left 0
      transform translateX(-100%)
    .color-2
      right 0
      transform translateX(100%)
    p.color-box-color,p.color-box-text
      transition $time-std all $ease-in-out-std
      opacity 1
    &:hover
      cursor default
      .color-1,.color-2
        transform translateX(0px)
        p:hover
          color #fff
      p.color-box-color
        transform translateX(30px)
        opacity 0
      p.color-box-text
        transform translateX(-30px)
        opacity 0

// 编组样式

.color-box-wrp 
  margin 15px 0
  .color-box
    margin 0
.color-box-border
  .color-box
    border 1px solid rgba(0,0,0,.1)
</style>

