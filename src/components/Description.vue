<template>
  <div class="hero-body">
    <div class="container">
      <div class="content">
        <h1 class="page-title">Hacktoberfest Joinville - 2019</h1>

        <h2 id="whats-hacktoberfest" class="page-subtitle">O que é a Hacktoberfest?</h2>
        <p class="description">
          Hacktoberfest — trago à você pela DigitalOcean em parceria com o DEV — é uma celebração
          ao open source que ocorre anualmente durante o mês de outubro. Os mantenedores são
          convidados a guiar os colaboradores em questões que ajudarão no avanço do projeto, e os
          colaboradores têm a oportunidade de ajudar os projetos que eles gostam ou que acabaram de
          conhecer. Nenhuma contribuição é pequena demais — correções de bugs e ajustes na
          documentação são formas válidas de participar e ajudar a comunidade.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
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
  font-size: 2.5em;
  font-weight: bold;
  color: #fff922;
  text-align: center;
}

.page-subtitle {
  font-size: 2em;
  font-weight: bold;
  color: #ff00aa;
  border-bottom: 1px solid #ff00aa;
  padding: 30px 0 15px 0;
}

p.description {
  color: #aab2c0;
}
</style>
