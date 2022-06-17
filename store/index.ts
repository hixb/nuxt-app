import { defineStore } from "pinia";
import { COMMON } from "assets/interface/store";

export const useCommonStore = defineStore({
  id: "common-store",
  state: (): COMMON => {
    return {
      APP_NAME: "HELLO",
      AVATAR: "https://notes.vueice.com/avatar.png"
    };
  },
  actions: {},
  getters: {
    appName: state => state.APP_NAME
  }
});
