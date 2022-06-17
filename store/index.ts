import { defineStore } from "pinia";
import { COMMON } from "assets/interface/store";

export const useCommonStore = defineStore({
  id: "common-store",
  state: (): COMMON => {
    return {
      MY_NAME: "dawnIceZhu",
      APP_PROJECT_NAME: "dawnIceZhu's Notes",
      APP_PROJECT_DESC: "People can skip meals for twelve days, But programming can’t stop writing for a day."
    };
  },
  actions: {},
  getters: {}
});
