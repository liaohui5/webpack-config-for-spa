"use strict";

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier-vue/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 12,
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
