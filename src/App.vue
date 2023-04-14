<template>
  <RouterView name="Header"></RouterView>
  <el-container>
    <RouterView name="LeftSidebar"></RouterView>
    <RouterView></RouterView>
    <RouterView name="RightSidebar"></RouterView>
  </el-container>
  <RouterView name="Footer"></RouterView>
</template>

<style lang="scss">
@import "@/assets/scss/_main.scss";
</style>
