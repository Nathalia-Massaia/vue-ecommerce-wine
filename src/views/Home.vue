<template>
  <div class="homeWrapper">
    <Empty :visible="!banner.desktop" :quantity="1" />
    <template>
      <Banner v-if="banner" />
    </template>

    <template>
      <Empty :visible="!allProducts.length" :quantity="3" :multiple="true" />
      <ProductSlider :products="allProducts" v-if="allProducts.length" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner/Banner.vue';
import ProductListItem from '@/components/ProductListItem/ProductListItem.vue';
import Counter from '@/components/Counter/Counter.vue';
import ProductSlider from '@/components/ProductSlider/ProductSlider.vue';
import Empty from '@/components/Empty/Empty.vue';
import CartItem from '@/components/CartItem/CartItem.vue';
import ProductService from '@/services/product.service';
import { ProductProps } from '@/types';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Home',
  components: {
    Banner,
    ProductListItem,
    Counter,
    ProductSlider,
    Empty,
    CartItem,
  },
  data() {
    return {
      allProducts: [] as ProductProps[],
    };
  },
  computed: {
    ...mapState({
      banner: (state: any) => state.banner,
    }),
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
