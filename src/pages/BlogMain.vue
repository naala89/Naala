<template>
  <el-main>

    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/blog' }">Blog</el-breadcrumb-item>
    </el-breadcrumb>

    <h1>Blog</h1>

    <h3>Our latest blog posts:</h3>

    <ul>
      <li>
        <el-link href="/blog/lcnc-definition">
          <h4>Low-Code, No-Code, LCNC: The formal definition</h4>
        </el-link>
      </li>
    </ul>

  </el-main>
</template>

<script>
export default {}
</script>

<style></style>
