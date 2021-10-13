<template>
  <div id="app">
    <div class="fixedHeader">
      <Header />
    </div>
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header/Header.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header,
  },
  async mounted() {
    await this.$store.dispatch('getMenuItems');
  },
});
</script>

<style lang="scss">
@import '@/sass/global.scss';
main {
  padding: 0 10%;
  margin-top: 11rem;

  @media (max-width: 768px) {
    padding: 0 5%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fixedHeader {
  position: fixed;
  width: 100%;
  top: -1px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  z-index: map-get($layers, alwaysOnTop);
}
</style>
