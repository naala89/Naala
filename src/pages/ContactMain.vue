<template>
  <el-main>

    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/about' }">About</el-breadcrumb-item>
    </el-breadcrumb>

    <h1>Contact Us</h1>

    <h2>Naala is a digital business based in Sydney, Australia. Our philosophy is to <em>keep things simple, empower our customers and deliver amazing work</em>.</h2>
    <p>We take an enterprise approach to smaller websites &amp; applications, from detailed planning through to wireframes, project management, testing and delivery.</p>

    <el-row type="flex" justify="center">
      <el-col :span="6">
        <img src="@/assets/images/business-team.png" alt="Business Team At Phone And Computer Royalty Free Vector" class="image" />
      </el-col>
    </el-row>
    <p>Get in contact with is and see how we can help you with Integrations, API, Web Development, Architecture and Strategy</p>
    <p>Ring us on:&nbsp;<a href="tel:+61279083860">+61 (2) 7908 3860</a></p>
    <p>Email us on:&nbsp;<a href="mailto:contact@naala.com.au">contact@naala.com.au</a></p>
  </el-main>
</template>

<script>
export default {}
</script>

<style scoped>
.image {
  width: 100%;
}
</style>
