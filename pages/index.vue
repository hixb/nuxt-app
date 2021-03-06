<script setup lang="ts">
import { useRouter, useState, ref } from "#imports";
import { useCommonStore } from "~/store";
import { useHead } from "#head";
import { IMenuList, IListData } from "assets/interface/pages";
import Banner from "~/components/common/Banner.vue";

const menuList = ref<IMenuList[]>([
  {
    ident: "category",
    title: "分类",
    icon: "category",
    className: "category",
    list: [
      {
        name: "随笔",
        count: 7,
        link: "",
        bgc: "#df5865"
      },
      {
        name: "vpn",
        count: 7,
        link: "",
        bgc: "#6bcc8a"
      }
    ]
  },
  {
    ident: "tag",
    title: "标签",
    icon: "tag",
    className: "tag",
    list: [
      {
        name: "all",
        link: "",
        bgc: "#df5865"
      },
      {
        name: "随笔",
        link: "",
        bgc: "#6bcc8a"
      }
    ]
  },
  {
    ident: "friend",
    title: "友链",
    icon: "friend",
    className: "friend",
    list: [
      {
        name: "午后南杂",
        link: "",
        bgc: "#df5865",
        avatar: "https://1.gravatar.com/avatar/96c4520adcd6c7233dd9886bef10d862?s=50&amp;d=mm&amp;r=x",
        desc: "Enjoy when you can, and endure when you must."
      },
      {
        name: "vuepress-theme-reco",
        link: "",
        bgc: "#6bcc8a",
        avatar: "https://1.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e?s=50&amp;d=mm&amp;r=x",
        desc: "A simple and beautiful vuepress Blog & Doc theme."
      }
    ]
  }
]);

const listData = ref<IListData[]>([
  {
    id: 1,
    title: "1",
    description: "test1",
    author: "zhuxb",
    createtime: "2022-10-10"
  }
]);

const useIsFixed = () => useState<boolean>("useIsFixed", () => false);

const router = useRouter();
const commonStore = useCommonStore();
const isFixed = useIsFixed();

useHead({
  title: "My App",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test"
  }
});
</script>

<template>
  <Banner />
  <main class="main">
    <menu ref="menu" :class="['user-info', isFixed ? 'menu-fixed' : '']">
      <div class="my-info">
        <div class="info-avatar">
          <img src="https://notes.vueice.com/avatar.png" alt="" >
        </div>
        <h3 class="info-name">
          {{ commonStore.APP_PROJECT_NAME }}
        </h3>
        <div class="article-tag">
          <div class="art-num">
            <span>17</span>
            <span>文章</span>
          </div>
          <div class="tag-num">
            <span>8</span>
            <span>标签</span>
          </div>
        </div>
      </div>
      <div v-for="(item, index) in menuList" :key="index" :class="item.className">
        <p class="title">
          <i :class="['iconfont', `ice-${item.icon}`]" />
          <span>{{ item.title }}</span>
        </p>
        <ul>
          <li
            v-for="(list, i) in item.list"
            :key="i"
            :style="item.ident === 'tag' ? `background-color: ${list.bgc};` : ''"
            class="gradient-border"
          >
            <nuxt-link :to="item.ident !== 'friend' ? list.link : ''">
              <i v-if="item.ident === 'friend'" :style="{ backgroundColor: list.bgc }" />
              <span>{{ list.name }}</span>
              <em v-if="item.ident === 'category'" :style="{ backgroundColor: list.bgc }">
                {{ list.count }}
              </em>
              <div v-if="item.ident === 'friend'" class="friend-box">
                <div class="info-title">
                  <div class="info">
                    <img :src="list.avatar" alt="" >
                    <h4>{{ list.name }}</h4>
                  </div>
                  <span class="link" :style="{ backgroundColor: list.bgc }"> go </span>
                </div>
                <div class="desc">
                  {{ list.desc }}
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </menu>
    <article :class="isFixed ? 'offset-val' : ''">
      <NuxtLink v-for="(item, index) in listData" :key="index" :to="'/article/' + item.id" class="article-link gradient-border">
        <h2 class="title">
          {{ item.title }}
        </h2>
        <div v-if="item.description && item.description !== ''" class="description">
          {{ item.description }}
        </div>
        <div class="info">
          <ul>
            <li>
              <i class="iconfont ice-account" />
              <span>{{ item.author }}</span>
            </li>
            <li>
              <i class="iconfont ice-date" />
              <span>{{ item.createtime }}</span>
            </li>
          </ul>
        </div>
      </NuxtLink>
    </article>
  </main>
</template>

<style scoped lang="scss">
@import "assets/css/global/public";
@import "assets/css/pages/index";
</style>
