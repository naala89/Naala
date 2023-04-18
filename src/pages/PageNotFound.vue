<template>
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="22">
        <el-card class="naala-card">
          <h1>Not found <span>:(</span></h1>
          <p>Sorry, but the page you were trying to view does not exist.</p>
          <p>It looks like this was the result of either:</p>
          <ul>
            <li>a mistyped address</li>
            <li>an out-of-date link</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {}
</script>

<style scoped>
.naala-card {
  margin-top: 20px;
}
</style>
