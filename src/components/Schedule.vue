<template>
  <div class="hero-body">
    <div class="container">
      <div class="content">
        <h2 id="whats-hacktoberfest" class="page-subtitle">Agenda</h2>
        <p class="description">{{ schedule }}</p>

        <div class="columns is-multiline">
          <div v-for="i in 15" :key="i" class="column is-half">
            <h1
              class="title"
              style="color: #fff; font-weight: normal; font-size: 36px; margin-top: 40px;"
            >Spread the word!</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  props: {
    schedule: { type: Array, default: () => [] },
  },
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
