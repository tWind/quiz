<template>
  <div class="list-of-apartments">
    <div class="list-of-apartments__container">
      <h1 class="list-of-apartments__title">Спасибо</h1>
      <p class="list-of-apartments__descr">Менеджер свяжется с&nbsp;вами и&nbsp;подготовит<br>подборку по&nbsp;вашим параметрам</p>
      <div class="list-of-apartments__list-wrapper">
        <div class="list-of-apartments__list-header">
          <div class="list-of-apartments__list-header-col list-of-apartments__list-header-col--left">
            <span class="list-of-apartments__list-header-text list-of-apartments__list-header-text--desktop">Квартиры/аппартаменты:</span>
            <span class="list-of-apartments__list-header-text list-of-apartments__list-header-text--mobile">Кв./аппарт.:</span>
            <span class="list-of-apartments__list-header-text list-of-apartments__list-header-text--red">{{ objectsCompilation.length }} варианта</span>
          </div>
          
          <div class="list-of-apartments__list-header-col list-of-apartments__list-header-col--right">
            <!--  подборки в PDF временно нет, ссылка отключена -->
            <a v-if="0" class="list-of-apartments__list-header-link" href="#">
              <span class="list-of-apartments__list-header-link-text">Скачать подборку в PDF</span>
            </a>
          </div>
        </div>
        <div class="list-of-apartments__list-content">
          <apartments-list-item
            v-for="object in objectsCompilation" :key="object.index"
            :item="object"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import ApartmentsListItem from './ApartmentsListItem';


export default {
  name: 'ApartmentsList',
  computed: {
    ...mapGetters('quiz', ['objectsCompilation', 'socketChannel']),
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    'changed-compilation': function(data) {
      this.setCompilation(data.compilation);
      console.log(`updating compilation ${data.compilation}`);
    },
  },
  methods: {
    ...mapMutations('quiz', ['setCompilation']),
  },
  mounted() {
    this.$socket.emit('join', this.socketChannel);
  },
  components: {
    ApartmentsListItem,
  },
};
</script>

<style lang="scss" scoped>
@import '~breakpoint-sass';
@import '~@/scss/mixins/core';

.list-of-apartments {
  margin: 50px 0 0;
}
</style>