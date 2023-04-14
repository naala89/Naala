<!--
Possible honeycomb options

@see: https://codepen.io/alexeel/pen/qBqMVGw
@see: https://github.com/animationbro/Honeycomb-Grid-Layout-HTML-CSS-
-->
<template>
  <el-main class="naala-main">
    <div class="mod hero">
      <div class="inner">
        <div class="bd">
          <div class="img"><img src="@/assets/images/home-bg-top-lg.jpg" alt="Naala"></div>
        </div>
      </div>
    </div>

    <div class="mod banner home-headline">
      <div class="inner">
        <div class="bd">
          <h1>at naala, we see the whole picture.</h1>
        </div>
      </div>
    </div>

    <div class="mod hero home-services">
      <div class="inner">
        <div class="bd">

          <div class="img"><img src="@/assets/images/home-bg-bottom-lg.jpg" alt="Naala"></div>

          <div class="content">
            <div class="inner">
              <ul>
                <li class="drupal">
                  <a href="#">
                    <h2>Drupal Development</h2>
                    <p><span class="visuallyhidden-mobile">Read more</span><i class="icon"> </i></p>
                  </a>
                </li>
                <li class="php">
                  <a href="#">
                    <h2>Websites: PHP + VueJS</h2>
                    <p><span class="visuallyhidden-mobile">Read more</span><i class="icon"> </i></p>
                  </a>
                </li>
                <li class="api">
                  <a href="#">
                    <h2>API + Middleware</h2>
                    <p><span class="visuallyhidden-mobile">Read more</span><i class="icon"> </i></p>
                  </a>
                </li>
                <li class="consultancy">
                  <a href="#">
                    <h2>Consultancy + Strategy</h2>
                    <p><span class="visuallyhidden-mobile">Read more</span><i class="icon"> </i></p>
                  </a>
                </li>
                <li class="integration visuallyhidden-mobile visuallyhidden-tablet">
                  <a href="#">
                    <h2>Integration systems</h2>
                    <p><span class="visuallyhidden-mobile">Read more</span><i class="icon"> </i></p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mod banner home-subheading">
      <div class="inner">
        <div class="bd">
          <h2>Naala builds engaging websites and mobile applications using leading open source platforms such as Drupal
            and Magento, and we can help you plan it all as well.</h2>
          <h3>We work with businesses, digital agencies and freelance developers and designers. <a
              href="mailto:contact@naala.com.au">Say hello</a> to see what we can do for you.</h3>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped lang="scss">
img {
  max-width: 100%;
}

.home-headline {
  background: $brand-red;

  h1 {
    margin: 0;
    padding: 1em 20px;
    text-align: center;
    color: #fff;
    @include fontSize(24px);

  }
}

.home-subheading {
  background: $brand-green;
  text-transform: lowercase;

  .inner {
    min-width: 100%;
    display: flex;
  }

  h2 {
    margin: 0;
    padding: 1em 20px;
    text-align: center;
    color: #fff;
    @include fontSize(21px);
  }

  h3 {
    margin: 0;
    padding: 0 20px 1em 20px;
    text-align: center;
    color: #fff;
    @include fontSize(16px);
  }

  a {
    color: #fff;
  }
}

*, ::before, ::after {
  box-sizing: border-box;
}

.home-services {
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #000;
    text-transform: lowercase;

    a {
      color: #fff;
      text-decoration: none;
      display: block;
    }

    li {
      color: #000;

      a, .icon {
        color: #000;
      }
    }

    p {
      margin: 0;
    }
  }
}

