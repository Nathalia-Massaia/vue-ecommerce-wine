<template>
  <div class="badgeWrapper" :style="cartItems.items.length ? 'opacity: 1' : 'opacity: 0'">
    {{ cartItems.items.length }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Badge',
  computed: {
    ...mapState({
      cartItems: (state: any) => state.cartItems,
    }),
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
