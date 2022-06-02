<template>
  <div class="copyright">
    <div class="copyright__text">
      <div class="copyright__logo">
        <img :src="footerLogo" />
        <div class="line" />
        <a href="https://www.cocos.com/">
          <img :src="cocosLogo" />
        </a>
      </div>
      <p>{{ footer.copyright }}</p>
      <p>Documentation licensed under {{ footer.lisence }}.</p>
    </div>
  </div>
</template>

<script>
import footerLogo from "../../../public/favicon.png";
import cocosLogo from "../../assets/imgs/cocos-logo.png";

export default {
  computed: {
    footer() {
      return this.$themeConfig.footer;
    },
    footerLogo() {
      return footerLogo;
    },
    cocosLogo() {
      return cocosLogo;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/icon.less";

.copyright {
  width: 100%;
  max-width: 1240px;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__text {
    color: #bbbbbb;
    text-align: center;

    p:nth-child(2) {
      margin: 40px 0px 0px;
    }
    p:last-child {
      margin: 0px;
    }
  }

  &__logo {
    height: 70px;
    margin-bottom: -20px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    .line {
      height: 100%;
      width: 1px;

      background-color: #bdc3c7;

      margin: 0 15px 0 30px;
    }

    a {
      width: 70px;
    }

    img {
      width: 70px;
      height: 70px;
    }
  }

  &__group {
    display: flex;
  }

  &__wechat,
  &__github {
    display: block;
    width: 51px;
    height: 50px;
    margin-right: 37px;
    background-size: 100% 100%;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
