<template>
  <div class="mediaMatchWrapper" :class="breakpoint && breakpoint">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MediaMatch',
  props: ['breakpoint'],
});
</script>

<style lang="scss">
@import '@/sass/master';

.mediaMatchWrapper {
  display: none;
}

.mobile {
  @media (max-width: 768px) {
    display: block;
  }
}

.desktop {
  @media (min-width: 769px) {
    display: block;
  }
}

</style>
