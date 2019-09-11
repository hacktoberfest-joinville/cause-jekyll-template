<template>
  <div>
    <!-- TODO: adicionar a agenda -->
    <Schedule :schedule="schedule" />

    <!-- TODO: adicionar as localizações -->
    <!-- <Locations /> -->
  </div>
</template>

<script>
import Schedule from '@/components/Schedule.vue';
import scheduleArr from '@/assets/static/schedule.json';

export default {
  name: 'Home',
  components: {
    Schedule,
  },
  data: () => ({
    schedule: scheduleArr,
  }),
};
</script>
