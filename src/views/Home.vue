<template>
  <div>
    <!-- TODO: adicionar a agenda -->
    <Schedule :meetings="meetings" />

    <!-- TODO: adicionar as localizações -->
    <!-- <Locations /> -->
  </div>
</template>

<script>
import Schedule from '@/components/Schedule.vue';
import meetings from '@/assets/static/meetings.json';

export default {
  name: 'Home',
  components: {
    Schedule,
  },
  data: () => ({
    meetings,
  }),
};
</script>
