<template>
  <el-header>
    <el-menu class="el-menu-demo"
             background-color="#41495C"
             mode="horizontal"
             text-color="#FFF"
             active-text-color="#A0A4AE"
    >
      <el-menu-item index="1">
        <router-link :to="{ name: 'home' }" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate"><img src='@/assets/images/logo.png' alt="Naala Logo"></a>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{ name: 'home' }" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate">Home</a>
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link :to="{ name: 'about' }" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate">About</a>
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link :to="{ name: 'services' }" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate">Services</a>
        </router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link :to="{ name: 'portfolio' }" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate">Portfolio</a>
        </router-link>
      </el-menu-item>
<!--      <el-menu-item index="6">-->
<!--        <router-link :to="{ name: 'blog' }" custom v-slot="{ href, navigate }">-->
<!--          <a :href="href" @click="navigate">Blog</a>-->
<!--        </router-link>-->
<!--      </el-menu-item>-->
      <el-menu-item index="7">
        <router-link :to="{ name: 'contact' }" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate">Contact</a>
        </router-link>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'MenuHeader',
}
</script>

<style scoped lang="scss">
.el-menu {
  height: 80px;
}
</style>
