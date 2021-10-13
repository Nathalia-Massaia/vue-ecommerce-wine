<template>
  <div class="logoWrapper" :class='isMobileMenuOpen && "onMobileMenu"'>
    <router-link to="/">
      <img src="images/logo.svg" alt="Wine Logo" aria-label="Wine Logo" />
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Logo',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      menuItems: (state: any) => state.menuItems,
      isMobileMenuOpen: (state: any) => state.isMobileMenuOpen,
    }),
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
