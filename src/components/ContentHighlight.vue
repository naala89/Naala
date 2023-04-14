<template>
  <el-aside>
    <h3>Latest Posts</h3>
    <latest-posts></latest-posts>
  </el-aside>
</template>

<script>
import LatestPosts from "@/components/LatestPosts"
export default {
  components: {LatestPosts},
  LatestPosts: "latest-posts"
}
</script>

<style scoped lang="scss">
.el-aside {
  margin-right: 19px;
  h3 {
    margin-bottom: 0;
    margin-right: 1px;
    background-color: black;
  }
}
</style>
