<template>
  <div>
    <p>about</p>
    <div class="face face1"></div>
    <div class="face face2"></div>
    <div class="face face3"></div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
.face {
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
}

.face1 {
  background-image: url("../assets/1.png");
}
.face2 {
  background-image: url("../assets/2.png");
}
.face3 {
  background-image: url("../assets/3.png");
}
</style>
