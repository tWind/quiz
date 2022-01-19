<template>
  <button class="base-button" :disabled="disabled"
          @click.prevent="callback($event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled: Boolean,
  },
  methods: {
    callback(event) {
      if (event.type === 'click') {
        this.$emit('click', event);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~breakpoint-sass';

.base-button {
  display: inline-block;
  width: 100%;
  height: auto;
  font: normal 700 12px $font-default;
  text-transform: uppercase;
  color: $color-white;
  letter-spacing: 0.08em;
  background: $color-black-3;
  border-radius: 30px;
  border: none;
  line-height: 50px;
  padding: 0 24px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  user-select: none;

  @include breakpoint($tablet-960) {
    font-size: 10px;
  }
    
  &:disabled,
  &[disabled] {
    opacity: 0.5;
    cursor: default;
    &:hover { opacity: 0.5 }
  }

  &:hover {
    background: $color-gray-3;
    color: $color-white;
    transition: all 0.2s ease;
  }

  &--decor {
    position: relative;
    background: $color-black-2;
    width: auto;

    &:after {
      display: block;
      position: absolute; left: 6px; top: 6px;
      content: '';
      width: 100%;
      height: 100%;
      background: $color-white;
      border: 1px $color-black-2 solid;
      border-radius: 30px;
      z-index: -1;
      transition: all 0.05s ease;
    }

    &:hover {
      background: $color-gray-3;
      transition: all 0.2s ease;

      &:after {
        left: 0; top: 0;
        transition: all 0.05s ease;
      }
    }
    
    @include breakpoint($tablet-960) {
      font-size: 12px;
    }
  }

  &--white {
    width: auto;
    background: $color-white;
    color: $color-black-3;
  }

  &--answer {
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
      font: 400 14px/50px $font-default;
    }

    &:hover {
      border: 1px solid $color-black-2;
      background: $color-black-2;
      color: $color-white;
    }
  }
}
</style>