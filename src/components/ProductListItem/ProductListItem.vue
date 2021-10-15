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
        <ProductPrice :price="data.priceMember" />
      </div>

      <MediaMatch breakpoint="mobile" v-if="data.available">
        <div class="notMemberPrice">
          <span>Não Sócio</span>
          <span>{{ data.pricePromotional | currency }}</span>
        </div>
      </MediaMatch>

      <div class="actionWrapper">
        <Button
          :label="data.available ? 'Adicionar' : 'Esgotado'"
          :fullWidth="true"
          :disabled="!data.available"
          @action="handleAddToCart"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button/Button.vue';
import ProductPrice from '@/components/ProductPrice/ProductPrice.vue';
import MediaMatch from '@/components/MediaMatch/MediaMatch.vue';
import { ProductProps, CartActionsEnum } from '@/types';

export default Vue.extend({
  props: ['data'],
  components: { Button, MediaMatch, ProductPrice },
  name: 'ProductListItem',
  methods: {
    handleAddToCart() {
      const data = {
        items: [this.data],
        action: CartActionsEnum.ADD,
      };

      this.$store.dispatch('setCartItems', data);
      this.$store.dispatch('setToastData', {
        message: 'Produto adicionado ao carrinho',
      });
    },
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
