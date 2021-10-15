import {
  ProductProps,
  CartProps,
  MenuItemProps,
  ToastProps,
  CartActionsEnum,
} from '@/types';
import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from '@/services/api.service';
import { calculateTotal, formatName } from '@/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuItems: [] as MenuItemProps[],
    isMobileMenuOpen: false,
    banner: {},
    cartItems: {
      items: [],
      total: 0,
    } as CartProps,
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
      data: { items: ProductProps[]; action: CartActionsEnum },
    ) {
      switch (data.action) {
        case CartActionsEnum.ADD:
          const items = [...state.cartItems.items, ...data.items];

          state.cartItems = {
            items,
            total: calculateTotal(items),
          };
          break;

        case CartActionsEnum.DELETE:
          state.cartItems.items = state.cartItems.items.filter(
            item => formatName(item.name) !== formatName(data.items[0].name),
          );

          state.cartItems = {
            items: [...state.cartItems.items],
            total: calculateTotal([...state.cartItems.items]),
          };
          break;

        case CartActionsEnum.DECREASE:
          const repeateds: ProductProps[] = [];

          const diffItems = state.cartItems.items.filter((item, index) => {
            if (state.cartItems.items.indexOf(item) !== index) {
              repeateds.push(item);
            }

            return state.cartItems.items.indexOf(item) == index;
          });

          repeateds.pop();

          state.cartItems = {
            items: [...diffItems, ...repeateds],
            total: calculateTotal([...diffItems, ...repeateds]),
          };
          break;

        default:
          return;
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
      data: { items: ProductProps[]; action: CartActionsEnum },
    ) {
      if (data.items && data.action) {
        commit('SET_CART_ITEMS', data);
      }
    },
  },
});
