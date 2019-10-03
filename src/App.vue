<template>
  <div id="app">
    <section class="hero header-and-description">
      <Header />
      <Description v-if="isHome" />
    </section>

    <RouterView />

    <!-- TODO: adicionar os patrocinadores -->
    <Sponsors />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Description from '@/components/Description.vue';
import Sponsors from '@/components/Sponsors.vue';

export default {
  name: 'app',
  components: {
    Header,
    Description,
    Sponsors,
  },
  computed: {
    isHome() {
      return this.$route.name === 'Home';
    },
  },
};
</script>

<style lang="scss">
@import "./assets/style/import.scss";

.header-and-description {
  background-image: url(/bg-left.png),
    url(/bg-right.png);
  background-position: top left, bottom right;
  background-repeat: no-repeat;
  padding-top: 30px;
}
</style>
