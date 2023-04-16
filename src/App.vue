<template>
  <RouterView name="Header"></RouterView>
  <el-container>
    <RouterView name="LeftSidebar"></RouterView>
    <RouterView></RouterView>
    <RouterView name="RightSidebar"></RouterView>
  </el-container>
  <RouterView name="Footer"></RouterView>
</template>

<script setup>
import router from "@/router";
const defaultTitle = "Naala"
router.beforeEach((to, from, next) => {
  document.title = defaultTitle
  if (to.name) {
    document.title = document.title + " | " + to.name
  }
  next()
})
</script>

<style lang="scss">
@import "@/assets/scss/_main.scss";
</style>
