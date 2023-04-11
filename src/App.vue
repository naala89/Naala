<template>
  <img alt="Vue logo" src="@/assets/logo.png">
  <div class="sm:flex container p-5 mx-auto content justify-betweenflex-wrap">
    <RouterView class="view main-content w-full order-2"></RouterView>
    <RouterView name="LeftSidebar" class="view order-1 w-full"></RouterView>
    <RouterView name="RightSidebar" class="view order-3 w-full"></RouterView>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
