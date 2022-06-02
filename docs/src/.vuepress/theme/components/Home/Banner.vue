<template>
  <div class="banner-inner">
    <div class="left">
      <img class="title" src="../../../public/logo.png" />
      <h2>{{ slogan }}</h2>
      <ul class="entry">
        <li v-if="$themeConfig.docBtn" class="left-btn">
          <router-link :to="$themeConfig.docBtn.link">
            {{ introduction }}
          </router-link>
        </li>
      </ul>
      <div class="desc">
        <div class="line" />
        <div>
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description:
        "我们希望能开发一套可在多个业务间复用的高性能、高效能 Cocos Creator 公共组件框架，旨在助力 Cocos Creator 开发者提升开发效率，更专注于业务开发，即 cocomat。",
    };
  },
  computed: {
    title() {
      return this.$themeConfig.title;
    },
    slogan() {
      return this.$themeConfig.slogan;
    },
    introduction() {
      return this.$themeConfig.docBtn.text;
    },
    starLink() {
      return this.$themeConfig.repo;
    },
    fockLink() {
      return this.$themeConfig.repo;
    },
    issuesLink() {
      return this.$themeConfig.issuesLink;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/icon.less";
@import "../../styles/content.less";

.title {
  width: 500px;
}

h1,
h2 {
  line-height: 1;
  color: #242424;
  padding: 0 20px;
}

h1 {
  font-size: 60px;
  font-weight: bold;
  margin-top: 0;
}

h2 {
  margin-top: 29px;
  font-size: 30px;
  font-weight: normal;
  border: none;
}

.banner-inner {
  position: absolute;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  margin-top: 80px;
}

.entry {
  margin-top: 53px;
  display: flex;
  padding: 0 20px;
  justify-content: center;
  li {
    box-sizing: border-box;
    margin-left: 24px;
    width: 220px;
    max-width: 220px;
    height: 60px;
    font-size: 22px;
    line-height: 60px;
    border-radius: 36px;
    border: solid 2px #096dd9;
    list-style: none;
    background-color: #096dd9;

    &.left-btn {
      margin-left: 0;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #ffffff;
    }
  }
}

.github {
  margin-top: 55px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  letter-spacing: 0;
  color: #000000;
  padding: 0 20px;

  & > li {
    display: flex;
    height: 30px;

    &:not(:first-child) {
      margin-left: 18px;
    }
  }

  .button,
  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 4px;
    border: solid 1px #e2e2e2;
    background-color: #ffffff;

    a {
      color: #000000;
    }
  }

  .button {
    width: 75px;
  }

  .icon {
    display: block;
    height: 16px;
    margin-right: 6px;
    background-size: 100% 100%;
  }

  .star--icon {
    width: 16px;
    background-image: url(@star);
  }

  .fork--icon {
    width: 12px;
    background-image: url(@fork);
  }

  .issue--icon {
    width: 16px;
    background-image: url(@issue);
  }

  .count {
    position: relative;
    width: 63px;
    margin-left: 7px;

    &::before {
      content: "";
      position: absolute;
      width: 7.071px;
      height: 7.071px;
      border-left: solid 1px #e2e2e2;
      border-bottom: solid 1px #e2e2e2;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%) rotate(45deg);
      background-color: #ffffff;
    }
  }
}

.left {
  width: 100%;
  min-width: 375px;
  max-width: 600px;
}

.desc {
  font-size: 20px;
  letter-spacing: 0px;
  color: #333;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
}

.line {
  width: 98%;
  height: 1px;

  margin: 10px auto 10px;
  background-color: rgb(214, 212, 212);
}
</style>
