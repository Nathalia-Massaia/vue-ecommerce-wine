<template>
  <div class="page404Wrapper">
    <div class="title">
      <h1>Page 404</h1>
      <h4>Not Found</h4>
    </div>

    <div class="content">
      <img src="/images/404.gif" alt="a cave man getting shock" />
      <h4>
        Parece que você está perdido
      </h4>

      <h5>A página que você está procurando não existe!</h5>

      <div class="action">
        <Button label="Voltar para Home" route="/" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button/Button.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Button,
  },
});
</script>

<style lang="scss">
@import '@/sass/master';

.page404Wrapper {
  @include flexbox(column, center, flex-start, 0);
  position: fixed;
  left: 0;
  top: 9rem;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-top: 0.1rem solid map-get($colors, iceWhite);
  padding: map-get($spacings, xsmall) 0;

  .title {
    @include flexbox(column, center, center, 0);

    h1 {
      font-size: map-get(map-get($font, sizes), huge);
    }

    h4 {
      font-size: map-get(map-get($font, sizes), large);
    }
  }

  .content {
    @include flexbox(column, center, flex-start, 0);

    img {
      margin-bottom: map-get($spacings, large);
    }

    h4 {
      font-size: map-get(map-get($font, sizes), xlarge);
    }

    h5 {
      font-size: map-get(map-get($font, sizes), medium);
      font-weight: map-get($font, normal);
      margin-top: map-get($spacings, xsmall);
    }

    .action {
      margin-top: map-get($spacings, xlarge);
    }
  }

  @media (max-width: 768px) {
    .title {
      h1 {
        font-size: map-get(map-get($font, sizes), xxlarge);
      }

      h4 {
        font-size: map-get(map-get($font, sizes), medium);
      }
    }

    .content {
      position: relative;
      height: 100%;

      img {
        height: 18.5rem;
      }

      h4 {
        font-size: map-get(map-get($font, sizes), large);
      }

      h5 {
        font-size: map-get(map-get($font, sizes), medium);
        font-weight: map-get($font, normal);
      }

      .action {
        margin-top: 8rem
      }
    }
  }
}
</style>
