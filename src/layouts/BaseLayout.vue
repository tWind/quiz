<template>
  <div class="base-layout">
    <section>
      <app-header />
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

<style></style>
