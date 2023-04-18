<template>
  <el-header>
    <el-menu class="el-menu-demo"
             background-color="#41495C"
             mode="horizontal"
             text-color="#FFF"
             active-text-color="#A0A4AE"
    >
      <el-menu-item>
        <router-link :to="{ name: 'Home' }" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate"><img src='@/assets/images/logo-name.png' alt="Naala Logo"></a>
        </router-link>
      </el-menu-item>
      <page-menu></page-menu>
      <el-menu-item style='margin-left: auto;'>
        Call us on:&nbsp;<a href="tel:+61279083860">+61 (2) 7908 3860</a>
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
</style>
