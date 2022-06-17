<script setup lang="ts">
import { useRouter } from "#imports";
import { useCommonStore } from "~/store";

const router = useRouter();
const commonStore = useCommonStore();

const jump = () => {
  const ID = parseInt(Math.random().toFixed(6).slice(-6));
  router.push(`/article-${_getRandomString(4).toLowerCase()}/${ID}`);
};

const _getRandomString = (len?: number) => {
  len = len || 32;
  let $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  let maxPos = $chars.length;
  let pwd = "";
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};
</script>

<template>
  <div class="home" @click="jump">
    <span>首页</span>
    <p>pinia: {{ commonStore["APP_NAME"] }}</p>
  </div>
</template>

<style scoped lang="scss">
.home {
  span {
    color: red;
  }
}
</style>
