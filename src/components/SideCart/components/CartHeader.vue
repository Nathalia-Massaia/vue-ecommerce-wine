<template>
  <div class="cartHeaderWrapper">
    <div class="backIcon" @click="handleCloseCart">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>

    <div class="title">
      WineBox {{ cartItems.length ? `(${cartItems.length})` : '' }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'CartHeader',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cartItems: (state: any) => state.cartItems,
    }),
  },
  methods: {
    handleCloseCart() {
      this.$emit('closeCart');
    },
  },
});
</script>

<style lang="scss">
@import '../styles.scss';
</style>
