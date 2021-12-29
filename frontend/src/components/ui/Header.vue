<template>
  <header class="header">
    <div class="header__container">
      <div class="header__col header__col--left"><a class="header__logo" href="/">
          <div class="header__logo-text">Лайнер</div></a>
        <div class="header__descr">Сервис подбора новостроек от&nbsp;девелоперов</div>
      </div>
      <div class="header__col header__col--right">
        <base-button @click="showModal('modal-quest')">подобрать квартиру</base-button>
      </div>
    </div>
  </header>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'Header',
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
