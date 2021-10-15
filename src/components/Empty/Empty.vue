<template>
  <div
    class="emptyListWrapper"
    v-if="visible"
    :class="multiple ? 'multiple' : ''"
  >
    <template v-for="item in new Array(quantity)">
      <div class="emptyItem" :key="item"></div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Empty',
  props: ['visible', 'quantity', 'multiple'],
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
