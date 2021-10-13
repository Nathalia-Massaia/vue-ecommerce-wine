<template>
  <div class="headerWrapper">
    <div class="logoAndMenuWrapper">
      <Logo />
      <Menu />
    </div>

    <CartButton @openCart="handleCartBehavior" />
    <SideCart :class="isCartOpen && 'open'" @closeCart="handleCartBehavior" />
    <Overlay @closeCart="handleCartBehavior" :class="isCartOpen && 'open'" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '@/components/Logo/Logo.vue';
import Menu from '@/components/Menu/Menu.vue';
import CartButton from '@/components/CartButton/CartButton.vue';
import SideCart from '@/components/SideCart/SideCart.vue';
import Overlay from '@/components/Overlay/Overlay.vue';

export default Vue.extend({
  name: 'Header',
  components: {
    Logo,
    Menu,
    CartButton,
    SideCart,
    Overlay,
  },
  data() {
    return {
      isCartOpen: false,
    };
  },
  methods: {
    handleCartBehavior(value: boolean) {
      this.isCartOpen = value;
    },
  },
  mounted() {
    let self = this;
    window.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        self.isCartOpen = false;
      }
    });
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
