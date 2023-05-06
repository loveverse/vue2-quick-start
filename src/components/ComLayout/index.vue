<template>
  <transition name="move" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: "ComLayout",
};
</script>

<style lang="scss" scoped>
@include tranition;
// .tranition();
</style>
