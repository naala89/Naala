<template>
  <el-footer>
    <el-row>

      <el-col :xl="3" :lg="0" :md="0" :sm="0" :xs="0">
        <el-menu class="el-menu-vertical-demo"
                 background-color="#000"
                 text-color="#fff"
                 active-text-color="#ffd04b">
        </el-menu>
      </el-col>

      <el-col :xl="6" :lg="8" :md="12" :sm="12" :xs="24">
        <el-menu class="el-menu-vertical-demo"
                 background-color="#000"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <h3>Menu</h3>
          <el-menu-item index="1">
            <router-link :to="{ name: 'home' }" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">Home</a>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link :to="{ name: 'about' }" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">About</a>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link :to="{ name: 'services' }" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">Services</a>
            </router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link :to="{ name: 'portfolio' }" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">Portfolio</a>
            </router-link>
          </el-menu-item>
          <!--          <el-menu-item index="5">-->
          <!--            <router-link :to="{ name: 'blog' }" custom v-slot="{ href, navigate }">-->
          <!--              <a :href="href" @click="navigate">Blog</a>-->
          <!--            </router-link>-->
          <!--          </el-menu-item>-->
          <el-menu-item index="6">
            <router-link :to="{ name: 'contact' }" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">Contact</a>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :xl="6" :lg="8" :md="12" :sm="12" :xs="24">
        <el-menu class="el-menu-vertical-demo"
                 background-color="#000"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <h3>Other Links</h3>
          <el-menu-item index="1">
            <a href="https://www.apiopenstudio.com">ApiOpenStudio</a>
          </el-menu-item>
          <el-menu-item index="2">
            <a href="https://wiki.apiopenstudio.com">ApiOpenStudio Wiki</a>
          </el-menu-item>
          <el-menu-item index="3">
            <a href="https://phpdoc.apiopenstudio.com">ApiOpenStudio PHPDoc</a>
          </el-menu-item>
          <el-menu-item index="4"></el-menu-item>
          <el-menu-item index="5"></el-menu-item>
          <el-menu-item index="6"></el-menu-item>
        </el-menu>
      </el-col>

      <el-col :xl="6" :lg="8" :md="12" :sm="12" :xs="24">
        <el-menu class="el-menu-vertical-demo"
                 background-color="#000"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <h3>Contact Us</h3>
          <el-menu-item index="2">Email:&nbsp;<a href="mailto:contact@naala.com.au">contact@naala.com.au</a>
          </el-menu-item>
          <el-menu-item index="2">Phone:&nbsp;<a href="tel:+61279083860">+61 (2) 7908 3860</a></el-menu-item>
          <el-menu-item index="3"></el-menu-item>
          <el-menu-item index="4">
            <p>What we're listening to</p>
          </el-menu-item>
          <el-menu-item index="5">
            <iframe src="https://embed.spotify.com/?uri=spotify:track:41X9To0bQ4fpoSRri4NHiI" width="300"
                    height="80" frameborder="0" allowtransparency="true"></iframe>
          </el-menu-item>
          <el-menu-item index="6"></el-menu-item>
          <el-menu-item index="7"></el-menu-item>
        </el-menu>
      </el-col>

    </el-row>
  </el-footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.el-row {
  background-color: #000;
}

li a,
h3 {
  color: #DDD;
}

ul {
  border-right: 0;
}
</style>
