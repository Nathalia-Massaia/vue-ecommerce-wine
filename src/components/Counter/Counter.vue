<template>
  <div class="counterWrapper">
    <button
      :disabled="count <= 1"
      class="decreaseButton"
      @click="$emit('decrease')"
    >
      -
    </button>
    <div class="counterValue">
      <input
        v-model="count"
        type="number"
        min="1"
        @input="$emit('inputChange', $event)"
        readonly
      />
    </div>
    <button class="increaseButton" @click="$emit('increase')">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Counter',
  props: ['count'],
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
