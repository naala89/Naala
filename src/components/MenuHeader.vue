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
</style>
