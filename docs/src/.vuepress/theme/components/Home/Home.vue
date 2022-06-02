<template>
  <div class="theme-container">
    <div class="layout__banner">
      <Banner />
    </div>
    <div class="layout__description">
      <Flow />
    </div>
    <div class="layout__contributor">
      <Contributor />
    </div>
    <div class="layout__footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Banner from "@theme/components/Home/Banner.vue";
import Flow from "@theme/components/Home/Flow.vue";
import Contributor from "@theme/components/Home/Contributor.vue";
import Footer from "@theme/components/Home/Footer.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Flow,
    Contributor,
    Footer,
  },
};
</script>

<style lang="less" scoped>
body {
  background-color: #fff;
}

.theme-container {
  background-color: #fff;
}

.layout {
  &__banner {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
    height: calc(650px + 4rem);
    overflow: hidden;
    text-align: center;
    background-color: #fff;
  }

  &__description {
    position: relative;
    margin: 0 auto;
    height: 650px;
    width: 100%;
    background-color: #fff;
  }

  &__contributor {
    position: relative;
    margin: 0 auto;
    width: 100%;
  }

  &__footer {
    position: relative;
    margin: 0 auto;
    width: 100%;
    z-index: 1;
  }
}
</style>
