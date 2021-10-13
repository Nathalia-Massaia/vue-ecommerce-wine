import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from '@/services/api.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuItems: [],
    isMobileMenuOpen: false,
    cartQuantity: 5,
    banner: {},
  },
  mutations: {
    SET_MENUITEMS(state, data) {
      state.menuItems = data;
    },
    SET_MOBILE_MENU_OPEN(state, data) {
      state.isMobileMenuOpen = data;
    },
    SET_CARTQUANTITY(state, data) {
      state.cartQuantity = data;
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
    setCartQuantity({ commit }, data) {
      if (data >= 0) {
        commit('SET_CARTQUANTITY', data);
      }
    },
  },
});
