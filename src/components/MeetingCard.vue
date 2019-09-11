<template>
  <!-- TODO: criar o card com os detalhes do evento -->
  <div>{{meeting}}</div>
</template>

<script>
export default {
  name: 'MeetingCard',
  props: {
    meeting: { type: Object, default: () => {} },
  },
};
</script>

<style lang="scss" scoped>
</style>
