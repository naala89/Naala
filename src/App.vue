<template>
  <div class="sm:flex container p-5 mx-auto content justify-betweenflex-wrap">
    <RouterView name="Menu"></RouterView>
    <RouterView class="view main-content w-full order-2"></RouterView>
    <RouterView name="LeftSidebar"></RouterView>
    <RouterView name="RightSidebar"></RouterView>
    <RouterView name="Footer"></RouterView>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/_main.scss";
</style>
