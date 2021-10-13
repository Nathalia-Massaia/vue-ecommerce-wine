<template>
  <div class="sideCartWrapper">
    <CartHeader @closeCart="handleCartClose" />
    <CartContent />
    <CartFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CartHeader from './components/CartHeader.vue';
import CartContent from './components/CartContent.vue';
import CartFooter from './components/CartFooter.vue';

export default Vue.extend({
  name: 'SideCart',
  components: {
    CartHeader,
    CartContent,
    CartFooter,
  },
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
