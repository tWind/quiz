<template>
  <div class="quiz-feedback">
    <div class="quiz-feedback__header">
      <div class="popup__subtitle">Оставьте заявку</div>
      <div class="popup__title">{{ appText.form.header }}</div>
      <div class="popup__descr">{{ appText.form.subheader }}</div>
    </div>

    <form class="quiz-feedback__form">
      <div class="popup__form-row">
        <input
          v-mask="'+7 (###) ### ## ##'"
          v-model="phone"
          @keyup="validatePhone()"
          class="popup__input-text popup__input-text--tel" type="text" value="" placeholder="+7 (___)___-__-__">
      </div>

      <div class="popup__form-row">
        <base-button @click="submitFeedback" :disabled="!requestAvailable">{{ appText.button.send }}</base-button>

        <div class="popup__form-descr">Отправляя заявку вы&nbsp;соглашаетесь с&nbsp;условиями политики конфеденциальности</div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CODES from '@/data/phoneCodes';

import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'QuizFeedback',
  data() {
    return {
      phone: '',
      requestAvailable: false,
      phoneCodes: CODES,
    }
  },
  components: {
    BaseButton,
  },
  computed: {
    ...mapGetters('quiz', ['appText']),
  },
  methods: {
    validatePhone() {
      this.requestAvailable = (this.phone.length === 18)
        ? this.isCodeExists()
        : false;
    },
    isCodeExists() {
      const regExp = /\(([^)]+)\)/;
      const code = parseInt(regExp.exec(this.phone)[1]);

      if(this.phoneCodes.includes(code)) {
        return true;
      }
      
      return false;
    },
    submitFeedback() {
      this.$emit('feedback:submit', this.phone);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~breakpoint-sass';
@import '~@/scss/mixins/core';

.quiz-feedback__header {
  margin: 0 0 50px;

  @include breakpoint($tablet-960) {
    margin: 0 0 32px;
  }
}

.popup__subtitle {
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

.popup__title {
  font: 700 52px/1.2 $font-default;
  color: $color-white;
  text-align: center;
  margin: 0 auto 32px auto;
  width: 100%;
  max-width: 715px;

  @include fluid-type(768px, 960px, 24px, 52px);
  @include breakpoint($tablet-960) {
    margin: 0 0 32px;
  }
    
  &:last-child {
    margin-bottom: 0;
  }
}
  
.popup__descr {
  font: 400 18px/1.25 $font-default;
  text-align: center;
  color: $color-white;

  @include fluid-type(768px, 960px, 16px, 18px);
  @include breakpoint($tablet-960) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  } 
  @include breakpoint($mobile-480) {
    width: 100%
  }
}
      
.quiz-feedback__form {
  width: 100%;
  max-width: 632px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 0 50px;

  @include breakpoint($desktop-large) {
    margin: 0 0 154px;
  }
  @include breakpoint($tablet-960) {
    max-width: 100%;
  }
    
  .popup--form & {
    max-width: 593px;
  }
}

.popup__form-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 40px;
  
  @include breakpoint($tablet-960) {
    margin: 0 0 37px;
  }
    
  @include breakpoint($tablet-768) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
    
  &:last-child {
    margin-bottom: 0;
  }
}
    
.popup__form-descr {
  font: 400 12px/1.35 $font-default;
  color: $color-white;
  margin: 0 0 0 30px;

  @include breakpoint($tablet-960) {
    transform: translate3d(0, -7px, 0);
  }
    
  @include breakpoint($tablet-768) {
    transform: translate3d(0, 0, 0);
    margin: 0 0 0 0;
  }
}
</style>
