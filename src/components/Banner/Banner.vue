<template>
  <div class="bannerWrapper">
    <router-link to="/ofertas">
      <MediaMatch breakpoint="desktop">
        <img
          :src="banner.desktop"
          :alt="banner.alt"
          :aria-label="banner.label"
        />
      </MediaMatch>
      <MediaMatch breakpoint="mobile">
        <img
          :src="banner.mobile"
          :alt="banner.alt"
          :aria-label="banner.label"
        />
      </MediaMatch>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import MediaMatch from '@/components/MediaMatch/MediaMatch.vue';

export default Vue.extend({
  name: 'Banner',
  components: {
    MediaMatch,
  },
  computed: {
    ...mapState({
      menuItems: (state: any) => state.menuItems,
      banner: (state: any) => state.banner,
    }),
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
