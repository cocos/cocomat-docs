<template>
  <div ref="preview" class="preview">
    <div class="preview-wrap">
      <div class="iphone"></div>
      <iframe ref="iframe" :src="$themeConfig.previewLink" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $page(val) {
      const { title, relativePath } = val
      this.$refs.iframe.contentWindow.postMessage({
        type: 'SCENE_CHANGE',
        title,
        relativePath
      }, '*')
    }
  }
}
</script>

<style lang="stylus" scoped>
.preview
  position fixed
  top 0
  bottom 0
  right 0
  padding 6rem 3rem 0 3rem
  border-left: 1px solid #eaecef
  box-sizing border-box
  &-wrap
    width 364px
    height 727px
    position relative
  .iphone
    width 364px
    height 727px
    background url('../assets/imgs/iphone.png')
    position absolute
    top 0
    left 0
    z-index 20
    pointer-events none
  iframe
    position relative
    width 100%
    height 100%
    box-sizing border-box
    padding 21px 24px
    z-index 10
</style>
