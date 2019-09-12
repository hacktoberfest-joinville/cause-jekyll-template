<template>
  <div class="hero-body">
    <div class="container">
      <div class="content">
        <h2 id="schedule" class="page-subtitle">Agenda</h2>

        <div class="row" v-if="showMeetings">
          <div v-for="(meeting, e) in sortedMeetings" :key="e" class="col-12-sm col-4">
            <MeetingCard :meeting="meeting" />
          </div>
        </div>
        <h3 class="no-meetings" v-else>Em breve...</h3>
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
    meetings: { type: Array, default: () => [] },
  },
  computed: {
    showMeetings() {
      return (
        Array.isArray(this.sortedMeetings) && this.sortedMeetings.length > 0
      );
    },
    sortedMeetings() {
      if (!this.meetings) {
        return [];
      }

      const sortedMeetings = this.meetings;

      return sortedMeetings.sort((a, b) => this.toDate(a) - this.toDate(b));
    },
  },
  methods: {
    toDate({ date, startTime }) {
      const [day, month] = date.split('/');
      const [hour, minute] = startTime.split(':');

      return new Date(2019, month - 1, day, hour, minute);
    },
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

.no-meetings {
  color: #aab2c0;
}

p.description {
  color: #aab2c0;
}
</style>
