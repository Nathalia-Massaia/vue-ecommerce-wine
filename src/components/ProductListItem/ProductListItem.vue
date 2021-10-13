<template>
  <div class="productListItemWrapper">
    <div class="picture">
      <a :href="data.image || null" target="_blank" rel="noopenner, noreferrer">
        <img
          :src="data.image || '/images/not-available.jpg'"
          :alt="`A bottle of ${data.name}`"
        />
      </a>
    </div>

    <div class="details">
      <div class="productTitle">
        {{ data.name }}
      </div>

      <div class="unavailableMessage" v-if="!data.available">
        Produto indisponível
      </div>

      <div class="oldPrice" v-if="data.available">
        {{ data.priceStock | currency }}
      </div>

      <div class="priceMember" v-if="data.available">
        <span>Sócio Wine</span>
        <div class="priceWrapper">
          <div class="currencySymbol">{{ priceMember.currencySymbol }}</div>
          <div class="price">{{ priceMember.amount }}</div>
          <div>,{{ priceMember.cents }}</div>
        </div>
      </div>

      <MediaMatch breakpoint="mobile" v-if="data.available">
        <div class="notMemberPrice">
          <span>Não Sócio</span>
          <span>{{ data.pricePromotional | currency }}</span>
        </div>
      </MediaMatch>

      <Button
        label="Adicionar"
        :fullWidth="true"
        :disabled="!data.available"
        @action="handleAddToCart"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button/Button.vue';
import MediaMatch from '@/components/MediaMatch/MediaMatch.vue';
import { ProductProps, CartActionsEnum } from '@/types';

export default Vue.extend({
  props: ['data'],
  components: { Button, MediaMatch },
  name: 'ProductListItem',
  data() {
    return {
      priceMember: {
        currencySymbol: '',
        amount: '0',
        cents: '0',
      },
    };
  },
  methods: {
    formatPriceMember() {
      const formattedPrice = new Intl.NumberFormat('currency', {
        style: 'currency',
        currency: 'BRL',
      }).format(this.data.priceMember);

      this.priceMember.currencySymbol = formattedPrice.substring(0, 2);

      this.priceMember.amount = formattedPrice
        .replace(this.priceMember.currencySymbol, '')
        .split(',')[0]
        .trim();

      this.priceMember.cents = formattedPrice
        .replace(this.priceMember.currencySymbol, '')
        .split(',')[1]
        .trim();
    },

    handleAddToCart() {
      const data = {
        item: this.data,
        action: CartActionsEnum.ADD,
      };
      this.$store.dispatch('setCartItems', data);
      this.$store.dispatch('setToastData', {
        message: 'Produto adicionado ao carrinho',
      });
    },
  },
  mounted() {
    this.formatPriceMember();
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
