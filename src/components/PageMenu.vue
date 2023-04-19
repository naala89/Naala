<template>
  <el-menu-item>
    <router-link :to="{ name: 'Home' }">Home</router-link>
  </el-menu-item>
  <el-menu-item>
    <router-link :to="{ name: 'About' }">About</router-link>
  </el-menu-item>
  <el-menu-item>
    <router-link :to="{ name: 'Services' }">Services</router-link>
  </el-menu-item>
  <el-menu-item>
    <router-link :to="{ name: 'Portfolio' }">Portfolio</router-link>
  </el-menu-item>
  <!--      <el-menu-item index="6">-->
  <!--        <router-link :to="{ name: 'Blog' }" custom v-slot="{ href, navigate }">Blog</router-link>-->
  <!--      </el-menu-item>-->
  <el-menu-item>
    <router-link :to="{ name: 'Contact' }">Contact</router-link>
  </el-menu-item>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  color: #DDD;
}
</style>
