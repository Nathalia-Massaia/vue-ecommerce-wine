<template>
  <div class="underConstructionWrapper">
    <div class="pendulum">
      <div class="rope"></div>
      <div class="shape"></div>
    </div>

    <div class="content">
      <h3>
        Página em construção
      </h3>

      <h4>
        Volte para a loja e conheça nossos produtos e ofertas!
      </h4>

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
  name: 'UnderConstruction',
  components: {
    Button,
  },
});
</script>

<style lang="scss">
@import '@/sass/master';

.underConstructionWrapper {
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100%;
  display: flex;

  .pendulum {
    position: absolute;
    animation: sway 2.4s infinite;
    animation-timing-function: ease-in-out;
    transform-origin: top;
    left: 0;
    right: 0;
    height: 8rem;
    text-transform: uppercase;

    .rope {
      height: 100%;
      width: 0.3rem;
      background-color: map-get($colors, black);
      margin-left: 50%;
    }

    .shape {
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
      background-color: map-get($colors, black);
      margin: 0 auto;
      position: relative;
      color: #fff;
      text-align: center;
      font-weight: 800;
      @include flexbox(row, center, center, 0);

      &:before {
        content: 'Em breve';
        font-size: map-get(map-get($font, sizes), xlarge);
        color: map-get($colors, white);
      }
    }
  }

  @keyframes sway {
    0% {
      transform: rotate(8deg);
    }
    50% {
      transform: rotate(-8deg);
    }
    100% {
      transform: rotate(8deg);
    }
  }

  .content {
    @include flexbox(column, center, center, 3rem);
    align-self: center;
    justify-content: center;
    margin: 5rem auto 0;

    h3 {
      font-size: 3rem;
    }

    h4 {
      font-size: map-get(map-get($font, sizes), large);
      font-weight: map-get($font, normal);
    }

    .action {
      margin-top: map-get($spacings, xsmall);
    }
  }

  @media (max-width: 768px) {
    padding: 0 10%;

    .pendulum {
      height: 3rem;

      .shape {
        width: 10rem;
        height: 10rem;

        &:before {
          font-size: map-get(map-get($font, sizes), medium);
        }
      }
    }

    .content {
      @include flexbox(column, center, center, 3rem);
      position: relative;
      height: 100%;
      margin-top: 0;

      h3 {
        font-size: 2.5rem;
        margin-top: -10rem;
      }

      h4 {
        text-align: justify;
        font-size: map-get(map-get($font, sizes), medium);
      }

      .action {
        margin-top: map-get($spacings, xlarge);
      }
    }
  }
}
</style>
