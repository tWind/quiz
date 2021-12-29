<template>
  <div class="modal-layout">
    <div class="bg">
      <!--.bg__list-->
      <!--  .bg__item.bg__item--first-->
      <!--  .bg__item.bg__item--second-->
      <!--  .bg__item.bg__item--third-->
      <div class="bg__noise"></div>
    </div>
    <div class="popup__container">
      <div class="popup__header">
        <div class="popup__header-col popup__header-col--left"><a class="popup__header-logo" href="/">
            <div class="popup__header-logo-text">Лайнер</div></a>
          <div class="popup__header-descr">Сервис подбора новостроек от&nbsp;девелоперов</div>
        </div>
        <div class="popup__header-col popup__header-col--right">
          <div class="popup__close"></div>
        </div>
      </div>
      <div class="popup__content">
        <div class="popup__text-wrapper">
          <div class="popup__subtitle">Вопрос 1</div>
          <div class="popup__title">Какие планировки вас интересуют?</div>
        </div>
        <form class="popup__form">
          <label class="popup__form-label" for="one">
            <input class="popup__form-input-checkbox" type="checkbox" name="one" id="one">
            <div class="popup__form-btn">Однокомнатные и евродвушки</div>
          </label>
          <label class="popup__form-label" for="two">
            <input class="popup__form-input-checkbox" type="checkbox" name="two" id="two">
            <div class="popup__form-btn">Двухкомнатные</div>
          </label>
          <label class="popup__form-label popup__form-label--active" for="three">
            <input class="popup__form-input-checkbox" type="checkbox" name="three" id="three" checked>
            <div class="popup__form-btn">Трехкомнатные</div>
          </label>
          <label class="popup__form-label" for="four">
            <input class="popup__form-input-checkbox" type="checkbox" name="four" id="four">
            <div class="popup__form-btn">Четырехкомнатные</div>
          </label>
        </form>
        <div class="popup__nav">
          <div class="popup__nav-item popup__nav-item--prev popup__nav-item--disable" href="#">
            <div class="popup__nav-item-text">Назад</div>
          </div><a class="popup__nav-item popup__nav-item--next" href="#" data-btn-popup="feedbackform">
            <div class="popup__nav-item-text">Вперед</div></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalLayout',
}
</script>

<style lang="scss">
@import '~breakpoint-sass';

.modal-layout {
  padding: 30px;
  background-image: url('/assets/images/bg.webp');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;

  @include breakpoint($tablet-960) {
    padding: 16px;
  }
  
  @include breakpoint($mobile-640) {
    background-image: url('/assets/images/bg-mobile.webp');
  }
}
</style>
