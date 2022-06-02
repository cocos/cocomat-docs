<template>
  <div v-if="flow.length" class="flow">
    <div class="flow-container">
      <div
        v-for="(item, index) in flow"
        :key="index"
        :id="index"
        class="flow-container-item"
      >
        <img
          :src="$withBase(item.backgroundImage)"
          class="flow-container-item__icon"
        />
        <h3 class="flow-container-item__title">
          {{ item.title }}
        </h3>
        <p class="flow-container-item__word">
          {{ item.desc }}
        </p>
        <router-link :to="item.link">
          <p class="flow-container-item__link">了解详情 →</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    flow() {
      return this.$themeConfig.flow;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/icon.less";

.flow {
  margin: 0 auto;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  background-color: #f2f4f8;

  &-container {
    width: 75%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    &-item {
      max-width: 450px;
      min-width: 250px;

      width: 25%;
      height: 80%;
      min-height: 350px;
      box-sizing: border-box;

      background-color: #fff;

      border-radius: 10px;

      overflow: hidden;
      padding: 20px;

      &__title {
        letter-spacing: 0px;
        color: #333;
        text-align: center;
      }

      &__icon {
        display: block;
        height: 100px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        margin: 30px auto;
      }

      &__word {
        font-size: 20px;
        letter-spacing: 0px;

        margin: 50px auto;
        width: 80%;
        height: 20%;

        color: #333;
        text-align: center;
      }

      &__link {
        margin: 100px auto;

        font-weight: bold;

        text-align: center;
      }
    }
  }

  &-desc {
    width: 600px;
    height: 250px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    &__text {
      font-size: 18px;
      letter-spacing: 0px;
      color: #333;

      display: flex;
      align-items: center;
    }
  }
}
</style>
