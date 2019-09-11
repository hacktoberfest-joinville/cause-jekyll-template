<template>
  <div class="hero-body">
    <div class="container">
      <div class="content">
        <h2 id="whats-hacktoberfest" class="page-subtitle">Agenda</h2>
        <p class="description">
          Adicionar agenda (baseada num JSON)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
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
