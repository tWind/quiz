<template>
  <div class="base-layout">
    <section class="section">
      <app-header />

      <cover />
    </section>

    <slot></slot>
    
    <app-footer />
    <modal name="modal-quest"
      :width="`90%`"
      :height="`auto`"
      :scrollable="true"
    >
      <modal-quest />
    </modal>
  </div>
</template>

<script>
import AppHeader from '@/components/ui/Header.vue';
import AppFooter from '@/components/ui/Footer.vue';
import Cover from '@/components/ui/Cover.vue';
import ModalQuest from '@/components/modals/ModalQuest.vue';

export default {
  name: 'BaseLayout',
  components: {
    AppHeader,
    AppFooter,
    Cover,
    ModalQuest,
  },
  methods: {
    showModal(modal) {
      this.$modal.show(modal);
    }
  },
  created() {
    this.$root.$on('layout:showModal', (data) => {
      this.showModal(data);
    });
  },
}
</script>

<style></style>
