<template>
  <el-main>

    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/services' }">Services</el-breadcrumb-item>
    </el-breadcrumb>

    <h1>Services</h1>

    <p>We love learning new things, but right now we're really good at this:</p>

    <h2>Drupal Development</h2>
    <p>We've been building complex Drupal sites for a few years now and really love the flexibility &amp; scalabilty of the platform.</p>
    <img src="@/assets/images/drupal.svg" height="150" alt="Drupal logo"/>

    <h2>API, Middleware and Integration </h2>
    <p>We work with many products, including <a href="https://www.apiopoenstudio.com">ApiOpenStudio</a>, and we are major advocates of API-first design.</p>
    <p>We will help design and develop the interface for your application to the outside world, as well as the integrations that you need for your business processes need.</p>
    <img src="@/assets/images/api.webp" height="150" alt="API"/>

    <h2>Custom Application Development</h2>
    <p>We work with agencies, startups, individuals and businesses to help them achieve their vision.</p>
    <p>We specialise in bespoke PHP, VueJS and API development.</p>
    <img src="@/assets/images/cogs.jpg" height="150" alt="Cog"/>

    <h2>Architecture Design</h2>
    <p>Good, forward thinking architecture is a major business asset.</p>
    <p>We will help you quickly design the best solution for you immediate needs and enable you to cater for growth.</p>
    <img src="@/assets/images/architecture.jpg" height="150" alt="Architecture design"/>

  </el-main>
</template>

<script>
export default {
  name: 'ServicesMain'
}
</script>

<style scoped lang="scss">
</style>
