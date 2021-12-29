<template>
  <div class="counter">
    <div class="counter__title">{{ count }}</div>
    <div class="counter__text" v-html="title"></div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    count: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: 'Заголовок не найден',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~breakpoint-sass';
@import '~@/scss/mixins/core';

.counter {
  width: 100%;
  max-width: 260px;
  margin: 0 40px 0 0;

  @include breakpoint($mobile-640) {
    max-width: 100%;
    margin: 0 0 32px 0;
  }

  &:last-child {
    margin-right: 0;

    @include breakpoint($tablet-960) {}
    @include breakpoint($mobile-640) {
      margin-bottom: 0;
    }
  }
}
    
.counter__title {
  font: 700 64px/1.35 $font-default;
  color: $color-red;
  opacity: 0;

  @include fluid-type(375px, 960px, 40px, 64px);
}
      
.counter__text {
  font: 700 18px/1.35 $font-default;
  color: $color-black-2;

  @include fluid-type(375px, 960px, 16px, 18px);
}
</style>