<template>
  <div class="base-layout" :class="{ 'base-layout--bg': isMainPage }">
    <div class="bg" v-if="isMainPage">
      <div class="bg__noise"></div>
    </div>

    <section>
      <app-header :class="{ 'header--black': !isMainPage }" :button="isMainPage" />
    </section>

    <slot></slot>
    
    <app-footer />
    
    <modal name="modal-quest"
      :width="`100%`"
      :height="`100%`"
    >
      <modal-quest />
    </modal>
  </div>
</template>

<script>
import AppHeader from '@/components/ui/Header.vue';
import AppFooter from '@/components/ui/Footer.vue';
import ModalQuest from '@/components/modals/ModalQuest.vue';

export default {
  name: 'BaseLayout',
  data() {
    return {
      currentModal: null,
    };
  },
  methods: {
    showModal(modal) {
      this.$modal.show(modal);
      this.currentModal = modal;
    },
    closeModal() {
      this.$modal.hide(this.currentModal);
      this.currentModal = null;
    },
  },
  computed: {
    isMainPage() {
      return this.$route.name === 'index' ? true : false;
    },
  },
  created() {
    this.$root.$on('layout:showModal', (data) => {
      this.showModal(data);
    });
    this.$root.$on('layout:closeModal', () => {
      this.closeModal();
    });
  },
  components: {
    AppHeader,
    AppFooter,
    ModalQuest,
  },
}
</script>

<style lang="scss">
@import '~breakpoint-sass';

.base-layout {
  &--bg {
    background-image: url('#{$images-path}/bg.png');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;

    @include breakpoint($mobile-640) {
      background-image: url('#{$images-path}/bg-mobile.webp');
    }
  }
}
</style>
