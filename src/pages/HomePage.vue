<template>
  <section class="bd-main" role="main">
    <div class="inner">

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
                  <li class="rwd">
                    <a href="#">
                      <h2>Responsive Web Development</h2>

                      <p><span class="visuallyhidden-mobile">Read more</span><i class="icon">
                        &#59238;</i></p>
                    </a>
                  </li>
                  <li class="mob">
                    <a href="#">
                      <h2>Mobile Applications</h2>

                      <p><span class="visuallyhidden-mobile">Read more</span><i class="icon">
                        &#59238;</i></p>
                    </a>
                  </li>
                  <li class="ux">
                    <a href="#">
                      <h2>User Experience + Strategy</h2>

                      <p><span class="visuallyhidden-mobile">Read more</span><i class="icon">
                        &#59238;</i></p>
                    </a>
                  </li>
                  <li class="drupal visuallyhidden-mobile visuallyhidden-tablet">
                    <a href="#">
                      <h2>Drupal Development</h2>

                      <p><span class="visuallyhidden-mobile">Read more</span><i class="icon">
                        &#59238;</i></p>
                    </a>
                  </li>
                  <li class="ecommerce visuallyhidden-mobile visuallyhidden-tablet">
                    <a href="#">
                      <h2>Ecommerce systems</h2>

                      <p><span class="visuallyhidden-mobile">Read more</span><i class="icon">
                        &#59238;</i></p>
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
            <h2>Naala builds engaging websites and mobile applications using leading open source platforms
              such as Drupal and Magento, and we can help you plan it all as well.</h2>

            <h3>We work with businesses, digital agencies and freelance developers and designers. <a
                href="#">Say hello</a> to see what we can do for you.</h3>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
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

.home-services {
  .icon {
    margin: 0;
    width: 20px;
    font-family: "entypo";
    line-height: 0;
    vertical-align: middle;
  }

  .drupal, .ecommerce {
    display: none;
  }
}
</style>
