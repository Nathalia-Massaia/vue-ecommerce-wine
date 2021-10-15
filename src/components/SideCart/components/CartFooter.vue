<template>
  <div class="cartFooterWrapper" v-if="cartItems.items.length">
    <div class="subtotal">
      <span>Subtotal</span>
      <ProductPrice :price="total" size="small" />
    </div>

    <Button
      label="Finalizar pedido"
      type="secondary"
      size="large"
      :fullWidth="true"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button/Button.vue';
import ProductPrice from '@/components/ProductPrice/ProductPrice.vue';
import { mapState } from 'vuex';
import { ProductProps } from '@/types';

export default Vue.extend({
  name: 'CartFooter',
  props: ['cartItems'],
  components: {
    Button,
    ProductPrice,
  },
  computed: {
    total(){
      return this.cartItems.items.reduce((acc: any, curr: any) => {
        return acc + curr.priceMember
      }, 0)
    }
  }
});
</script>

<style lang="scss">
@import '../styles.scss';
</style>
