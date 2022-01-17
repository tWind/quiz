<template>
  <div class="quiz">
    <div v-if="currentVariant" class="quiz__main">
      <div class="popup__text-wrapper">
        <div class="popup__subtitle">Вопрос {{ questionCount }}</div>
        <div class="popup__title">{{ currentVariant.TITLE }}</div>
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
      <div class="popup__text-wrapper">
        <div class="popup__subtitle">Оставьте заявку</div>
        <div class="popup__title">Мы&nbsp;нашли квартиры, которые вам подходят</div>
        <div class="popup__descr">Укажите ваш личный номер телефона&nbsp;&mdash; на&nbsp;него вы&nbsp;получите подборку квартир</div>
      </div>
      <form class="popup__form">
        <div class="popup__form-row">
          <input
            v-mask="'+7 (###) ### ## ##'"
            v-model="userRequestInfo.phone"
            @keyup="validatePhone()"
            class="popup__input-text popup__input-text--tel" type="text" value="" placeholder="+7 (___)___-__-__">
        </div>

        <div class="popup__form-row">
          <base-button @click="sendCompilationRequest" :disabled="!requestAvailable">Получить подборку</base-button>

          <div class="popup__form-descr">Отправляя заявку вы&nbsp;соглашаетесь с&nbsp;условиями политики конфеденциальности</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

import BaseButton from '@/components/ui/BaseButton';
import QuizAnswer from './QuizAnswer';

export default {
  name: 'Quiz',
  data() {
    return {
      navDisabled: true,
      requestAvailable: false,
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
    sendCompilationRequest() {
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
    validatePhone() {
      this.requestAvailable = (this.userRequestInfo.phone.length === 18)
        ? true
        : false;
    }
  },
  mounted() {
    this.currentVariant = this.quizVariants[0];
    this.selectedVariants.push(this.currentVariant);
  },
  components: {
    QuizAnswer,
    BaseButton,
  }
};
</script>

<style lang="scss">
@import '~breakpoint-sass';

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
}
</style>