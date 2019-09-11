<template>
  <div class="hero-body">
    <div class="container">
      <div class="content">
        <h2 id="whats-hacktoberfest" class="page-subtitle">Agenda</h2>

        <div class="row">
          <div v-for="(meeting, e) in meetings" :key="e" class="col-12-sm col-4">
            <MeetingCard :meeting="meeting" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MeetingCard from '@/components/MeetingCard.vue';

export default {
  name: 'Schedule',
  components: { MeetingCard },
  props: {
    // TODO: ordenar os encontros por ordem de data e hora
    meetings: { type: Array, default: () => [] },
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
