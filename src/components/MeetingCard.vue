<template>
  <!-- TODO: criar o card com os detalhes do evento -->
  <div class="meeting-card">
    <h1 class="title">{{ meeting.title }}</h1>

    <div class="body">
      <h2 class="date">{{ meeting.date }}</h2>
      <h4 class="date">{{ meeting.time }} - {{ meeting.time }}</h4>
      <a style="color: #fff;" target="_blank" :href="meeting.locationLink">
        <h4 style="color: #fff;">{{ meeting.location }}</h4>
      </a>
      <div class="actions">
        <a :href="meeting.externalLink" target="_blank" class="action-button">Saber mais</a>
      </div>
    </div>
  </div>
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
  padding: 15px;
  text-align: center;
}

.meeting-card > .body > .date {
  color: #fff;
}

.meeting-card > .body > .actions {
  display: block;
  text-align: center;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
}

.meeting-card > .body > .actions > .action-button {
  color: #fff;
  background-color: #a11ec6;
  font-weight: bold;
  font-size: 0.5em;
  padding: 15px 40px;
}
.meeting-card > .body > .actions > .action-button:hover {
  color: #39486e;
  background-color: #92eaff;
}
@media (max-width: 1024px) {
  .meeting-card > .body > .actions > .action-button {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .meeting-card > .body > .actions > .action-button {
    font-size: 11px;
  }
}
</style>
