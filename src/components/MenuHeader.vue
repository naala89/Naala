<template>
  <el-header>
    <el-menu class="el-menu-demo"
             background-color="#41495C"
             mode="horizontal"
             text-color="#FFF"
             active-text-color="#A0A4AE"
    >
      <el-menu-item>
        <router-link :to="{ name: 'Home' }">
          <img src='@/assets/images/logo-name.png' alt="Naala Logo">
        </router-link>
      </el-menu-item>
      <page-menu></page-menu>
      <el-menu-item class="float-right">
        Call us on:&nbsp;<el-link href="tel:+61279083860">+61 (2) 7908 3860</el-link>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
import PageMenu from "@/components/PageMenu";
export default {
  name: 'MenuHeader',
  components: {PageMenu},
  component: PageMenu,
  PageMenu: "page-menu",
}
</script>

<style scoped lang="scss">
.el-menu {
  height: 80px;
}
a {
  color: #ddd;
}
.float-right {
  margin-left: auto;
}
</style>
