<template>
  <div class="buttonWrapper">
    <button
      :class="[
        type ? type : 'primary',
        size ? size : 'medium',
        fullWidth ? 'fullWidth' : '',
      ]"
      :disabled="disabled"
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

  data() {
    return {};
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
