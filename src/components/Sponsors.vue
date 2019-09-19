<template>
  <div class="hero-body">
    <div class="container">
      <div class="content">
        <h2 id="sponsors" class="page-title">Patrocinadores</h2>

        <div class="row">
          <div class="col-12-sm col-4">
            <img src="@/assets/images/magrathea.png" alt="Magrathea Labs">
          </div>

          <div class="col-12-sm col-4">
            <img src="@/assets/images/magrathea.png" alt="Magrathea Labs">
          </div>

          <div class="col-12-sm col-4">
            <img src="@/assets/images/magrathea.png" alt="Magrathea Labs">
          </div>

          <div class="col-12-sm col-4">
            <img src="@/assets/images/magrathea.png" alt="Magrathea Labs">
          </div>

          <div class="col-12-sm col-4">
            <img src="@/assets/images/magrathea.png" alt="Magrathea Labs">
          </div>

          <div class="col-12-sm col-4">
            <img src="@/assets/images/magrathea.png" alt="Magrathea Labs">
          </div>

          <div class="col-12-sm col-4">
            <img src="@/assets/images/magrathea.png" alt="Magrathea Labs">
          </div>

          <div class="col-12-sm col-4">
            <img src="@/assets/images/magrathea.png" alt="Magrathea Labs">
          </div>

          <div class="col-12-sm col-4">
            <img src="@/assets/images/magrathea.png" alt="Magrathea Labs">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
  // data: () => ({
  //   sponsors: [{
  //     name: 'Magrathea Labs',
  //     url: 'https://magrathealabs.com',
  //     image: '@/assets/images/magrathea.png',
  //   }],
  // }),
};
</script>

<style lang="scss" scoped>
.hero-body {
  display: block;
  -webkit-align-items: top;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
}

.page-title {
  font-size: 2em;
  font-weight: bold;
  color: #ff00aa;
  border-bottom: 1px solid #ff00aa;
  padding: 30px 0 15px 0;
}

.no-sponsors {
  color: #aab2c0;
}

p.description {
  color: #aab2c0;
}
</style>
