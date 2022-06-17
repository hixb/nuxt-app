<script setup lang="ts">
import { useCommonStore } from "~/store";

const commonStore = useCommonStore();
</script>

<template>
  <div ref="eleHeight" class="banner">
    <h2>{{ commonStore.APP_PROJECT_NAME }}</h2>
    <p>{{ commonStore.APP_PROJECT_DESC }}</p>
  </div>
</template>

<style scoped lang="scss">
@import "assets/css/global/public";
.banner {
  @include flex;
  @include flex-ali-center;
  flex-direction: column;
  justify-content: center;
  @include area-h(100vh);
  background: url(https://notes.vueice.com/1.jpg) center center / cover no-repeat;

  * {
    @include color(var(--my-cur-default-theme-color));
  }

  h2 {
    @include fz(35px);
  }

  p {
    @include fz(21px);
    @include mar-2(10px, 0);
  }
}
</style>
