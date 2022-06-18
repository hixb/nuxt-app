// import Vue from "vue";

/**
 * 获取本地存储
 * @param name
 */
const getLocalStorage = (name: string) => {
  return window.localStorage.getItem(name);
};

/**
 * 设置本地存储
 * @param name
 * @param val
 */
const setLocalStorage = (name: string, val: string) => {
  window.localStorage.setItem(name, val);
};

/**
 * 清除本地存储
 * @param name
 */
const removeLocalStorage = (name: string) => {
  window.localStorage.removeItem(name);
};

/**
 * 获取cookie
 * @param cookieName
 * @returns {string|null}
 */
const getCookie = (cookieName: string) => {
  const arr = document.cookie.match(new RegExp("(^| )" + cookieName + "=([^;]*)(;|$)"));
  if (arr != null) {
    return unescape(arr[2]);
  }
  return null;
};

/**
 * 获取当月天数
 * @returns {number}
 */
const mGetDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const d = new Date(year, month, 0);
  return d.getDate();
};

export const utils = {
  /**
   * 获取指定cookie
   * 是否登录判断规则 ==> *_当月时间÷5000_当天时间到0点的时间戳÷5000_zxb
   * @returns {string}
   */
  isLogin() {
    return getCookie("is_login") == `*_${mGetDate() / 5000}_${new Date(new Date().toLocaleDateString()).getTime() / 5000}_zxb`;
  },
  /**
   * 时间戳转换为时间
   * @param timestamp
   * @returns {string}
   */
  timestampToTime(timestamp: string | number) {
    const date = new Date(timestamp);
    const Y = date.getFullYear() + "-";
    const M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
    const D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
    const h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
    const m = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
    const s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
  }
};

export { getLocalStorage, setLocalStorage, removeLocalStorage };

// Vue.prototype.$utils = utils;
