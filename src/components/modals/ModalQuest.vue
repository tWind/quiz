<template>
  <div class="modal-quest">
    <modal-layout>
      <quiz />
    </modal-layout>
  </div>
</template>

<script>
import ModalLayout from '@/layouts/ModalLayout.vue';
import Quiz from '@/components/quiz/Quiz.vue';

export default {
  name: 'ModalQuest',
  components: {
    ModalLayout,
    Quiz,
  },
};
</script>

<style lang="scss">
</style>