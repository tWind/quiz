<template>
  <div class="quiz-answer">
    <base-button class="base-button--answer" @click="selectVariant">{{ answer.TITLE }}</base-button>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'QuizAnswer',
  props: {
    answer: {
      type: Object,
      default: () => {},
    }
  },
  computed: {
    answerTags() {
      let tags = [];

      this.answer.TAGS.forEach(tag => {
        tags.push(tag.ID);
      });

      return tags;
    }
  },
  methods: {
    selectVariant() {
      this.$emit('quiz-select-variant', {
        code: this.answer.NEXT_QUESTION,
        id: this.answer.TAGS[0].ID,
        result: this.answer.TITLE,
        tags: this.answerTags,
      });
    }
  },
  components: {
    BaseButton,
  }
};
</script>

<style lang="scss" scoped>
</style>