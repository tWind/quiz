<template>
  <button class="base-button" :disabled="disabled"
          @click="callback($event)">
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
  user-select: none;
  display: inline-block;
  font: normal 700 12px $font-default;
  text-transform: uppercase;
  color: $color-white;
  letter-spacing: 0.08em;
  width: 100%;
  height: auto;
  background: $color-black-3;
  border-radius: 30px;
  border: none;
  line-height: 1;
  padding: 20px 24px 18px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;

  @include breakpoint($tablet-960) {
    font-size: 10px;
    padding: 13px 12px 12px;
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

  @include breakpoint($mobile-640) {
    padding: 17px 20px 15px;
  }
}
</style>