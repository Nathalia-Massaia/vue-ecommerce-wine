<template>
  <div class="sideCartWrapper">
    <CartHeader @closeCart="handleCartClose" :cartItems='cartItems'/>
    <CartContent :cartItems='cartItems'/>
    <CartFooter :cartItems='cartItems'/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CartHeader from './components/CartHeader.vue';
import CartContent from './components/CartContent.vue';
import CartFooter from './components/CartFooter.vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'SideCart',
  components: {
    CartHeader,
    CartContent,
    CartFooter,
  },
  computed: {
    ...mapState({
      cartItems: (state: any) => state.cartItems,
    }),
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
