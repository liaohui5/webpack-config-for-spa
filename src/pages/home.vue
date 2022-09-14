<template>
  <div>
    <p>home</p>
    <img src="../assets/logo.png" class="img" />
  </div>
</template>

<script>
export default {
  name: "home",
  created() {
    // test externals
    var obj = {
      id: 1001,
      name: "hello world",
    };
    _.forIn(obj, (key, val, obj) => {
      console.log("key, val, obj:", key, val, obj);
    });
  },
};
</script>

<style lang="scss" scoped>
.img {
  max-width: 300px;
}
</style>
