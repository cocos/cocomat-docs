<template>
  <footer class="footer">
    <div class="footer__copyright">
      <Copyright />
    </div>
  </footer>
</template>

<script>
import Copyright from './Copyright';

export default {
  components: {
    Copyright,
  },
};
</script>


<style lang="less" scoped>
.footer {
    &__copyright {
        height: 180px;
        background-color: #ecf0f1;
    }
}
</style>

