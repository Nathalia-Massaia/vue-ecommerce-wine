<template>
  <div class="cartContentWrapper">
    <div class="emptyCart" v-if="!cartItems.items.length">
      <p>=(</p>
      <p>Você ainda não escolheu seus produtos</p>
    </div>

    <div class="cartList">
      <div class="cartListItem" v-for="(item, index) in products" :key="index">
        <CartItem
          :product="item"
          @removeItem="handleRemoveItem"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import CartItem from '@/components/CartItem/CartItem.vue';
import { CartActionsEnum, ProductProps } from '@/types';

export default Vue.extend({
  name: 'CartContent',
  props: ['cartItems'],
  components: {
    CartItem,
  },
  computed: {
    products(): ProductProps[] {
      return [...new Set(this.cartItems.items)] as ProductProps[];
    },
  },
});
</script>

<style lang="scss">
@import '../styles.scss';
</style>
