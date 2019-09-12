<template>
  <a :href="href" :target="target">
    <button class="action-button">
      <slot />
    </button>
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: { type: String, default: undefined },
    target: { type: String, default: undefined },
  },
};
</script>

<style lang="scss" scoped>
$white: #fff;
$purple: #a11ec6;

.action-button {
  border: none;
  color: $white;
  cursor: pointer;
  height: 40px;
  width: 100%;
  background-color: $purple;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    color: #39486e;
    background-color: #92eaff;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }
}
</style>
