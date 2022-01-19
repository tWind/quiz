<template>
  <div class="quiz">
    <div v-if="currentVariant" class="quiz__main">
      <div class="quiz__header">
        <div class="quiz__header-subtitle">Вопрос {{ questionCount }}</div>
        <div class="quiz__header-title">{{ currentVariant.TITLE }}</div>
      </div>

      <form class="quiz__form">
        <quiz-answer class="quiz__form-item"
          v-for="answer in currentVariant.ANSWERS" :key="answer.index"
          :answer="answer"
          @quiz-select-variant="selectCallback"
        />
      </form>

      <!-- навигация пока не отображается, так как при выборе ответа мы сразу показываем следующий вопрос -->
      <div class="popup__nav">
        <div class="popup__nav-item popup__nav-item--prev"
          :class="{ 'popup__nav-item--disable': navDisabled }"
          @click="prevButtonClick()"
        >
          <div class="popup__nav-item-text">Назад</div>
        </div>
      </div>
    </div>

    <div v-else class="quiz__feedback" >
      <quiz-feedback @feedback:submit="sendCompilationRequest($event)" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

import QuizAnswer from './QuizAnswer';
import QuizFeedback from './QuizFeedback';

export default {
  name: 'Quiz',
  data() {
    return {
      navDisabled: true,
      items: [],
      currentVariant: {},
      selectedVariants: [],
      questionCount: 1,
      userRequestInfo: {
        phone: '',
        log: [],
        tags: [],
      },
    }
  },
  computed: {
    ...mapGetters('quiz', ['quizVariants']),
  },
  methods: {
    ...mapActions('quiz', ['loadSelectionLead']),
    ...mapMutations('quiz', ['setRequestInfo']),
    selectCallback(answer) {
      this.userRequestInfo.tags.push(`${ answer.id }`);
      this.userRequestInfo.log.push(`${ this.currentVariant.TITLE }: ${ answer.result }`);
  
      this.navDisabled = false;

      if(answer.code) {
        this.questionCount += 1;

        this.currentVariant = this.quizVariants.find((variant) => {
          return variant.CODE === answer.code;
        });

        this.selectedVariants.push(this.currentVariant);
      } else {
        this.currentVariant = null;
      }

      this.checkNavigationAbility();
    },
    sendCompilationRequest(phone) {
      this.userRequestInfo.phone = phone;

      // собираем теги и ответы в строки - необходимый формат для запроса
      this.userRequestInfo.tags = this.userRequestInfo.tags.join(',');
      this.userRequestInfo.log = this.userRequestInfo.log.join('<br>');

      console.log(this.userRequestInfo);

      this.setRequestInfo(this.userRequestInfo);

      this.$router.push({ name: 'thanks' });
    },
    prevButtonClick() {
      if(this.navDisabled) return;
      
      this.questionCount -= 1;

      this.userRequestInfo.tags.pop();
      this.userRequestInfo.log.pop();
      this.selectedVariants.pop();

      this.currentVariant = this.selectedVariants[this.selectedVariants.length - 1];

      this.checkNavigationAbility();
    },
    checkNavigationAbility() {
      this.navDisabled = (!this.currentVariant || this.questionCount === 1)
        ? true
        : false;
    },
  },
  mounted() {
    this.currentVariant = this.quizVariants[0];
    this.selectedVariants.push(this.currentVariant);
  },
  components: {
    QuizAnswer,
    QuizFeedback,
  }
};
</script>

<style lang="scss">
@import '~breakpoint-sass';
@import '~@/scss/mixins/core';

.quiz__header {
  margin: 0 0 50px;

  @include breakpoint($tablet-960) {
    margin: 0 0 32px
  }
}
    
.quiz__header-subtitle {
  font: 500 14px/1.5 $font-default;
  text-transform: uppercase;
  color: $color-white;
  text-align: center;
  margin: 0 0 24px;

  @include fluid-type(768px, 960px, 10px, 14px);
  @include breakpoint($tablet-960) {
    font-weight: 400;
    margin: 0 0 12px;
  }
}

.quiz__header-title {
  font: 700 52px/1.2 $font-default;
  color: $color-white;
  text-align: center;
  margin: 0 auto 32px;
  width: 100%;
  max-width: 715px;

  @include fluid-type(768px, 960px, 24px, 52px);
  @include breakpoint($tablet-960) {
    margin: 0 0 32px;
  }
    
  &:last-child {
    margin-bottom: 0;
    @include breakpoint($tablet-960);
  }
}

.quiz__form {
  width: 100%;
  max-width: 632px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 auto 50px;

  @include breakpoint($desktop-large) {
    margin: 0 0 154px;
  }
      
  @include breakpoint($tablet-960) {
    max-width: 100%
  }
}

.quiz__form-item {
  flex-basis: calc(50% - 1rem);
  flex-shrink: 0;
  margin: 0 .5rem .5rem;

  @include breakpoint($mobile-480) {
    max-width: 100%;
    flex-basis: 100%;
    margin: 0 0 .5rem;
  }
}
</style>