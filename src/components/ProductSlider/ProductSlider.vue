<template>
  <div class="productSliderWrapper">
    <Slider v-if="products.length">
      <div
        class="productListItem"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="listItem">
          <ProductListItem :data="product" />
        </div>
      </div>
      <div
        class="productListItem"
        v-for="product in products"
        :key="product.name"
      >
        <div class="listItem">
          <ProductListItem :data="product" />
        </div>
      </div>
    </Slider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Slider from '@/components/Slider/Slider.vue';
import ProductListItem from '@/components/ProductListItem/ProductListItem.vue';

export default Vue.extend({
  name: 'ProductSlider',
  props: ['products'],
  components: {
    ProductListItem,
    Slider,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
