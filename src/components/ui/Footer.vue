<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__copyright">@2021 Лайнер</div>
      <a class="footer__text-link" href="#">Политика конфиденциальности</a>
      <a class="footer__tel" href="tel:+78001242628">8 (800) 124-26-28</a>
      <base-button class="footer__btn base-button--white" @click="showModal('modal-quest')">подобрать квартиру</base-button>
    </div>
  </footer>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';

export default {
  name: 'Footer',
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

<style lang="scss" scoped>
@import '~breakpoint-sass';

.footer__btn {
  @include breakpoint($tablet-960) {
    order: 4;
  }
}
</style>
