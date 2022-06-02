<template>
  <div class="contributor">
    <div class="group-container">
      <h3>项目贡献者</h3>
      <center><p>cocomat 初始版本由腾讯团队贡献。1.0.0 版本贡献者名单包括：</p></center>
      <div class="contributor-group">
        <ul class="contributor-group__list">
          <li
            v-for="(item, index) in contributors"
            :key="index"
            class="contributor-group__item"
          >
            <a
              v-if="item.homepageHref"
              :href="item.homepageHref"
              :title="item"
              target="_blank"
              rel="noopener noreferrer"
            >
            {{ item.name }}
            </a>
            <span v-else>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contributors() {
      return this.$themeConfig.contributors.contributorsInfo;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/content.less";

.contributor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.05);

  .group-container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #fff;

    h3 {
      font-size: 24px;
      letter-spacing: 0;
      font-weight: 400;
      color: #4e4e4e;
      text-align: center;
    }
  }

  .contributor-group {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &__title {
      line-height: 32px;
      font-size: 20px;
      letter-spacing: 0;
      color: #666;
      margin: 10px 0px;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;
      margin: 10px 0px;
      max-width: 900px;
    }
    &__item {
      height: 60px;
      display: block;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin:0 10px;

      img {
        display: block;
        width: 56px;
        height: 56px;
        overflow: hidden;
        border: 2px solid #eee;
        border-radius: 50%;
        transition: all 0.5s;

        &:hover {
          border: 2px solid #ff8b00;
        }
      }
    }
  }
}

.slogan {
  width: 0;
  background-color: #fff;

  &-text {

    position: absolute;

    line-height: 32px;
    font-size: 60px;
    letter-spacing: 0;
    color: #e67e22;
    margin: 10px 0px;

    margin: 0 0 20px;
  }

  &-arrow {
    transform: translateX(150px);
  }
}

 
</style>
