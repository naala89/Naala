<template>
  <el-card shadow="always" class="bio">
    <template #header>
      <h3>{{ name }} - {{ title }}</h3>
    </template>
      <el-row>
        <el-col :xl="4" :lg="4" :md="6" :sm="24" :xs="24">
          <img :src="image" :alt="alt_text"  height="250"/>
        </el-col>
        <el-col :xl="18" :lg="18" :md="14" :sm="24" :xs="24" v-html="paragraph"></el-col>
      </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
    paragraph: String,
    image: String,
    alt_text: String,
  }
}
</script>

<style scoped lang="scss">
.bio {
  margin: 20px 0;

  el-col {
    margin: 0 20px;
  }
}
</style>
