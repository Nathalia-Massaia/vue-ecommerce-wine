<template>
  <div class="badgeWrapper" :style="cartQuantity ? 'opacity: 1' : 'opacity: 0'">
    {{ cartQuantity }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Badge',
  computed: {
    ...mapState({
      cartQuantity: (state: any) => state.cartQuantity,
    }),
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
