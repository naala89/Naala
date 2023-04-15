<template>
  <el-main>

    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/portfolio' }">Portfolio</el-breadcrumb-item>
    </el-breadcrumb>

    <h1>Portfolio</h1>

    <portfolio-box link="https://www.caresouth.org.au/"
                   :image="require('@/assets/images/caresouth.jpg')"
                   alt_text="CareSouth"
                   image_bg="white"
                   title="CareSouth"
                   subtext="Drupal site"></portfolio-box>

    <portfolio-box link="https://www.picturedrift.com.au/"
                   :image="require('@/assets/images/picturedrift.png')"
                   alt_text="PictureDrift"
                   image_bg="black"
                   title="PictureDrift"
                   subtext="Drupal site"></portfolio-box>

    <portfolio-box link="https://www.swellnet.com/"
                   :image="require('@/assets/images/swellnet.svg')"
                   alt_text="Swellnet"
                   image_bg="white"
                   title="Swellnet"
                   subtext="Enterprise Drupal site, with API & integration"></portfolio-box>

    <portfolio-box link="https://vlone.ltd/"
                   :image="require('@/assets/images/vlone.png')"
                   alt_text="VLONE"
                   image_bg="white"
                   title="VLONE"
                   subtext="Heavily customised Shopify site"></portfolio-box>

    <portfolio-box link="https://ofracosmetics.com"
                   image="https://cdn.shopify.com/s/files/1/0989/8416/files/ofra-lockup.svg?v=1645014376"
                   alt_text="Ofra"
                   image_bg="white"
                   title="Ofra"
                   subtext="Drupal e-commerce site - sadly departed"></portfolio-box>
  </el-main>
</template>

<script>
import PortfolioBox from "@/components/PortfolioBox";
export default {
  components: {PortfolioBox},
  PortfolioBox: "portfolio-box",
}
</script>

<style scoped>
</style>
