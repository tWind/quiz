<template>
  <div class="modal-layout">
    <div class="bg">
      <div class="bg__noise"></div>
    </div>

    <div class="popup__container">
      <div class="popup__header">
        <div class="popup__header-col popup__header-col--left"><a class="popup__header-logo" href="/">
            <div class="popup__header-logo-text">Лайнер</div></a>
          <div class="popup__header-descr">Сервис подбора новостроек от&nbsp;девелоперов</div>
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

.modal-layout {
  padding: 30px;
  background-image: url('~@/assets/images/bg.webp');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;

  @include breakpoint($tablet-960) {
    padding: 16px;
  }
  
  @include breakpoint($mobile-640) {
    background-image: url('~@/assets/images/bg-mobile.webp');
  }
}
</style>
