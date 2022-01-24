<template>
  <div class="modal modal-layout">
    <div class="bg">
      <div class="bg__noise"></div>
    </div>

    <div class="modal__container">
      <div class="modal__header">
        <div class="modal__header-logo">
          <a href="/">Лайнер</a>
          <span>Сервис подбора новостроек от&nbsp;девелоперов</span>
        </div>
        
        <div class="popup__header-col popup__header-col--right">
          <div class="popup__close" @click="closeModal()"></div>
        </div>
      </div>
      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalLayout',
  methods: {
    closeModal() {
      this.$root.$emit('layout:closeModal');
    },
  },
}
</script>

<style lang="scss">
@import '~breakpoint-sass';
@import '~@/scss/mixins/_core';

.modal-layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 30px;
  background-image: url('~@/assets/images/bg.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  @include breakpoint($tablet-960) {
    padding: 16px;
  }
  
  @include breakpoint($mobile-640) {
    background-image: url('~@/assets/images/bg-mobile.webp');
  }
}

.modal__container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-basis: 100%;
  flex-grow: 1;
  padding: 0 0 60px;
  border: 1px solid $color-black-2;
  border-radius: 60px;

  @include breakpoint($tablet-960) {
    border-radius: 32px;
    padding: 0 0 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
  }
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  @include breakpoint($desktop-large) { margin: 0 0 150px; }
    
  @include breakpoint($tablet-960) {
    padding: 24px 24px 24px 24px;
    margin: 0 0 36px;
    width: 100%;
  }
}

.modal__header-logo {
  display: flex;
  align-items: center;

  a {
    margin: 0 20px 0 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    font: 700 32px/1 $font-default;
    color: $color-white;
    text-transform: uppercase;
    margin: 0 20px 0 0;
    
    &:after {
      content: '';
      margin-left: 20px;

      @include icon-ornament;
      @include breakpoint($tablet-960) {
        display: none;
        font: 700 20px/1 $font-default;
      }
    }
  }

  span {
    font: 400 12px/1.2 $font-default;
    color: $color-white;
    text-transform: uppercase;
    
    @include breakpoint($tablet-960) {
      display: none;
    }
  }
}

.modal__header-col {
  &--left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @include breakpoint($tablet-960);
  }
}

.popup__close {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-black-2;
  cursor: pointer;

  @include breakpoint($tablet-960) {
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
  }
    
  &:after {
    content: '';
    @include icon-close;
  }
}

.modal__content {
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  margin: auto;

  @include breakpoint($tablet-960) {
    padding: 0 24px;
    height: 100%;
  }
}
</style>
