<template>
  <div class="cartItemWrapper">
    <div class="picture">
      <img
        :src="product.image || '/images/not-available.jpg'"
        :alt="`A bottle of ${product.name}`"
      />
    </div>

    <div class="details">
      <div class="productTitle">
        <h4>
          {{ product.name }}
        </h4>

        <div class="closeButton" role="button" @click="handleRemoveItem"></div>
      </div>

      <div class="productPrice">
        <Counter
          :count="count"
          @inputChange="handleCountChange"
          @increase="handleIncreaseCount"
          @decrease="handleDecreaseCount"
        />

        <ProductPrice :price="product.priceMember * count" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Counter from '@/components/Counter/Counter.vue';
import ProductPrice from '@/components/ProductPrice/ProductPrice.vue';
import { CartActionsEnum } from '@/types';

export default Vue.extend({
  name: 'CartItem',
  props: ['product'],
  components: {
    Counter,
    ProductPrice,
  },

  data() {
    return {
      count: 1,
    };
  },

  methods: {
    handleRemoveItem() {
      const data = {
        items: [this.product],
        action: CartActionsEnum.DELETE,
      };

      this.$store.dispatch('setCartItems', data);
      this.$store.dispatch('setToastData', {
        message: 'Produto removido',
      });
      this.count = 1;
    },

    handleIncreaseCount(value?: number) {
      this.count += 1;

      const data = {
        items: [this.product],
        action: CartActionsEnum.ADD,
      };

      this.$store.dispatch('setCartItems', data);
    },

    handleDecreaseCount() {
      this.count -= 1;

      const data = {
        items: [this.product],
        action: CartActionsEnum.DECREASE,
      };

      this.$store.dispatch('setCartItems', data);
    },
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
