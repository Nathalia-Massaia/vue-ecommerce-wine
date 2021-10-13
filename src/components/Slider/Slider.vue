<template>
  <div class="sliderWrapper">
    <slick ref="slick" :options="sliderSettings">
      <slot></slot>
    </slick>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Slick from 'vue-slick';
import sliderSettings from './sliderOptions';

export default Vue.extend({
  name: 'Slider',
  components: {
    Slick,
  },
  data() {
    return {
      sliderSettings,
    };
  },
  methods: {
    next(): void {
      (this.$refs.slick as any).next();
    },
    prev(): void {
      (this.$refs.slick as any).prev();
    },
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
