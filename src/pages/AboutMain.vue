<template>
  <el-main>

    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/about' }">About</el-breadcrumb-item>
    </el-breadcrumb>

    <h1>About Naala</h1>

    <h2>Experienced delivery of the right solutions</h2>

    <p>Naala is an Australian digital services agency specialising in APIs, middleware and integration, content
      management and development.</p>
    <p>Our philosophy is simple:</p>

    <el-card shadow="never">
      <p>Be accountable and honest with clarity at all times.</p>
      <p>Help businesses understand & formulate their online requirements.</p>
      <p>Choose the right tools for the right solution.</p>
    </el-card>

    <p>Naala was founded in 2013 by John Avery and is based out of Sydney, Australia. John has extensive experience with
      enterprise projects and we use that test, track and learn approach for any sized solution. For medium to large
      projects, we have a small army of developers at our disposal.</p>

    <bio-box name="John Avery"
             title="Technical Director"
             :image="require('@/assets/images/john.jpg')"
             paragraph="<p>John came from a background to the world of web software development after leaving England in
             1999. He has worked for Yahoo!7, Bayer (UK), News Ltd, 1-Stop, The Playhouse Group, Australian Doctors
             Group and several other major companies, and is now the technical director at Naala and specialises in PHP,
             VueJS, Drupal, APIs & integration, and architecture. John is an active member of the Drupal community.</p>
             <p>He has also worked on many freelance projects, such as Swellnet, VLONE, Sydney Opera House and many
             more...</p>">
    </bio-box>

    <bio-box name="Matt Greally"
             title="Business Director"
             :image="require('@/assets/images/matt.jpeg')"
             paragraph="<p>Matt's background includes over 15 years of solution sales in SaaS and Digital Agencies. He
             has extensive experience in new product launches. Even winning a Hackathon while working in sales.</p>
             <p>He has has worked for several successful unicorn's that have successfully IPO'd, such as NetSuite, BigCommerce and Zuora</p>">
    </bio-box>

  </el-main>
</template>

<script>
import BioBox from "@/components/BioBox"

export default {
  components: { BioBox },
  BioBox: "bio-box",
}
</script>

<style></style>
