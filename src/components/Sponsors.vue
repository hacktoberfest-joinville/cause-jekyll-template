<template>
  <div class="hero-body">
    <div class="container">
      <div class="content">
        <h2 id="sponsors" class="page-title">Patrocinadores</h2>

        <div class="row">
          <Sponsor
            v-for="sponsor in sponsors"
            :key="sponsor.name"
            :name="sponsor.name"
            :url="sponsor.url"
            :image="sponsor.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sponsor from '@/components/Sponsor.vue';
import sponsors from '@/assets/content/sponsors.json';

export default {
  name: 'Sponsors',
  components: { Sponsor },
  data: () => ({
    sponsors,
  }),
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
