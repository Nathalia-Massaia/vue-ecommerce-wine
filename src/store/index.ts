import {
  ProductProps,
  MenuItemProps,
  ToastProps,
  CartActionsEnum,
} from '@/types';
import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from '@/services/api.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuItems: [] as MenuItemProps[],
    isMobileMenuOpen: false,
    banner: {},
    cartItems: [] as ProductProps[],
    toastData: {} as ToastProps,
  },
  mutations: {
    SET_MENUITEMS(state, data: MenuItemProps[]) {
      state.menuItems = data;
    },
    SET_MOBILE_MENU_OPEN(state, data) {
      state.isMobileMenuOpen = data;
    },
    SET_TOASTDATA(state, data) {
      state.toastData = data;
    },
    SET_CART_ITEMS(
      state,
      data: { item: ProductProps; action: CartActionsEnum },
    ) {
      if (data.action === CartActionsEnum.ADD) {
        const items = [...state.cartItems, data.item];
        state.cartItems = items;
      } else {
        const formatName = (name: string) => {
          return name
            .split(' ')
            .join('')
            .toLowerCase();
        };

        const index = state.cartItems.findIndex(
          item => formatName(item.name) === formatName(data.item.name),
        );

        if (index) {
          const items = state.cartItems.splice(index, 1);
          state.cartItems = items;
        } else {
          return;
        }
      }
    },
    SET_BANNER(state, data) {
      state.banner = data;
    },
  },
  actions: {
    async getMenuItems({ commit }) {
      try {
        ApiService.init('http://localhost:3000');

        const items = await ApiService.get('/menuItems');
        commit('SET_MENUITEMS', items);
      } catch (error) {
        throw error;
      }
    },
    async getImages({ commit }) {
      try {
        ApiService.init('http://localhost:3000');

        const images: any = await ApiService.get('/images');
        commit('SET_BANNER', images.banner);
      } catch (error) {
        throw error;
      }
    },
    setMobileMenuOpen({ commit }) {
      commit('SET_MOBILE_MENU_OPEN', !this.state.isMobileMenuOpen);
    },
    setToastData({ commit }, data: ToastProps) {
      commit('SET_TOASTDATA', { ...data, isVisible: true });

      setTimeout(() => {
        commit('SET_TOASTDATA', { ...data, isVisible: false });
      }, data.timeout || 2000);
    },
    setCartItems(
      { commit },
      data: { item: ProductProps; action: CartActionsEnum },
    ) {
      if (data.item && data.action) {
        commit('SET_CART_ITEMS', data);
      }
    },
  },
});
