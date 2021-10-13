<template>
  <div class="toastNotificationWrapper" :class="toastData.isVisible ? 'open' : ''">
    <h4>{{toastData.message}}</h4>
  </div>
</template>

<script lang="ts">""
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'ToastNotification',
  props: ['message', 'type', 'timeout'],
  computed: {
    ...mapState({
      toastData: (state: any) => state.toastData,
    }),
  },
});
</script>

<style lang="scss">
@import './styles.scss';
</style>
