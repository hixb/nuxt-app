<script setup lang="ts">
import { useCommonStore } from "~/store";
import { ref } from "#imports";
import { IColorPickerSelect } from "assets/interface/pages";
import { getLocalStorage, setLocalStorage } from "@/plugins/utils";

const dark = ["rgba(24, 24, 24)", "rgba(255, 255, 255, 0.8)"];
const light = ["rgba(255, 255, 255)", "rgba(44, 62, 80)"];
const otherDark = ["rgba(17, 17, 17)"];
const otherLight = ["rgba(243, 244, 244)"];
const darkShadow = ["0 1px 8px 0 rgba(0, 0, 0, 0.6)", "0 2px 16px 0 rgba(0, 0, 0, 0.7)"];
const lightShadow = ["0 1px 8px 0 rgba(0, 0, 0, 0.2)", "0 2px 16px 0 rgba(0, 0, 0, 0.2)"];
const darkBorColor = ["rgba(0, 0, 0, 0.3)"];
const lightBorColor = ["rgba(234, 236, 239)"];

const colorPickerSelect = ref<IColorPickerSelect[]>([
  {
    id: 0,
    name: "dark"
  },
  {
    id: 1,
    name: "auto"
  },
  {
    id: 2,
    name: "light"
  }
]);

const commonStore = useCommonStore();
const useIsShowPicker = () => ref(false);
const useDefaultTheme = () => ref(1);

const isShowPicker = useIsShowPicker();
let defaultTheme = useDefaultTheme();

const toggleTheme = (index: number) => {
  defaultTheme = index;
  const curTheme = themeIf(index);
  switch (index) {
    case 0:
    case 2:
      currentTheme(curTheme[0], curTheme[1], curTheme[2], curTheme[3], curTheme[4], curTheme[5]);
      break;
    case 1:
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? currentTheme(curTheme[0], curTheme[1], curTheme[2], curTheme[3], curTheme[4], curTheme[5])
        : currentTheme(curTheme[0], curTheme[1], curTheme[2], curTheme[3], curTheme[4], curTheme[5]);
      break;
  }
  curTheme.push({ id: index });
  setLocalStorage("my_theme", JSON.stringify(curTheme));
};

const themeIf = (index: number) => {
  let themeBgColor, themeTextColor, themeOterBgc, curShadow, curShadowHov, curBorColor;
  switch (index) {
    case 0:
      themeBgColor = dark[0];
      themeTextColor = dark[1];
      themeOterBgc = otherDark[0];
      curShadow = darkShadow[0];
      curShadowHov = darkShadow[1];
      curBorColor = darkBorColor[0];
      break;
    case 2:
      themeBgColor = light[0];
      themeTextColor = light[1];
      themeOterBgc = otherLight[0];
      curShadow = lightShadow[0];
      curShadowHov = lightShadow[1];
      curBorColor = lightBorColor[0];
      break;
    default:
      themeBgColor = dark[0];
      themeTextColor = dark[1];
      themeOterBgc = otherDark[0];
      curShadow = darkShadow[0];
      curShadowHov = darkShadow[1];
      curBorColor = darkBorColor[0];
      break;
  }
  return [themeBgColor, themeTextColor, themeOterBgc, curShadow, curShadowHov, curBorColor];
};

const currentTheme = (
  curThemeBgc: string | null,
  curThemeColor: string | null,
  curOterBgc: string | null,
  curShadow: string | null,
  curShadowHov: string | null,
  curBorColor: string | null
) => {
  document.documentElement.style.setProperty("--my-cur-default-theme-bgc", curThemeBgc);
  document.documentElement.style.setProperty("--my-cur-default-theme-color", curThemeColor);
  document.documentElement.style.setProperty("--my-cur-default-theme-oter", curOterBgc);
  document.documentElement.style.setProperty("--my-cur-default-theme-shadow", curShadow);
  document.documentElement.style.setProperty("--my-cur-default-theme-shadow-hover", curShadowHov);
  document.documentElement.style.setProperty("--my-cur-default-theme-bor-color", curBorColor);
};
</script>

<template>
  <header>
    <div ref="scheduleBar" class="schedule"></div>
    <NuxtLink to="/">
      <h1>
        <img src="~/assets/images/logo.png" alt="logo" />
        <span>{{ commonStore.APP_PROJECT_NAME }}</span>
      </h1>
    </NuxtLink>
    <div class="links">
      <div class="color-picker">
        <i class="iconfont ice-color" @click="isShowPicker = !isShowPicker"></i>
        <div :class="['color-picker-menu', !isShowPicker ? 'hide-picker' : 'show-picker']">
          <span class="title">选择颜色</span>
          <ul>
            <li
              v-for="(item, index) in colorPickerSelect"
              :key="item.id"
              :class="{ active: defaultTheme === index }"
              @click="toggleTheme(index)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "assets/css/global/public";
@import "assets/css/common/header";
</style>
