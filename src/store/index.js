import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    // authUser: null,
    authUser: {
      id: 1001,
      username: "tom",
      token: "login-token-string",
    },
  }),
  getters: {
    // 是否登录
    isLogin: (state) => !!state.authUser,
  },
});
