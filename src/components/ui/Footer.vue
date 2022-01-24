<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__copyright">@2021 Лайнер</div>
      <a class="footer__text-link" :href="appText.link.privacy">Политика конфиденциальности</a>
      <a class="footer__tel" :href="`tel:+${appText.phone.clear}`">{{ appText.phone.text }}</a>
      <base-button class="footer__btn base-button--white" @click="showModal('modal-quest')">{{ appText.button.start }}</base-button>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseButton from '@/components/ui/BaseButton';

export default {
  name: 'Footer',
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