@media screen and (max-width: 480px) {
  .home-services {
    ul {
      li {
        margin-bottom: 2px;
        position: relative;

        h2 {
          padding: 0 20px;
          line-height: 2em;
          @include fontSize(18px);
          margin: 0;
        }
      }

      .icon {
        line-height: .6;
        margin: 0;
        @include fontSize(28px);
        position: absolute;
        right: 0;
        top: 10px;
        color: #fff;
      }

      .php {
        background: #eee;

        &:hover, &:active {
          background: #ccc;
        }
      }

      .api {
        background: #eee;

        &:hover, &:active {
          background: #ccc;
        }
      }

      .consultancy {
        background: #eee;

        &:hover, &:active {
          background: #ccc;
        }
      }

      .drupal, .integration {
        display: none;
      }
    }
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .home-headline h1 {
    @include fontSize(36px);
  }
}

@media screen and (min-width: 481px) and (max-width: 869px) {
  .home-services {
    ul {
      //@include clearfix;
    }

    li {
      width: 33.3333%;
      float: left;
      position: relative;

      a {
        padding: 10px;
        margin: 4px 4px 4px 0;
        background: $brand-red;
      }

      p {
        text-align: right;
      }

      h2 {
        margin: 0;
        line-height: 1em;
        min-height: 4em;
      }
    }

    li:last-child a {
      margin-right: 0;
    }

    .php a {
      background: #eee;

      &:hover, &:active {
        background: #ccc;
      }
    }

    .api a {
      background: #eee;

      &:hover, &:active {
        background: #ccc;
      }
    }

    .consultancy a {
      background: #eee;

      &:hover, &:active {
        background: #ccc;
      }
    }

    .drupal, .integration {
      //display: none;
    }
  }
}

@media screen and (min-width: 481px) {
  .home-services {
    .icon {
      margin: 0;
      width: 20px;
      font-family: "entypo";
      @include fontSize(30px);
      line-height: 0;
      vertical-align: middle;
    }

    .drupal, .integration {
      //display: none;
    }
  }
}

@media screen and (min-width: 769px) {
  .bd-main.hasAside {
    width: 66.66667%;
    float: left;
  }
  .home-headline h1 {
    @include fontSize(48px);
  }
  .home-subheading {
    padding: 2em 0;

    .inner {
      max-width: 960px;
      margin: 0 auto;
    }

    h2 {
      @include fontSize(36px);
    }

    h3 {
      @include fontSize(27px);
    }
  }
}

@media screen and (min-width: 870px) {
  .home-services {
    .content {
      width: 100%;
    }

    ul {
      position: relative;
      width: 520px;
      margin: 0 auto;
      display: block;
    }

    li {
      width: 280px;
      height: 253px;
      position: absolute;
      top: 147px;
      right: 0;
      background: url('@/assets/images/honeycomb.png') no-repeat;
      text-align: center;

      h2, a, .icon {
        color: #fff;
      }

      h2 {
        margin: 0;
        padding: 0;
      }

      a {
        padding: 80px 20px 0 20px;
        display: block;
        font-size: 1.3em;
        line-height: 1.3;
        height: 173px;
      }
    }

    .php {
      background-position: 0 -260px;
      top: 20px;
      left: 0;
    }

    .consultancy {
      background-position: 0 -520px;
      top: 290px;
      left: 0;
    }

    .drupal, .integration {
      display: none;
    }
  }
  .hero {
    //@include clearfix;
    .inner {
      position: relative;

      .content {
        position: absolute;
        top: 0;
        left: 0;

      }
    }
  }
}

@media screen and (min-width: 960px) {
  .mod.content,
  .mod.breadcrumbs {
    .inner {
      width: 960px;
      margin: 0 auto;
    }
  }
  .hasAside .mod.content,
  .hasAside .mod.breadcrumbs {
    .inner {
      width: 100%;
      margin: 0;
    }
  }
  .hero {
    .content .inner {
      width: 960px;
      margin: 0 auto;
    }
  }
}

@media screen and (min-width: 1100px) {
  .home-services {
    .drupal {
      background-position: 0 -260px;
      top: 418px;
      right: 0;
      display: block
    }

    .integration {
      background-position: 0 0;
      top: 554px;
      left: 0;
      display: block;
    }
  }
}
</style>
