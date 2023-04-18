<template>
  <el-card>
    <a :href="link" target="_blank">
      <img :src="image" width="250" :alt="alt_text">
      <h3>{{title}}</h3>
      <p><i>({{subtext}})</i></p>
    </a>
  </el-card>
</template>

<script>
export default {
  props: {
    link: String,
    title: String,
    subtext: String,
    image: String,
    alt_text: String,
    image_bg: String,
  },
}
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 5px;
  margin-bottom: 5px;
}
img {
  background-color: v-bind(image_bg);
}
</style>
