<template>
  <div class="homeWrapper">
    <Banner />

    <!-- <Counter /> -->
    <EmptyList v-if="!allProducts.length" />
    <ProductSlider :products="allProducts" v-if="allProducts.length"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner/Banner.vue';
import ProductListItem from '@/components/ProductListItem/ProductListItem.vue';
import Counter from '@/components/Counter/Counter.vue';
import ProductList from '@/components/ProductList/ProductList.vue';
import ProductSlider from '@/components/ProductSlider/ProductSlider.vue';
import EmptyList from '@/components/EmptyList/EmptyList.vue';
import ProductService from '@/services/product.service';
import { ProductProps } from '@/types';

export default Vue.extend({
  name: 'Home',
  components: {
    Banner,
    ProductListItem,
    Counter,
    ProductList,
    ProductSlider,
    EmptyList,
  },
  data() {
    return {
      allProducts: [] as ProductProps[],
    };
  },
  async mounted() {
    await this.$store.dispatch('getImages');

    const allProducts = await ProductService.get();
    if (allProducts.length) {
      this.allProducts = allProducts;
    }
  },
});
</script>

<style lang="scss">
.homeWrapper {
  width: 100%;
}
</style>
