<template>
  <el-footer>
    <el-row :gutter="20">

      <el-col :span="8">
        <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1">
              <h3>Menu</h3>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link :to="{ name: 'home' }" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">Home</a>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link :to="{ name: 'about' }" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">About</a>
            </router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link :to="{ name: 'services' }" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">Services</a>
            </router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link :to="{ name: 'portfolio' }" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">Portfolio</a>
            </router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <router-link :to="{ name: 'blog' }" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">Blog</a>
            </router-link>
          </el-menu-item>
          <el-menu-item index="7">
            <router-link :to="{ name: 'contact' }" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">Contact</a>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="8">
        <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1">
            <h3>Latest Posts</h3>
          </el-menu-item>
          <el-menu-item index="2">
            <a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a>
          </el-menu-item>
          <el-menu-item index="3">
            <a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</a>
          </el-menu-item>
          <el-menu-item index="4">
            <a href="#">Aliquam tincidunt mauris eu risus.</a>
          </el-menu-item>
          <el-menu-item index="5">
            <a href="#">Vestibulum auctor dapibus neque.</a>
          </el-menu-item>
          <el-menu-item index="6">
            <a href="#">Nunc dignissim risus id metus.</a>
          </el-menu-item>
          <el-menu-item index="7">
            <a href="#">Cras ornare tristique elit.</a>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="8">
        <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1">
            <h3>Contact Us</h3>
          </el-menu-item>
          <el-menu-item index="2">
            <dl>
              <dt>Enquiries:</dt>
              <dd><a href="#">Click here</a></dd>
            </dl>
            <dl>
              <dt>Skype:</dt>
              <dd>laughingman77</dd>
            </dl>
            <dl>
              <dt>Tel:</dt>
              <dd>0400555444</dd>
            </dl>
          </el-menu-item>
<!--          <el-menu-item index="3">-->
<!--            <h3>What we're listening to</h3>-->
<!--            <iframe src="https://embed.spotify.com/?uri=spotify:track:41X9To0bQ4fpoSRri4NHiI" width="300"-->
<!--                    height="80" frameborder="0" allowtransparency="true"></iframe>-->
<!--          </el-menu-item>-->
        </el-menu>
      </el-col>

    </el-row>
  </el-footer>
</template>

<script>
export default {
  name: 'FooterRegion',
}
</script>

<style scoped>
</style>
