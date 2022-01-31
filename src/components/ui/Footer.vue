<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__copyright">@2021 Лайнер</div>
      <router-link to="/privacy-policy" v-slot="{ href }" custom>
        <a class="footer__text-link" :href="href" target="_blank">Политика конфиденциальности</a>
      </router-link>
      <a class="footer__tel" :href="`tel:+${appText.phone.clear}`">{{ appText.phone.text }}</a>
      <base-button class="footer__btn base-button--white"
        v-if="button"
        @click="showModal('modal-quest')">
        {{ appText.button.start }}
      </base-button>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseButton from '@/components/ui/BaseButton';

export default {
  name: 'Footer',
  props: {
    button: {
      type: Boolean,
      default: false,
    }
  },
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
