<template>
  <div class="meeting-card">
    <h1 class="title">{{ meeting.title }}</h1>

    <div class="body">
      <h2 style="color: #fff;">{{ meeting.date }}</h2>
      <h4 style="color: #fff;">{{ meeting.startTime }} - {{ meeting.endTime }}</h4>

      <div style="margin-bottom: 10px">
        <ExternalLink target="_blank" :href="meeting.locationLink">
          {{ meeting.location }}
        </ExternalLink>
      </div>

      <ExternalButton :href="meeting.externalLink" target="_blank">Saber mais</ExternalButton>
    </div>
  </div>
</template>

<script>
import ExternalButton from '@/components/ExternalButton.vue';
import ExternalLink from '@/components/ExternalLink.vue';

export default {
  name: 'MeetingCard',
  props: {
    meeting: { type: Object, default: () => {} },
  },
  components: { ExternalButton, ExternalLink },
};
</script>

<style lang="scss" scoped>
.meeting-card {
  background-color: #39486f;
  vertical-align: top;
  padding: 0;
}

.meeting-card > .title {
  padding: 15px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  display: block;
  width: 100%;
  border: none;
  background-color: #1f2d4f;
  margin-bottom: 0;
}

.meeting-card > .body {
  color: #fff;
  padding: 10px;
  text-align: center;
}
</style>
