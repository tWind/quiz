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
      <div class="popup__content">
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
  height: 100%;
  padding: 30px;
  background-image: url('~@/assets/images/bg.webp');
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
    
  &::-webkit-scrollbar {
    display: none /* Safari and Chrome */
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

.popup__content {
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-y: scroll;

  @include breakpoint($tablet-960) {
    padding: 0 24px;
    height: 100%;
  }
}

.popup__text-wrapper {
  margin: 0 0 50px;
  @include breakpoint($tablet-960) {
    margin: 0 0 32px
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
    width: 100%;
  }
}

.popup__form {
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
    max-width: 593px
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

    @include breakpoint($tablet-960);
  }
}

.popup__form-descr {
  font: 400 12px/1.35 $font-default;
  color: $color-white;
  margin: 0 0 0 30px;
  transform: translate3d(0,7px,0);

  @include breakpoint($tablet-960) {
    transform: translate3d(0, -7px, 0);
  }
    
  @include breakpoint($tablet-768) {
    transform: translate3d(0, 0, 0);
    margin: 0 0 0 0;
  }
}
  
.popup__form-label {
  width: 100%;
  max-width: 300px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 32px 0;
  white-space: nowrap;
  text-align: center;
  position: relative;

  @include breakpoint($desktop-large) {
    height: 90px;
  }
    
  @include breakpoint($tablet-960) {
    max-width: 100%;
    height: 50px;
    margin: 0 0 12px;
  }
    
  &:last-child {
    @include breakpoint($tablet-960) {
      margin-bottom: 0;
    }
  }  
}

.popup__form-input-checkbox {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 0;
}

.popup__form-btn {
  padding: 0 31px 0;
  background: $color-white;
  border: 1px solid $color-white;
  border-radius: 60px;
  font: 400 16px/70px $font-default;
  color: $color-black-2;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease;

  @include breakpoint($desktop-large) {
    line-height: 90px;
  }
    
  @include breakpoint($tablet-960) {
    padding: 0 21px 0;
    font: 400 14px/50px $font-default;
  }

  &:hover {
    background: $color-white-3;
    @include breakpoint($tablet-960);
  }

  .popup__form-input-checkbox:checked + & {
    border: 1px solid $color-black-2;
    background: $color-black-2;
    color: $color-white;
  }
}
  
.popup__nav {
  display: flex;
  justify-content: center;
  align-items: center;

  @include breakpoint($tablet-960) {
    margin-top: auto;
  }
}
.popup__nav-item {
  color: $color-white;
  background: $color-black-2;
  border: 1px solid $color-black-2;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 12px 20px 12px 20px;
  margin: 0 12px 0 0;
  transition: all 0.2s ease;

  &:hover {
    background: $color-white;
    color: $color-black-2;
    border-color: $color-white;
  }

  &:last-child {
    margin-right: 0;
  }
    
  &--prev {
    &:before {
      content: '';
      @include icon-arrow-left-white;
      transition: all 0.2s ease;
      @include breakpoint($tablet-960);
    }
    &:hover {
      &:before {
        @include icon-arrow-left-black;
      }
    }
  }
  &--next {
    &:after {
      content: '';
      @include icon-arrow-right-white;
      transition: all 0.2s ease;
    }
      
    &:hover {
      &:after {
        @include icon-arrow-right-black
      }
    }
  }
    
  &--disable {
    opacity: 0.3;
    background: $color-white;
    color: $color-black-2;
    border-color: $color-white;
    
    &.popup__nav-item--prev {
      &:before {
        @include icon-arrow-left-black;
      }
    }

    &.popup__nav-item--next {
      &:after {
        @include icon-arrow-right-black;
      }
    }
      
    &:hover {
      background: $color-white;
      color: $color-black-2;
      border-color: $color-white;

      &.popup__nav-item--prev {
        &:before {
          @include icon-arrow-left-black;
        }
      }
        
      &.popup__nav-item--next {
        &:after {
          @include icon-arrow-right-black;
        }
      }
    }
  }
}
.popup__nav-item-text {
  font: 400 14px/1 $font-default;
  text-transform: uppercase;
  transform: translate3d(0,0.5px,0);

  .popup__nav-item--prev & {
    margin: 0 0 0 10px;
  }
    
  .popup__nav-item--next & {
    margin: 0 10px 0 0;
  }
    
}
.popup__input-text {
  @include default-text-input;
}
</style>
