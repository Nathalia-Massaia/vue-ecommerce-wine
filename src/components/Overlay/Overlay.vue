<template>
  <div class="overlayWrapper" @click='handleCartClose'>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Overlay',
  data() {
    return {};
  },
  methods: {
    handleCartClose() {
      this.$emit('closeCart', false);
    },
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
