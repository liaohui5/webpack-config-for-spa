<template>
  <div id="home">
    <p>home</p>
    <div>
      <img src="../assets/IeoTkE4xBJ4.jpg" class="bigimg" />
      <img src="../assets/logo.png" class="img" />
    </div>
    <button @click="load">async loading</button>
  </div>
</template>

<script>
export default {
  name: "home",
  created() {
    // test externals
    var obj = { id: 1001, name: "hello world" };
    _.forIn(obj, (key, val, obj) => {
      console.log("key, val, obj:", key, val, obj);
    });
  },
  methods: {
    async load() {
      // 预加载: https://v4.webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules
      // webpackPrefetch: 预加载
      // webpackChunkName: 分割代码打包的时候文件名
      const { default: $ } = await import(
        /* webpackPrefetch: true */
        /* webpackChunkName: "jquery" */
        "jquery"
      );
      $("#home").append($("<div>异步加载jquery创建的div<div>")[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
.img {
  max-width: 200px;
}
.bigimg {
  max-height: 200px;
}
</style>
