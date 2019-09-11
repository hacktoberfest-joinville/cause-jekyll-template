<template>
  <!-- TODO: criar o card com os detalhes do evento -->
  <div class="meeting-card">
    <h1 class="title">
      {{ meeting.title }}
    </h1>

    <div class="body">
      {{meeting}}

      <div class="actions">
        <button class="action-button">Saber mais</button>
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
  width: 100%;
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
  background-color: #1f2d4f
}

.meeting-card > .body > .actions {
  display: block;
  text-align: center;
  width: 100%;
  padding-bottom: 15px;
}

.meeting-card > .body > .actions > .action-button {
  border: none;
  color: #fff;
  cursor: pointer;
  height: 40px;
  width: 160px;
  background-color: #a11ec6;
  font-weight: bold;
  font-size: 14px;
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
