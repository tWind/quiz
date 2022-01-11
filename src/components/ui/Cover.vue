<template>
  <div class="cover">
    <div class="cover__container">
      <h1 class="cover__title">{{ appText.header.main }}</h1>

      <div class="cover__list">
        <div class="cover__list-item cover__list-item--watch">
          <div class="cover__list-item-text">Подбор займет<br>3&nbsp;минуты</div>
        </div>

        <div class="cover__list-item cover__list-item--shield">
          <div class="cover__list-item-text">Без риэлторов<br>и&nbsp;агентств</div>
        </div>

        <div class="cover__list-item cover__list-item--percent">
          <div class="cover__list-item-text">Актуальные<br>акции и&nbsp;скидки</div>
        </div>
      </div>

      <base-button class="base-button--decor" @click="showModal('modal-quest')">{{ appText.button.start }}</base-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'Cover',
  computed: {
    ...mapGetters('quiz', ['appText']),
  },
  methods: {
    showModal(modal) {
      this.$root.$emit('layout:showModal', modal);
    },
  },
  components: {
    BaseButton,
  }
}
</script>

<style></style>
