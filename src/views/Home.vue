<template>
  <div>
    <!-- TODO: adicionar a agenda -->
    <Schedule />

    <!-- TODO: adicionar as localizações -->
  </div>
</template>

<script>
import Schedule from '@/components/Schedule.vue';

export default {
  name: 'Home',
  components: {
    Schedule,
  },
};
</script>
