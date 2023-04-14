<template>
  <el-menu class="el-menu-vertical-demo"
           background-color="#000"
           text-color="#fff"
           active-text-color="#ffd04b">
    <el-menu-item index="1">
      <router-link :to="{ name: 'LCNCDefinition' }" custom v-slot="{ href, navigate }">
        <a :href="href" @click="navigate">Low-Code, No-Code, LCNC: The formal definition</a>
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
    </el-menu-item>
    <el-menu-item index="3">
    </el-menu-item>
    <el-menu-item index="4">
    </el-menu-item>
    <el-menu-item index="5">
    </el-menu-item>
    <el-menu-item index="6">
    </el-menu-item>
    <el-menu-item index="7">
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'LatestPosts',
  props: {}
}
</script>

<style scoped>
</style>
