  <template>
    <div class='counterWrapper'>
      <button :disabled="count <= 1" class="decreaseButton"  @click="decreaseCounter"> - </button>
      <div class="counterValue">
      <input v-model="count" type="number">
      </div>
      <button class="increaseButton" @click="increaseCounter"> + </button>


    </div>
  </template>

  <script lang='ts'>
  import Vue from 'vue';
  export default Vue.extend({
    name: 'Counter',
    data(){
      return {
        count: 1 ,
      }
    },
    methods:{

      increaseCounter: function() {
        this.count += 1;
      },

      decreaseCounter: function() {
        this.count -= 1;
      }
    },
  });
  </script>

  <style lang="scss">
  @import './styles.scss';
  </style>
