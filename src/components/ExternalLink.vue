<template>
  <a :href="href" :target="target" class="link">
    <!-- <h4> -->
    <slot />
    <!-- </h4> -->
  </a>
</template>

<script>
export default {
  name: 'ExternalLink',
  props: {
    href: { type: String, default: undefined },
    target: { type: String, default: undefined },
  },
};
</script>

<style lang="scss" scoped>
.link {
  font-weight: bold;
  -webkit-letter-spacing: 3px;
  -moz-letter-spacing: 3px;
  -ms-letter-spacing: 3px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #fff;

  &:hover {
    border-bottom: 2px solid #fff922;
  }
}
</style>
