<template>
  <el-main>

    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/services' }">Services</el-breadcrumb-item>
    </el-breadcrumb>

    <h1>Services</h1>
    <p>We love learning new things, but right now we're really good at this:</p>

    <el-row>
      <service-box title="Drupal Development"
                   paragraph="We've been building complex Drupal sites for a few years now and really love the flexibility & scalability of the platform."
                   :image="require('@/assets/images/drupal.png')"
                   alt_text="Drupal logo">
      </service-box>

      <service-box title="API, Middleware and Integration"
                   paragraph="We work with many products, including <a href='https://www.apiopoenstudio.com'>ApiOpenStudio</a>, and we are major advocates of API-first design. </p><p>We will help design and develop the interface for your application to the outside world, as well as the integrations that you need for your business processes need."
                   :image="require('@/assets/images/api.webp')"
                   alt_text="API">
      </service-box>
    </el-row>

    <el-row>
      <service-box title="Custom Application Development"
                   paragraph="We work with agencies, startups, individuals and businesses to help them achieve their vision.</p><p>We specialise in bespoke PHP, VueJS and API development."
                   :image="require('@/assets/images/cogs.jpg')"
                   alt_text="Cog">
      </service-box>

      <service-box title="Architecture Design"
                   paragraph="Good, forward thinking architecture is a major business asset.</p><p>We will help you quickly design the best solution for you immediate needs and enable you to cater for growth."
                   :image="require('@/assets/images/architecture.jpg')"
                   alt_text="Architecture design">
      </service-box>
    </el-row>

  </el-main>
</template>

<script>
import ServiceBox from "@/components/ServiceBox";
export default {
  name: 'ServicesMain',
  components: {ServiceBox},
  component: {ServiceBox},
  ServiceBox: "service-box",
}
</script>

<style></style>
