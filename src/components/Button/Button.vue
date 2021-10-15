<template>
  <div class="buttonWrapper" :style="fullWidth ? 'width: 100%' : ''">
    <button
      :class="[type ? type : 'primary', size ? size : 'medium']"
      :style="fullWidth ? 'width: 100%' : ''"
      :disabled="disabled"
      @click="handleAction"
      v-if="!route"
    >
      {{ label }}
    </button>

    <router-link
      :to="route"
      :class="[
        type ? type : 'primary',
        size ? size : 'medium',
        fullWidth ? 'fullWidth' : '',
      ]"
      :disabled="disabled"
      v-if="route"
    >
      {{ label }}
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Button',
  props: ['label', 'type', 'size', 'fullWidth', 'route', 'disabled'],

  methods: {
    handleAction() {
      this.$emit('action');
    },
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
