<template>
  <div class="hero-body">
    <div class="container">
      <div class="content">
        <h2 id="sponsors" class="page-title">Patrocinadores</h2>

        <div class="row">
          <a
            style="height: 6rem;"
            class="col-12-sm col-4"
            href="https://magrathealabs.com"
            target="_blank"
          >
            <img
              style="max-height: 100%; width: auto;"
              src="@/assets/images/magrathea.png"
              alt="Magrathea Labs"
            />
          </a>

          <a
            style="height: 6rem;"
            class="col-12-sm col-4"
            href="https://informant.com.br/"
            target="_blank"
          >
            <img
              style="max-height: 100%; width: auto;"
              src="@/assets/images/informant.png"
              alt="Informant"
            />
          </a>

          <a
            style="height: 6rem;"
            class="col-12-sm col-4"
            href="https://vagas.hunterco.com.br/"
            target="_blank"
          >
            <img
              style="max-height: 100%; width: auto;"
              src="@/assets/images/hunterco.png"
              alt="HunterCo"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
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
</style>
