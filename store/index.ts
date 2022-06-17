import { defineStore } from "pinia";
import { COMMON } from "assets/interface/store";

export const useCommonStore = defineStore({
  id: "common-store",
  state: (): COMMON => {
    return {
      APP_PROJECT_NAME: "HELLO",
      APP_PROJECT_DESC: "https://notes.vueice.com/avatar.png"
    };
  },
  actions: {},
  getters: {}
});
