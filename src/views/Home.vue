<template>
  <div>
    <Schedule :meetings="meetings" />

    <!-- TODO: adicionar as localizações -->
    <!-- <Locations /> -->
  </div>
</template>

<script>
import Schedule from '@/components/Schedule.vue';
import meetings from '@/assets/content/meetings.json';

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
