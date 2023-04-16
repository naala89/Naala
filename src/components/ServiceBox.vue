<template>
  <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
    <el-card>
      <h2>{{ title }}</h2>
      <p v-html="paragraph"></p>
      <el-row type="flex" justify="center">
        <img :src="image" :alt="alt_text"/>
      </el-row>
    </el-card>
  </el-col>
</template>

<script>
export default {
  props: {
    title: String,
    paragraph: String,
    image: String,
    alt_text: String
  }
}
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 5px;
  margin-bottom: 5px;
}
@media screen and (min-width: 768px) {
  .el-card {
    min-height: 26rem;
  }
}
img {
  max-height: 200px;
}
</style>
