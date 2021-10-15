<template>
  <div class="productPriceWrapper" :class="size ? size : 'medium'" v-if="price">
    <div class="currencySymbol">{{ formattedPrice.currencySymbol }}</div>
    <div class="price">{{ formattedPrice.amount }}</div>
    <div>,{{ formattedPrice.cents }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProductPrice',
  props: ['price', 'size'],
  computed: {
    formattedPrice() {
      const price = new Intl.NumberFormat('currency', {
        style: 'currency',
        currency: 'BRL',
      }).format(this.price);

      const formattedPrice = {
        currencySymbol: '',
        amount: '',
        cents: '',
      };

      formattedPrice.currencySymbol = price.substring(0, 2);

      formattedPrice.amount = price
        .replace(formattedPrice.currencySymbol, '')
        .split(',')[0]
        .trim();

      formattedPrice.cents = price
        .replace(formattedPrice.currencySymbol, '')
        .split(',')[1]
        .trim();

      return formattedPrice;
    },
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
