<template>
  <div class="index">
    <base-layout>
      <section class="section">
        <info class="info--numbers" :title="`Проверяем все новостройки`">
          <p class="info__descr">Из&nbsp;нашей базы удаляются новостройки, которые затягивают сроки строительства, имеют плохие отзывы жильцов или прецеденты обмана при заключении договора. Такие объекты не&nbsp;попадут к&nbsp;вам в&nbsp;подборку.</p>

          <div class="info__list">
            <counter class="info__item" v-for="counter in counters" :key="counter.index"
              :count="counter.number"
              :title="counter.title" />
          </div>
        </info>
      </section>

      <section class="section">
        <info :title="`Пришлем предложения<br>от&nbsp;крупных застройщиков`">
          <p class="info__descr">Мы&nbsp;напрямую сотрудничаем только с&nbsp;надежными, юридически чистыми застройщиками. Каждый день получаем актуальную информацию об&nbsp;изменении цен, скидках и&nbsp;выгодных предложениях в&nbsp;новостройках.</p>

          <base-button class="base-button--decor" @click="showModal('modal-quest')">подобрать квартиру</base-button>
        </info>

        <brands />
      </section>
    </base-layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import BaseLayout from '@/layouts/BaseLayout';
import Brands from '@/components/ui/Brands.vue';
import Info from '@/components/ui/Info.vue';
import Counter from '@/components/ui/Counter.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

const COUNTERS = [
  {
    number: 13450,
    title: 'квартир в&nbsp;продаже',
  },
  {
    number: 1234,
    title: 'новостроек в&nbsp;базе',
  },
]

export default {
  name: 'IndexView',
  data() {
    return {
      counters: COUNTERS,
    }
  },
  created() {
    this.loadAppInfo();
  },
  methods: {
    ...mapActions('quiz', ['loadAppInfo']),
    showModal(modal) {
      this.$root.$emit('layout:showModal', modal);
    },
  },
  components: {
    BaseLayout,
    Brands,
    Info,
    Counter,
    BaseButton,
  }
}
</script>
