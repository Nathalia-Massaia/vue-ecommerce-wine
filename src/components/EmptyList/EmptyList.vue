<template>
  <div class="emptyListWrapper">
    <div class="emptyItem"></div>
    <div class="emptyItem"></div>
    <div class="emptyItem"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'EmptyList',
  data() {
    return {};
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
