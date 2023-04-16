<template>
  <el-menu-item>
    <router-link :to="{ name: 'home' }" custom v-slot="{ href, navigate }">
      <a :href="href" @click="navigate">Home</a>
    </router-link>
  </el-menu-item>
  <el-menu-item>
    <router-link :to="{ name: 'about' }" custom v-slot="{ href, navigate }">
      <a :href="href" @click="navigate">About</a>
    </router-link>
  </el-menu-item>
  <el-menu-item>
    <router-link :to="{ name: 'services' }" custom v-slot="{ href, navigate }">
      <a :href="href" @click="navigate">Services</a>
    </router-link>
  </el-menu-item>
  <el-menu-item>
    <router-link :to="{ name: 'portfolio' }" custom v-slot="{ href, navigate }">
      <a :href="href" @click="navigate">Portfolio</a>
    </router-link>
  </el-menu-item>
  <!--      <el-menu-item index="6">-->
  <!--        <router-link :to="{ name: 'blog' }" custom v-slot="{ href, navigate }">-->
  <!--          <a :href="href" @click="navigate">Blog</a>-->
  <!--        </router-link>-->
  <!--      </el-menu-item>-->
  <el-menu-item>
    <router-link :to="{ name: 'contact' }" custom v-slot="{ href, navigate }">
      <a :href="href" @click="navigate">Contact</a>
    </router-link>
  </el-menu-item>
</template>

<script>
export default {}
</script>

<style>
</style>
