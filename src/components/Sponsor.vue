<template>
  <a style="height: 6rem; text-align: center;" class="col-12-sm col-4" :href="url" target="_blank">
    <img style="max-height: 100%; width: auto;" :src="image" :alt="name" />
  </a>
</template>

<script>
export default {
  name: 'Sponsor',
  props: {
    url: { type: String, default: '' },
    image: { type: String, default: '' },
    name: { type: String, default: '' },
  },
};
</script>
