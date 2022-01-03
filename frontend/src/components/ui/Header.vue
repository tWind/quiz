<template>
  <header class="header">
    <div class="header__container">
      <div class="header__col header__col--left"><a class="header__logo" href="/">
          <div class="header__logo-text">{{ appText.header.logo }}</div></a>
        <div class="header__descr">{{ appText.header.sub }}</div>
      </div>
      <div class="header__col header__col--right">
        <base-button @click="showModal('modal-quest')">подобрать квартиру</base-button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'Header',
  computed: {
    ...mapGetters('quiz', ['appText'],)
  },
  methods: {
    showModal(modal) {
      this.$root.$emit('layout:showModal', modal);
    },
  },
  components: {
    BaseButton,
  },
}
</script>

<style></style>
