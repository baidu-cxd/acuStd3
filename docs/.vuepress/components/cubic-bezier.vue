<template>
  <div class="container-out" @click="play">
    <div class="bezier-container" :style="{width, height, display: 'block'}" ref="canvaswrp">
      <canvas ref="canvas"></canvas>
      <div class="cursor" :style="{transform, transition, opacity, width: cursorWidth + 'px'}"></div>
    </div>
  </div>
</template>

<script>
import Bezier from '../tools/Bezier.es6';

const cursor = {
  arrawWidth: 20,
  height: 20  
}

export default {
  props: {
    height: {
      type: [String, Number],
      default: '300px'
    },
    width: {
      type: [String, Number],
      default: '360px'
    },
    param: {
      type: Array,
      default: () => [.55, .94, 0, -0.95]
    },
    cursorWidth: {
      type: Number,
      default: 30
    },
    time: {
      type: Number,
      default: .6
    }
  },
  data() {
    return {
      transform: `translate(0, ${this.height})`,
      opacity: 1,
      // 箭头宽度
      arrowWidth: cursor.arrawWidth,
      cursorHeight: cursor.height,
      isPlaying: false,
      isStart: true
    }
  },
  mounted() {
    let canvas = this.$refs.canvas;
    canvas.width = this.$refs.canvaswrp.clientWidth - this.cursorWidth - this.arrowWidth;
    canvas.height = this.$refs.canvaswrp.clientHeight;
    let bezier = new Bezier(canvas, this.param);
    bezier.draw();
  },
  methods: {
    play() {
      if (!this.isPlaying && this.isStart) {
        setTimeout(() => this.isPlaying = true, 800);
        this.toEnd();
      }
      else if(this.isPlaying){
        this.opacity = 0;
        this.isStart = false
        setTimeout(this.toStart, 200);
      }
    },
    toEnd() {
      this.transform = `translate(0, 0)`;
      //this.opacity = 0;
    },
    toStart() {
      this.transform = `translate(0, ${this.height})`;
      this.opacity = 1;
      setTimeout(() => this.isPlaying = false, 0);
      setTimeout(() => this.isStart = true, 200);
      setTimeout(() => this.play(), 400);
    }
  },
  computed: {
    transition() {
      let cb = this.param.join(',');
      let time = this.time;
      if (this.isStart){
        return `transform ${time}s cubic-bezier(${cb}),opacity 0.2s ease`;
      }
    }
  }
};
</script>

<style lang="stylus">
$arrowSize = 10px
$arrowColor = #108cee
.container-out
  width 100%
  max-width 360px
  padding 10px 0 10px
  border 1px solid #e6e6e6
  margin 15px 0
  &:hover
    cursor pointer
    background-color #fcfcfc
    border 1px solid darken(#e6e6e6,5%) 
.bezier-container
  transform scale(.5)
  margin auto
  &:hover 
    cursor pointer
  position relative
  canvas
    position relative
    top $arrowSize
  .cursor
    height 2 * $arrowSize
    background-color $arrowColor
    position absolute
    right 0
    top 0px
    &:after
      position absolute
      left -2 * $arrowSize
      content ''
      height 0
      width 0
      border $arrowSize solid transparent
      border-right $arrowSize solid $arrowColor
</style>