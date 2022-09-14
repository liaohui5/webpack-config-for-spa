"use strict";

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["vue"],
  globals: {
    _: "readonly", // lodash
  },
  rules: {
    "vue/multi-word-component-names": ["off"],
  },
};
