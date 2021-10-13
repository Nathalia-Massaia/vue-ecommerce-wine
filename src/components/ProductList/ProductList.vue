<template>
  <div class="productListWrapper">
    <div
      class="productListItem"
      v-for="(product, index) in products"
      :key="index"
    >
      <div class="listItem">
        <ProductListItem :data="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductListItem from '@/components/ProductListItem/ProductListItem.vue';

export default Vue.extend({
  name: 'ProductList',
  props: ['products'],
  components: {
    ProductListItem,
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
