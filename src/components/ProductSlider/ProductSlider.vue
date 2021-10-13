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
    </Slider>

    <ToastNotification
      :message="toast.message"
      :type="toast.type"
      :timeout="toast.timeout"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Slider from '@/components/Slider/Slider.vue';
import ProductListItem from '@/components/ProductListItem/ProductListItem.vue';
import ToastNotification from '@/components/ToastNotification/ToastNotification.vue';

export default Vue.extend({
  name: 'ProductSlider',
  props: ['products'],
  components: {
    ProductListItem,
    Slider,
    ToastNotification,
  },
  data() {
    return {
      toast: {
        message: '',
        type: '',
        timeout: 0,
      },
    };
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
