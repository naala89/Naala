<template>
  <el-menu-item>
    <router-link :to="{ name: 'Home' }" custom v-slot="{ href, navigate }">
      <a :href="href" @click="navigate">Home</a>
    </router-link>
  </el-menu-item>
  <el-menu-item>
    <router-link :to="{ name: 'About' }" custom v-slot="{ href, navigate }">
      <a :href="href" @click="navigate">About</a>
    </router-link>
  </el-menu-item>
  <el-menu-item>
    <router-link :to="{ name: 'Services' }" custom v-slot="{ href, navigate }">
      <a :href="href" @click="navigate">Services</a>
    </router-link>
  </el-menu-item>
  <el-menu-item>
    <router-link :to="{ name: 'Portfolio' }" custom v-slot="{ href, navigate }">
      <a :href="href" @click="navigate">Portfolio</a>
    </router-link>
  </el-menu-item>
  <!--      <el-menu-item index="6">-->
  <!--        <router-link :to="{ name: 'Blog' }" custom v-slot="{ href, navigate }">-->
  <!--          <a :href="href" @click="navigate">Blog</a>-->
  <!--        </router-link>-->
  <!--      </el-menu-item>-->
  <el-menu-item>
    <router-link :to="{ name: 'Contact' }" custom v-slot="{ href, navigate }">
      <a :href="href" @click="navigate">Contact</a>
    </router-link>
  </el-menu-item>
</template>

<script>
export default {}
</script>

<style>
</style>
