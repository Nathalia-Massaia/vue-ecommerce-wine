<template>
  <div class="cartButtonWrapper" role="button" @click="handleCartOpen">
    <div class="iconWrapper">
      <img
        src="/images/cart-icon.png"
        class="icon"
        aria-label="A Bag with Wine Logo"
      />
    </div>
    <Badge />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Badge from '@/components/Badge/Badge.vue';

export default Vue.extend({
  name: 'CartButton',
  components: {
    Badge,
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    handleCartOpen() {
      this.$emit('openCart', true);
    },
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
