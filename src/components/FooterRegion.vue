<template>
  <el-footer>
    <el-row>

      <el-col :xl="{span: 4, offset: 6}"
              :lg="{span: 4, offset: 6}"
              :md="{span: 4, offset: 6}"
              :sm="{span: 4, offset: 6}"
              :xs="{span: 18, offset: 6}">
        <h3>Menu</h3>
        <el-menu class="el-menu-vertical-demo"
                 background-color="#000"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <page-menu></page-menu>
        </el-menu>
      </el-col>

      <el-col :xl="{span: 4, offset: 0}"
              :lg="{span: 4, offset: 0}"
              :md="{span: 4, offset: 0}"
              :sm="{span: 4, offset: 0}"
              :xs="{span: 18, offset: 6}">
        <h3>Other Links</h3>
        <el-menu class="el-menu-vertical-demo"
                 background-color="#000"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item>
            <el-link href="https://www.apiopenstudio.com" target="_blank">ApiOpenStudio</el-link>
          </el-menu-item>
          <el-menu-item>
            <el-link href="https://wiki.apiopenstudio.com" target="_blank">ApiOpenStudio Wiki</el-link>
          </el-menu-item>
          <el-menu-item>
            <el-link href="https://phpdoc.apiopenstudio.com" target="_blank">ApiOpenStudio PHPDoc</el-link>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :xl="{span: 4, offset: 0}"
              :lg="{span: 4, offset: 0}"
              :md="{span: 4, offset: 0}"
              :sm="{span: 4, offset: 0}"
              :xs="{span: 18, offset: 6}">
        <h3>Contact Us</h3>
        <el-menu class="el-menu-vertical-demo"
                 background-color="#000"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item>Email:&nbsp;<el-link href="mailto:contact@naala.com.au">contact@naala.com.au</el-link></el-menu-item>
          <el-menu-item>Phone:&nbsp;<el-link href="tel:+61279083860">+61 (2) 7908 3860</el-link></el-menu-item>
        </el-menu>
      </el-col>

    </el-row>
  </el-footer>
</template>

<script>
import PageMenu from "@/components/PageMenu";
export default {
  components: {PageMenu},
  component: PageMenu,
  PageMenu: "page-menu",
}
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
