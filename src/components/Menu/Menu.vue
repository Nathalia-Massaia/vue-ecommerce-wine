<template>
  <div class="menuWrapper">
    <MediaMatch breakpoint="desktop" aria-label="desktop menu">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link :to="item.link">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </MediaMatch>

    <MediaMatch breakpoint="mobile" aria-label="mobile menu">
      <div class="mobileMenuWrapper" :class="isOpen && 'menu--open'">
        <div class="mobileMenu">
          <div
            class="menuButton"
            :class="isOpen && 'open'"
            @click="
              () => {
                isOpen = !isOpen;
                $store.dispatch('setMobileMenuOpen');
              }
            "
          >
            <div class="line top"></div>
            <div class="line middle"></div>
            <div class="line bottom"></div>
          </div>

          <ul>
            <li v-for="(item, index) in menuItems" :key="index">
              <router-link :to="item.link" >
                <a
                  @click="
                    () => {
                      isOpen = !isOpen;
                      $store.dispatch('setMobileMenuOpen');
                    }
                  "
                >
                  {{ item.label }}
                </a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </MediaMatch>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MediaMatch from '@/components/MediaMatch/MediaMatch.vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Menu',
  components: {
    MediaMatch,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapState({
      menuItems: (state: any) => state.menuItems,
      isMobileMenuOpen: (state: any) => state.isMobileMenuOpen,
    }),
  },
  methods: {
    handleMobileMenuOpen() {},
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
