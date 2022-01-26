<template>
  <div class="index">
    <base-layout>
      <section class="section">
        <cover />
      </section>
      
      <section class="section">
        <info class="info--numbers" :title="appText.banner.second.header">
          <p class="info__descr">{{ appText.banner.second.text }}</p>

          <div class="info__list">
            <counter class="info__item" v-for="counter in appText.counters" :key="counter.index"
              :count="counter.number"
              :title="counter.title" />
          </div>
        </info>
      </section>

      <section class="section">
        <info :title="appText.banner.third.header">
          <p class="info__descr">{{ appText.banner.second.text }}</p>

          <base-button class="base-button--decor" @click="showModal('modal-quest')">{{ appText.button.start }}</base-button>
        </info>

        <brands />
      </section>
    </base-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseLayout from '@/layouts/BaseLayout';
import Cover from '@/components/ui/Cover.vue';
import Brands from '@/components/ui/Brands.vue';
import Info from '@/components/ui/Info.vue';
import Counter from '@/components/ui/Counter.vue';
import BaseButton from '@/components/ui/BaseButton.vue';


export default {
  name: 'IndexView',
  computed: {
    ...mapGetters('quiz', ['appText'])
  },
  methods: {
    showModal(modal) {
      this.$root.$emit('layout:showModal', modal);
    },
  },
  components: {
    BaseLayout,
    Cover,
    Brands,
    Info,
    Counter,
    BaseButton,
  }
}
</script>
